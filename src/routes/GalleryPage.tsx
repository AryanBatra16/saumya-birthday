import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Slide = { type: 'image' | 'video'; src: string; thumb?: string }

const slides: Slide[] = [
	{ type: 'image', src: '/images/gallery-1.jpg' },
	{ type: 'image', src: '/images/gallery-2.jpg' },
	{ type: 'video', src: '/videos/gallery-clip-1.mp4' },
	{ type: 'image', src: '/images/gallery-3.jpg' },
]

export default function GalleryPage() {
	const [idx, setIdx] = useState(0)
	const next = () => setIdx((i) => (i + 1) % slides.length)
	const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length)

	return (
		<section className="relative h-[calc(100vh-4rem)] bg-black text-white">
			<AnimatePresence mode="wait">
				<motion.div key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
					{slides[idx].type === 'image' ? (
						<motion.div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: `url(${slides[idx].src})` }} initial={{ scale: 1.05 }} animate={{ scale: 1 }} transition={{ duration: 12, ease: 'linear' }} />
					) : (
						<video src={slides[idx].src} className="w-full h-full object-cover" controls autoPlay />
					)}
				</motion.div>
			</AnimatePresence>
			<button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3">‹</button>
			<button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3">›</button>
			<div className="absolute bottom-0 left-0 right-0 bg-black/30 p-2 overflow-x-auto">
				<div className="flex gap-2">
					{slides.map((s, i) => (
						<button key={i} onClick={() => setIdx(i)} className={`h-14 aspect-video rounded overflow-hidden ring-2 ${i === idx ? 'ring-lavender' : 'ring-transparent'}`}>
							{s.type === 'image' ? (
								<img src={s.src} className="w-full h-full object-cover" />
							) : (
								<div className="w-24 h-14 grid place-items-center bg-white/10">▶</div>
							)}
						</button>
					))}
				</div>
			</div>
		</section>
	)
}

