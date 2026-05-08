import type { Post, PostsConnection, Category } from '~/types/content'

interface StrapiCover {
  url: string
}

interface StrapiPost {
  id: number
  documentId: string
  slug: string
  title: string
  content: string | null
  excerpt: string | null
  publishedAt: string | null
  cover: StrapiCover | null
}

interface StrapiMeta {
  pagination: {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
}

interface StrapiResponse<T> {
  data: T
  meta: StrapiMeta
}

async function strapiGet<T>(path: string): Promise<StrapiResponse<T>> {
  return $fetch<StrapiResponse<T>>(`/api/strapi/${path}`)
}

function mapPost(item: StrapiPost): Post {
  return {
    id: item.documentId,
    slug: item.slug,
    title: item.title,
    content: item.content ?? '',
    excerpt: item.excerpt ?? '',
    date: item.publishedAt ?? '',
    featuredImage: item.cover?.url
      ? { node: { sourceUrl: item.cover.url } }
      : null,
  }
}

export async function getHomePosts(locale: string): Promise<Post[]> {
  const endpoint = locale === 'ge' ? 'bildex-georgians' : 'bildexes'
  const res = await strapiGet<StrapiPost[]>(
    `${endpoint}?filters[category][slug][$eq]=news&populate=cover&pagination[pageSize]=3&sort=publishedAt:desc`,
  )
  return (res.data ?? []).map(mapPost)
}

export async function getPostsByCategory(
  slug: string,
  first = 9,
  after?: string,
): Promise<PostsConnection> {
  const page = after ? parseInt(after, 10) : 1
  const res = await strapiGet<StrapiPost[]>(
    `bildexes?filters[category][slug][$eq]=${slug}&populate=cover&pagination[page]=${page}&pagination[pageSize]=${first}&sort=publishedAt:desc`,
  )
  const p = res.meta.pagination
  return {
    pageInfo: {
      hasNextPage: p.page < p.pageCount,
      endCursor: p.page < p.pageCount ? String(p.page + 1) : null,
    },
    edges: (res.data ?? []).map(item => ({ node: mapPost(item) })),
  }
}

export async function getPosts(
  first = 9,
  after?: string,
): Promise<PostsConnection> {
  const page = after ? parseInt(after, 10) : 1
  const res = await strapiGet<StrapiPost[]>(
    `bildexes?populate=cover&pagination[page]=${page}&pagination[pageSize]=${first}&sort=publishedAt:desc`,
  )
  const p = res.meta.pagination
  return {
    pageInfo: {
      hasNextPage: p.page < p.pageCount,
      endCursor: p.page < p.pageCount ? String(p.page + 1) : null,
    },
    edges: (res.data ?? []).map(item => ({ node: mapPost(item) })),
  }
}

export async function getGeoPostsByCategory(
  slug: string,
  first = 9,
  after?: string,
): Promise<PostsConnection> {
  const page = after ? parseInt(after, 10) : 1
  const res = await strapiGet<StrapiPost[]>(
    `bildex-georgians?filters[category][slug][$eq]=${slug}&populate=cover&pagination[page]=${page}&pagination[pageSize]=${first}&sort=publishedAt:desc`,
  )
  const p = res.meta.pagination
  return {
    pageInfo: {
      hasNextPage: p.page < p.pageCount,
      endCursor: p.page < p.pageCount ? String(p.page + 1) : null,
    },
    edges: (res.data ?? []).map(item => ({ node: mapPost(item) })),
  }
}

export async function getGeoPosts(
  first = 9,
  after?: string,
): Promise<PostsConnection> {
  const page = after ? parseInt(after, 10) : 1
  const res = await strapiGet<StrapiPost[]>(
    `bildex-georgians?populate=cover&pagination[page]=${page}&pagination[pageSize]=${first}&sort=publishedAt:desc`,
  )
  const p = res.meta.pagination
  return {
    pageInfo: {
      hasNextPage: p.page < p.pageCount,
      endCursor: p.page < p.pageCount ? String(p.page + 1) : null,
    },
    edges: (res.data ?? []).map(item => ({ node: mapPost(item) })),
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const res = await strapiGet<StrapiPost[]>(
    `bildexes?filters[slug][$eq]=${slug}&populate=cover`,
  )
  const items = res.data ?? []
  return items.length ? mapPost(items[0]) : null
}

export async function getGeoPostBySlug(slug: string): Promise<Post | null> {
  const res = await strapiGet<StrapiPost[]>(
    `bildex-georgians?filters[slug][$eq]=${slug}&populate=cover`,
  )
  const items = res.data ?? []
  return items.length ? mapPost(items[0]) : null
}

export async function getAllCategories(): Promise<Category[]> {
  const [esRes, geRes] = await Promise.all([
    strapiGet<Category[]>('bildex-categories?fields[0]=name&fields[1]=slug&pagination[pageSize]=100'),
    strapiGet<Category[]>('bildex-georgian-categories?fields[0]=name&fields[1]=slug&pagination[pageSize]=100'),
  ])
  const all = [...(esRes.data ?? []), ...(geRes.data ?? [])]
  const seen = new Set<string>()
  return all.filter(c => {
    if (seen.has(c.slug)) return false
    seen.add(c.slug)
    return true
  })
}

export async function getAllPostSlugs(): Promise<string[]> {
  const [esRes, geRes] = await Promise.all([
    strapiGet<{ slug: string }[]>('bildexes?fields[0]=slug&pagination[pageSize]=1000'),
    strapiGet<{ slug: string }[]>('bildex-georgians?fields[0]=slug&pagination[pageSize]=1000'),
  ])
  return [
    ...(esRes.data ?? []).map(p => p.slug),
    ...(geRes.data ?? []).map(p => p.slug),
  ]
}
