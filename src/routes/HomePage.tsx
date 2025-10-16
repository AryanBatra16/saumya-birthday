import { motion } from 'framer-motion'

function FloatingParticle({ delay }: { delay: number }) {
  return (
    <motion.span
      className='pointer-events-none absolute w-2 h-2 rounded-full bg-lavender/70 shadow-glow'
      initial={{ opacity: 0, y: 20, scale: 0.6 }}
      animate={{ opacity: [0, 1, 0], y: -200, scale: [0.6, 1, 0.6] }}
      transition={{ duration: 8, delay, repeat: Infinity, ease: 'easeInOut' }}
      style={{ left: `${Math.random() * 100}%`, bottom: '-20px' }}
    />
  )
}

export default function HomePage() {
  return (
    <section className='relative min-h-[calc(100vh-4rem)] overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 -z-10'>
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className='w-full h-full bg-cover bg-center'
          style={{ backgroundImage: 'url(/images/hero.jpg)' }}
        />
        <div className='absolute inset-0 bg-cream/40' />
      </div>

      {/* Floating particles */}
      {Array.from({ length: 24 }).map((_, i) => (
        <FloatingParticle key={i} delay={i * 0.3} />
      ))}

      {/* Titles */}
      <div className='relative max-w-5xl mx-auto px-6 py-24 text-center'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, type: 'spring', stiffness: 100 }}
          className='relative'
        >
          <div className='absolute inset-0 bg-gradient-to-r from-lavender/20 via-silver/20 to-lavender/20 blur-3xl rounded-full'></div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className='relative font-headline text-6xl md:text-7xl lg:text-8xl text-lavender drop-shadow-2xl'
          >
            Happy 19th Birthday, My Love!
          </motion.h2>
        </motion.div>

        {/* Guiding stars navigation */}
        <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center'>
          {[
            {
              title: 'Our Journey',
              href: '/our-journey',
              icon: '💫',
            },
            {
              title: '19 Things That Make You, You',
              href: '/nineteen-things',
              icon: '💖',
            },
            {
              title: 'Little Notes for You',
              href: '/little-notes',
              icon: '💌',
            },
            {
              title: 'Our Gallery',
              href: '/our-gallery',
              icon: '📸',
            },
          ].map((b, i) => (
            <motion.a
              key={b.title}
              href={b.href}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.8 + i * 0.15,
                type: 'spring',
                stiffness: 120,
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className='group relative isolate rounded-2xl px-6 py-4 bg-gradient-to-br from-white/80 to-cream/80 hover:from-lavender/20 hover:to-silver/20 shadow-glow ring-1 ring-silver/30 hover:ring-lavender/50 transition-all duration-300 text-center min-w-[200px]'
            >
              <div className='absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-lavender/10 to-silver/10 blur-xl group-hover:blur-2xl transition-all duration-300' />
              <div className='text-2xl mb-2'>{b.icon}</div>
              <span className='text-sm font-medium text-slateBody group-hover:text-lavender transition-colors duration-300'>
                {b.title}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
