'use client'
import { useState } from 'react'
import Image from 'next/image'
import { EDITORIAL_TABS, FEED_POSTS, type FeedPost } from '@/src/lib/data/feed'

function StoriesCard({ post }: { post: FeedPost }) {
  const [idx, setIdx] = useState(0)
  const total = post.images.length

  const next = () => setIdx(i => (i + 1) % total)
  const prev = () => setIdx(i => (i - 1 + total) % total)

  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-app-divider">
      {/* Stories-style image with tap zones */}
      <div className="relative aspect-[4/5] bg-black select-none">
        <Image
          key={`${post.id}-${idx}`}
          src={post.images[idx]}
          alt={post.title}
          fill
          className="object-cover animate-fade-in"
          sizes="430px"
          priority={idx === 0}
        />

        {/* Progress bars (Stories) */}
        <div className="absolute top-2 left-2 right-2 flex gap-1 z-10">
          {post.images.map((_, i) => (
            <div key={i} className="flex-1 h-0.5 rounded-full bg-white/30 overflow-hidden">
              <div
                className={`h-full bg-white transition-all duration-300 ${
                  i < idx ? 'w-full' : i === idx ? 'w-full' : 'w-0'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Counter chip */}
        <div className="absolute top-5 right-3 bg-black/40 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5 rounded-full z-10">
          {idx + 1}/{total}
        </div>

        {/* Tap zones — invisible buttons covering halves of the image */}
        <button
          onClick={prev}
          aria-label="Imagem anterior"
          className="absolute left-0 top-0 bottom-0 w-1/2 z-10"
        />
        <button
          onClick={next}
          aria-label="Próxima imagem"
          className="absolute right-0 top-0 bottom-0 w-1/2 z-10"
        />

        {/* Bottom gradient + caption preview */}
        <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none bg-gradient-to-t from-black/85 via-black/40 to-transparent z-[5]">
          <h3 className="text-white font-bold text-[15px] leading-snug">{post.title}</h3>
        </div>
      </div>

      <div className="p-4">
        <p className="text-[13px] text-tx-secondary leading-relaxed">{post.description}</p>
      </div>
    </article>
  )
}

export default function FeedPage() {
  const [tab, setTab] = useState<string>(EDITORIAL_TABS[0].id)
  const filtered = FEED_POSTS.filter(p => p.editorial === tab)

  return (
    <div className="animate-fade-in">
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-app-divider">
        <div className="h-14 flex items-center px-4">
          <h1 className="font-bold text-[16px] text-tx-primary">Feed</h1>
        </div>
        <div className="flex gap-0 border-t border-app-divider overflow-x-auto scrollbar-hide">
          {EDITORIAL_TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`shrink-0 px-4 py-2.5 text-[12px] font-semibold border-b-2 transition-colors ${
                tab === t.id
                  ? 'border-brand text-brand'
                  : 'border-transparent text-tx-tertiary'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </header>

      <div className="p-4 space-y-5">
        {filtered.map(post => (
          <StoriesCard key={post.id} post={post} />
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-tx-tertiary text-[14px] py-12">
            Nenhum post nesta categoria.
          </p>
        )}
      </div>
    </div>
  )
}
