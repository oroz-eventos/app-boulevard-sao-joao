'use client'
import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { EDITORIAL_TABS, FEED_POSTS, type FeedPost } from '@/src/lib/data/feed'

function PostCard({ post }: { post: FeedPost }) {
  const [imgIndex, setImgIndex] = useState(0)

  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-app-divider">
      {/* Image carousel */}
      <div className="relative h-52">
        <Image
          src={post.images[imgIndex]}
          alt={post.title}
          fill
          className="object-cover"
          sizes="430px"
        />
        {post.images.length > 1 && (
          <>
            <button
              onClick={() => setImgIndex(i => Math.max(0, i - 1))}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-black/40 rounded-full flex items-center justify-center text-white"
              disabled={imgIndex === 0}
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={() => setImgIndex(i => Math.min(post.images.length - 1, i + 1))}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-black/40 rounded-full flex items-center justify-center text-white"
              disabled={imgIndex === post.images.length - 1}
            >
              <ChevronRight size={14} />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {post.images.map((_, i) => (
                <div
                  key={i}
                  className={`rounded-full transition-all ${
                    i === imgIndex ? 'w-4 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-[15px] text-tx-primary leading-snug">{post.title}</h3>
        <p className="text-[13px] text-tx-secondary mt-1.5 leading-relaxed">{post.description}</p>
      </div>
    </article>
  )
}

export default function FeedPage() {
  const [tab, setTab] = useState<string>(EDITORIAL_TABS[0].id)

  const filtered = FEED_POSTS.filter(p => p.editorial === tab)

  return (
    <div className="animate-fade-in">
      {/* Transparent header over feed */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-app-divider">
        <div className="h-14 flex items-center px-4">
          <h1 className="font-semibold text-[15px] text-tx-primary">Feed</h1>
        </div>
        {/* Tabs */}
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

      <div className="p-4 space-y-4">
        {filtered.map(post => (
          <PostCard key={post.id} post={post} />
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
