export type NotificationFilterId = 'todas' | 'novas' | 'lidas'

export type NotificationStatus = 'new' | 'read'

export type NotificationKind =
  | 'aviso'
  | 'programacao'
  | 'vantagens'
  | 'feira'
  | 'mapa'
  | 'lojas'

export type NotificationTone = 'brand' | 'blue' | 'green' | 'orange' | 'pink'

export type NotificationFilter = {
  id: NotificationFilterId
  label: string
}

export type NotificationItem = {
  id: string
  title: string
  description: string
  timeAgo: string
  status: NotificationStatus
  kind: NotificationKind
  tone: NotificationTone
}
