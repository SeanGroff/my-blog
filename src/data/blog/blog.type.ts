export interface BlogProps {
  featured: boolean
  title: string
  description: string
  published: string
  last_modified: string
  thumbnail?: string
  author_name: string
  author_image: string
  tags: Array<string>
  keywords: Array<string>
}
