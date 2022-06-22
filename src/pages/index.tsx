import UnstyledLink from '@/components/atoms/UnstyledLink'
import BlogList from '@/components/organism/BlogList'
import Hero from '@/components/template/Hero'
import Layout from '@/components/template/Layout'
import { BlogProps } from '@/data/blog/blog.type'
import getBlog from '@/helpers/getBlog'
import { ArrowSmRightIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import type { GetStaticProps, NextPage } from 'next'

interface HomeProps {
  blogs: Array<BlogProps & { slug: string }>
}

const Home: NextPage<HomeProps> = ({ blogs = [] }) => {
  const ownerName: string = process.env.NEXT_PUBLIC_OWNER_NAME as string
  const meta = {
    title: ownerName,
    template: 'Personal Blog',
    description: `I'm ${ownerName}, a Lead Software Engineer focused on React & TypeScript Frontend Development.`,
    openGraph: {
      images: [
        {
          url: 'https://og-image.vercel.app/**NEXT.js%20Starter%20Blog**%3Cbr%20%2F%3EStarter%20blog%20with%20MDX%2C%20Tailwind%20CSS%2C%20and%20TypeScript..png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-bw-logo.svg',
          alt: 'NEXT.js Starter Blog',
          width: 1200,
          height: 600,
        },
      ],
    },
  }

  return (
    <Layout as="main" {...meta}>
      <Hero {...meta}>
        <p className="max-w-prose">
          I am an experienced Architect, Manager, and Team Lead. I have vast
          experience leading teams in fast paced environments delivering
          software with aggressive deadlines. I have built several enterprise
          production applications from the ground up. By staying connected in
          the developer community, I can architect an application using a modern
          React tech stack that not only makes sense for the business needs but
          the development team involved as well..
        </p>
      </Hero>

      <BlogList blogs={blogs} title="Featured Post">
        <UnstyledLink
          href="/blog"
          className={clsx(
            'group',
            'items-center space-x-1 font-medium',
            'hover:text-primary-3 dark:hover:text-primary-2'
          )}
        >
          <span>See all post</span>
          <ArrowSmRightIcon
            className={clsx(
              'inline-flex w-4 h-4 transition-all duration-200',
              '-translate-x-4 group-hover:translate-x-0',
              'opacity-0 group-hover:opacity-100'
            )}
          />
        </UnstyledLink>
      </BlogList>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const blogs = getBlog()

  return {
    props: {
      blogs: blogs
        .map((b) => ({ ...b.data, slug: b.slug }))
        .filter((b) => b.featured),
    },
  }
}

export default Home
