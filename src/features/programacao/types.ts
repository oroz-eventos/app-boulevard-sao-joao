export type ProgramacaoDay = {
  id: string
  weekdayShort: string
  dayNumber: string
  monthShort: string
  fullLabel: string
}

export type ProgramacaoEvent = {
  id: string
  dayId: string
  title: string
  imageUri: string
  badge: string
}
