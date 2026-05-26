export type ProgramacaoEvent = {
  id: string
  dayId: string
  title: string
  badge: string
  imageUri: string
}

export type ProgramacaoDay = {
  id: string
  weekdayShort: string
  dayNumber: string
  monthShort: string
  fullLabel: string
}

const WEEKDAY_SHORT = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'] as const
const WEEKDAY_FULL = ['DOMINGO', 'SEGUNDA-FEIRA', 'TERÇA-FEIRA', 'QUARTA-FEIRA', 'QUINTA-FEIRA', 'SEXTA-FEIRA', 'SÁBADO'] as const
const MONTH_SHORT = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'] as const
const MONTH_FULL = ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'] as const

type EventTemplate = { title: string; badge: string; imageUri: string }

const EVENT_TEMPLATES: EventTemplate[][] = [
  [
    { title: 'Abertura de luzes no Viaduto', badge: 'Viaduto Santa Ifigênia • 17h • Acesso Livre', imageUri: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80' },
    { title: 'Jam de rua com brass band', badge: 'Largo do Paissandu • 18h30 • Entrada Franca', imageUri: 'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=1200&q=80' },
    { title: 'Sessão de vídeos no telão', badge: 'Palco 1 • 20h • Ao vivo', imageUri: 'https://images.unsplash.com/photo-1499364615650-ec38552f4f34?auto=format&fit=crop&w=1200&q=80' },
  ],
  [
    { title: 'Passeio guiado pela arquitetura do centro', badge: 'Saída do Boulevard • 10h • Inscrição Livre', imageUri: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80' },
    { title: 'Pocket show na Galeria Nova', badge: 'Galeria Nova • 16h • Acesso Livre', imageUri: 'https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=1200&q=80' },
  ],
  [
    { title: 'Megashow SP', badge: 'Palco 2 • 18h • Acesso Livre', imageUri: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80' },
    { title: 'São Paulo, a capital do Grafite', badge: 'Palco 2 • 18h • Acesso Livre', imageUri: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80' },
    { title: 'Virada sonora na Escadaria Central', badge: 'Escadaria Central • 20h • Entrada Franca', imageUri: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80' },
  ],
  [
    { title: 'Circuito de arte urbana expandido', badge: 'Rua Aurora • 16h • Percurso Guiado', imageUri: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=80' },
    { title: 'Transmissão ao vivo do boulevard', badge: 'Telão Principal • 19h • Ao vivo', imageUri: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80' },
    { title: 'Cinema a céu aberto com trilha ao vivo', badge: 'Praça das Artes • 21h • Sessão Especial', imageUri: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80' },
  ],
  [
    { title: 'Feira do Boulevard especial de domingo', badge: 'Praça Sul • 10h • Entrada Livre', imageUri: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80' },
    { title: 'Roda de samba com convidados', badge: 'Palco Rua • 17h • Ao vivo', imageUri: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80' },
    { title: 'Oficina de cartazes e lambe-lambe', badge: 'Ateliê Aberto • 14h • 30 vagas', imageUri: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80' },
  ],
  [
    { title: 'Manhã de yoga urbana', badge: 'Terraço Central • 8h • Entrada Livre', imageUri: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80' },
    { title: 'Encontro de criadores independentes', badge: 'Galeria Boulevard • 15h • Networking', imageUri: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80' },
    { title: 'Encerramento com DJ set panorâmico', badge: 'Cobertura • 19h • Acesso Livre', imageUri: 'https://images.unsplash.com/photo-1571266028243-d220c9c3b3c4?auto=format&fit=crop&w=1200&q=80' },
  ],
]

function startOfLocalDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}
function addDays(date: Date, days: number) {
  const next = new Date(date)
  next.setDate(next.getDate() + days)
  return next
}
function formatDayId(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`
}

const today = startOfLocalDay(new Date())

export const PROGRAMACAO_MONTH_TITLE = `${MONTH_FULL[today.getMonth()]} ${today.getFullYear()}`

export const PROGRAMACAO_DAYS: ProgramacaoDay[] = Array.from({ length: 6 }, (_, i) => {
  const date = addDays(today, i)
  return {
    id: formatDayId(date),
    weekdayShort: i === 0 ? 'HOJE' : WEEKDAY_SHORT[date.getDay()],
    dayNumber: String(date.getDate()),
    monthShort: MONTH_SHORT[date.getMonth()],
    fullLabel: `${WEEKDAY_FULL[date.getDay()]}, ${date.getDate()} DE ${MONTH_FULL[date.getMonth()]}`,
  }
})

export const PROGRAMACAO_DEFAULT_DAY_ID = PROGRAMACAO_DAYS[0]?.id ?? formatDayId(today)

export const PROGRAMACAO_EVENTS: ProgramacaoEvent[] = PROGRAMACAO_DAYS.flatMap((day, di) =>
  (EVENT_TEMPLATES[di] ?? EVENT_TEMPLATES[EVENT_TEMPLATES.length - 1]).map((ev, ei) => ({
    id: `${day.id}-${ei}`,
    dayId: day.id,
    title: ev.title,
    badge: ev.badge,
    imageUri: ev.imageUri,
  }))
)
