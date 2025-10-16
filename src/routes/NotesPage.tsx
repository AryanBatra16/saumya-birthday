import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Envelope = {
  id: string
  title: string
  subtitle: string
  type: 'sad' | 'laugh' | 'miss'
}

const envelopes: Envelope[] = [
  {
    id: 'sad',
    title: "Open when you're sad",
    subtitle: 'A warm hug for you',
    type: 'sad',
  },
  {
    id: 'miss',
    title: 'Open when you miss me',
    subtitle: 'I am right here',
    type: 'miss',
  },
]

export default function NotesPage() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section className='max-w-5xl mx-auto px-4 py-12'>
      <h2 className='font-headline text-4xl text-lavender text-center mb-10'>
        A Few Little Notes for You
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {envelopes.map((e) => (
          <motion.button
            key={e.id}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setOpenId(e.id)}
            className='relative bg-white/80 ring-1 ring-silver/30 rounded-xl p-6 h-40 grid place-items-center shadow-glow'
          >
            <span className='font-semibold'>{e.title}</span>
            <span className='text-sm text-slateBody/70'>{e.subtitle}</span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {openId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-50 bg-black/50 backdrop-blur-sm grid place-items-center'
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className='bg-cream rounded-2xl shadow-glow p-6 w-[min(90vw,700px)] relative'
            >
              <button
                onClick={() => setOpenId(null)}
                className='absolute top-3 right-3 text-slateBody/70'
              >
                ✕
              </button>
              {openId === 'sad' && (
                <div className='space-y-4'>
                  <h3 className='font-headline text-3xl text-lavender'>
                    Open when you're sad
                  </h3>
                  <p className='text-sm leading-relaxed'>
                    Hey, listen. If you're reading this, it probably means
                    you're having a shitty day, and that sucks. I hate the
                    thought of you being sad, seriously. I just want you to
                    remember that whatever is making you feel this way, it's
                    temporary. You're the strongest and most amazing person I
                    know, and you're gonna get through this. Please don't ever
                    feel like you're alone in it. Just call me. I don't care
                    what I'm doing, I'll leave everything and be with you. We
                    can talk about the issue or something else but I'll try my
                    level best to make you happy. Whatever you need. Just let me
                    be there for you. I love you to the moon and back.
                  </p>
                  <div className='text-5xl animate-pulse'>💜</div>
                </div>
              )}
              {openId === 'miss' && (
                <div className='space-y-4'>
                  <h3 className='font-headline text-3xl text-lavender'>
                    Open when you miss me
                  </h3>
                  <p className='text-sm leading-relaxed'>
                    Hey. If you're reading this, I'm probably not with you right
                    now, and that honestly sucks. But just know that whatever
                    you're feeling, I'm probably missing you ten times more. So
                    just close your eyes for a second and imagine me giving you
                    a tight wala hug. We'll be together again super soon, I
                    promise. Until then, just know that I'm thinking of you, and
                    I love you more than anything.
                  </p>
                  <div className='text-5xl animate-pulse'>💜</div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
