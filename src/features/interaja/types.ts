export type InterajaSlide = {
  id: string
  kind: 'ar' | 'quiz' | 'video'
  title: string
  description: string
  expiresInHours: number
  participantsLabel: string
  actionLabel: string
  imageUri: string
}
