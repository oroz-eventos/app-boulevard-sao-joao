import PageHeader from '@/src/components/PageHeader'
import BoulevardMap from '@/src/features/mapa/BoulevardMap'

export default function MapaPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader title="Mapa" subtitle="Av. São João × Ipiranga · 5 quarteirões" showNotif />
      <BoulevardMap />
    </div>
  )
}
