'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { EDITORIAL_TABS, FEED_POSTS, type FeedPost } from '@/src/lib/data/feed'

function FullScreenPost({ post }: { post: FeedPost }) {
  const [idx, setIdx] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const total = post.images.length

  const next = () => setIdx(i => (i + 1) % total)
  const prev = () => setIdx(i => (i - 1 + total) % total)

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 50) {
      delta < 0 ? next() : prev()
    }
    touchStartX.current = null
  }

  return (
    <article
      className="snap-start snap-always relative w-full h-full shrink-0 bg-black overflow-hidden"
      style={{ scrollSnapStop: 'always' }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Background image fills the entire screen */}
      <Image
        key={`${post.id}-${idx}`}
        src={post.images[idx]}
        alt={post.title}
        fill
        priority={idx === 0}
        sizes="430px"
        className="object-cover animate-fade-in"
      />

      {/* Top gradient for tabs/progress visibility */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/70 to-transparent pointer-events-none z-10" />

      {/* Bottom gradient for caption */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none z-10" />

      {/* Progress bars (Stories-style) — below tabs */}
      <div className="absolute top-[100px] left-3 right-3 flex gap-1 z-30">
        {post.images.map((_, i) => (
          <div key={i} className="flex-1 h-0.5 rounded-full bg-white/30 overflow-hidden">
            <div
              className={`h-full bg-white transition-all duration-300 ${
                i <= idx ? 'w-full' : 'w-0'
              }`}
            />
          </div>
        ))}
      </div>

      {/* Tap zones — horizontal navigation */}
      <button
        onClick={prev}
        aria-label="Imagem anterior"
        className="absolute left-0 top-[120px] bottom-[160px] w-1/3 z-20 group flex items-center justify-start pl-2"
      >
        {idx > 0 && (
          <ChevronLeft size={28} className="text-white/0 group-hover:text-white/60 transition-colors" />
        )}
      </button>
      <button
        onClick={next}
        aria-label="Próxima imagem"
        className="absolute right-0 top-[120px] bottom-[160px] w-1/3 z-20 group flex items-center justify-end pr-2"
      >
        {idx < total - 1 && (
          <ChevronRight size={28} className="text-white/0 group-hover:text-white/60 transition-colors" />
        )}
      </button>

      {/* Caption + description */}
      <div className="absolute left-0 right-0 px-5 pb-[110px] bottom-0 z-30">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-white/80 bg-white/10 backdrop-blur-md px-2 py-0.5 rounded-full">
            {EDITORIAL_TABS.find(t => t.id === post.editorial)?.label}
          </span>
          <span className="text-[10px] text-white/60 font-medium">
            {idx + 1}/{total}
          </span>
        </div>
        <h3 className="text-white font-bold text-[18px] leading-tight">{post.title}</h3>
        <p className="text-white/85 text-[13px] mt-2 leading-relaxed line-clamp-3">
          {post.description}
        </p>
      </div>
    </article>
  )
}

export default function FeedPage() {
  const [tab, setTab] = useState<string>(EDITORIAL_TABS[0].id)
  const scrollRef = useRef<HTMLDivElement>(null)
  const filtered = FEED_POSTS.filter(p => p.editorial === tab)

  const handleTabChange = (id: string) => {
    setTab(id)
    scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className="fixed inset-0 mx-auto bg-black animate-fade-in"
      style={{ maxWidth: 'var(--max-app-width)' }}
    >
      {/* Floating tabs at top */}
      <div className="absolute top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top)]">
        <div className="flex gap-1 px-3 pt-3 pb-2 overflow-x-auto scrollbar-hide">
          {EDITORIAL_TABS.map(t => (
            <button
              key={t.id}
              onClick={() => handleTabChange(t.id)}
              className={`shrink-0 whitespace-nowrap text-[12px] font-bold tracking-wide px-3 py-1.5 rounded-full transition-all ${
                tab === t.id
                  ? 'text-white bg-white/20 backdrop-blur-md'
                  : 'text-white/70'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Vertical snap scroll */}
      <div
        ref={scrollRef}
        className="h-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide overscroll-contain"
      >
        {filtered.map(post => (
          <FullScreenPost key={post.id} post={post} />
        ))}
        {filtered.length === 0 && (
          <div className="h-full flex items-center justify-center">
            <p className="text-white/60 text-[14px]">Nenhum post nesta categoria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
