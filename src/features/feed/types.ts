export type EditorialLineId = 'centro' | 'sao-paulo' | 'ao-vivo'

export type FeedPost = {
  id: string
  editorial: EditorialLineId
  title: string
  description: string
  images: string[]
}

export type EditorialTab = {
  id: EditorialLineId
  label: string
}
