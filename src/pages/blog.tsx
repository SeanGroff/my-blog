import Searchbar from '@/components/mollecules/Searchbar'
import BlogList from '@/components/organism/BlogList'
import Hero from '@/components/template/Hero'
import Layout from '@/components/template/Layout'
import { BlogProps } from '@/data/blog/blog.type'
import getBlog from '@/helpers/getBlog'
import useSearchBlogQuery from '@/hooks/useSearchBlogQuery'
import type { GetStaticProps, NextPage } from 'next'

const meta = {
  title: 'Blog',
  description: `I've been writing about frontend development since 2016. I've written about React, TypeScript, Modern Tooling, CSS, and more.`,
}

interface BlogPageProps {
  latestPost: Array<BlogProps & { slug: string }>
  allPost: Array<BlogProps & { slug: string }>
}

const BlogPage: NextPage<BlogPageProps> = ({
  latestPost = [],
  allPost = [],
}) => {
  const { query, handleChange, filteredBlog } = useSearchBlogQuery(allPost)

  return (
    <Layout as="main" {...meta}>
      <Hero {...meta} />

      <Searchbar
        onChange={handleChange}
        value={query}
        placeholder="Search Posts.."
      />

      {query.length === 0 && (
        <BlogList
          blogs={latestPost}
          title="Latest Posts"
          className="mb-20"
          layout="column"
        />
      )}
      {query.length === 0 && (
        <BlogList blogs={allPost} title="All Posts" layout="column" />
      )}

      {query.length > 0 && filteredBlog.length > 0 ? (
        <BlogList blogs={filteredBlog} title="Search Results" layout="column" />
      ) : null}

      {query.length > 0 && filteredBlog.length === 0 ? (
        <p>No result found</p>
      ) : null}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const blogs = getBlog()

  return {
    props: {
      latestPost: blogs
        // map the blogs and add slug property,
        .map((b) => ({ ...b.data, slug: b.slug }))
        // sort descending by date
        .sort((a, b) => {
          return +a.published - +b.published
        })
        // cut the first 3 and so on, leave only 2 latest post
        .slice(0, 2),
      allPost: blogs.map((b) => ({ ...b.data, slug: b.slug })),
    },
  }
}

export default BlogPage
