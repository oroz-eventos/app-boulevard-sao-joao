import Link from 'next/link'
import Image from 'next/image'
import { FEATURED } from '@/src/lib/data/home'

export default function HomeFeatured() {
  return (
    <div>
      <h2 className="text-[13px] font-semibold text-tx-secondary uppercase tracking-wider mb-3">
        Destaque agora
      </h2>
      <Link href="/programacao" className="block relative rounded-2xl overflow-hidden h-44 press-scale">
        <Image
          src={FEATURED.imageUri}
          alt={FEATURED.title}
          fill
          className="object-cover"
          sizes="430px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span className="text-white/80 text-[11px] font-medium">{FEATURED.tag}</span>
          <h3 className="text-white font-bold text-[15px] leading-snug mt-0.5">{FEATURED.title}</h3>
          <p className="text-white/60 text-[11px] mt-1">{FEATURED.meta}</p>
        </div>
      </Link>
    </div>
  )
}
