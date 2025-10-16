import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import milestone1a from '../shared/1000008234.JPG'
import milestone1b from '../shared/1000004095.JPG'
import milestone2 from '../shared/1000015556.JPG'
import milestone3 from '../shared/IMG-20240811-WA0055.JPG'
import milestone4 from '../shared/IMG-20231022-WA0026.JPG'
import milestone5 from '../shared/IMG-20250605-WA0083.JPG'

export default function JourneyPage() {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ container: ref })
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  const milestones = [
    {
      side: 'right',
      imgs: [milestone1a, milestone1b],
      alt: 'The Start of Us',
      title: 'The Start of Us',
      date: '4th June 2023',
      desc: "The day we officially decided we were in this together. There was so much ahead of us that we couldn't have imagined, but the best decision I ever made was starting this journey with you, right here.",
    },
    {
      side: 'left',
      imgs: [milestone2],
      alt: 'Our First Real Date',
      title: 'Our First Real Date',
      date: '15th April 2024',
      desc: 'Our first proper date in Khan Market. I just remember how easy it all felt. No awkward silences, just us talking for hours.',
    },
    {
      side: 'right',
      imgs: [milestone3],
      alt: 'Our First Anniversary',
      title: 'Our First Anniversary',
      date: '4th June 2024',
      desc: "365 days of us. I remember feeling so incredibly happy and proud on this day, celebrating the wonderful year we'd had. It was the best first year I could have ever asked for.",
    },
    {
      side: 'left',
      imgs: [milestone4],
      alt: 'Our First Birthday Together',
      title: 'Our First Birthday Together',
      date: '16th October 2024',
      desc: 'Our first time celebrating your birthday together. All I wanted was to make you feel as special as you are, and seeing your smile that day made everything perfect. You looked so beautiful and happy.',
    },
    {
      side: 'right',
      imgs: [milestone5],
      alt: 'Two Years & Counting',
      title: 'Two Years & Counting',
      date: '4th June 2025',
      desc: "Two whole years. Holy shit. I don't even know how these two years flew by. I guess when you're with the right person, time just flies. They have honestly been the best two years of my life.",
    },
  ]

  return (
    <section ref={ref} className='relative max-w-5xl mx-auto px-4 py-12'>
      <h2 className='font-headline text-4xl text-lavender text-center mb-10'>
        The Story of Us
      </h2>
      <div className='relative'>
        <svg
          className='absolute left-1/2 -translate-x-1/2 top-0 h-full'
          width='6'
          height='1200'
          viewBox='0 0 6 1200'
          fill='none'
        >
          <motion.path
            d='M3 0 C 3 150, 3 300, 3 450 S 3 750, 3 900 S 3 1050, 3 1200'
            stroke='#C0C0C0'
            strokeWidth='2'
            strokeDasharray='8 10'
            style={{ pathLength }}
          />
        </svg>
        <div className='space-y-20'>
          {milestones.map((m, i) => (
            <div
              key={i}
              className={`relative grid md:grid-cols-2 gap-6 items-center ${
                m.side === 'left' ? 'md:direction-rtl' : ''
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: m.side === 'left' ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ type: 'spring', stiffness: 120, damping: 16 }}
                className='justify-self-end'
              >
                {m.imgs.length > 1 ? (
                  <div className='grid grid-cols-2 gap-2'>
                    {m.imgs.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={m.alt}
                        className='w-36 h-36 object-cover rounded-xl shadow-glow bg-silver/10'
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={m.imgs[0]}
                    alt={m.alt}
                    className='w-72 h-72 object-cover rounded-xl shadow-glow bg-silver/10'
                  />
                )}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
                className='bg-white/70 rounded-xl p-6 ring-1 ring-silver/30'
              >
                <p className='text-xs text-slateBody/70'>{m.date}</p>
                <h3 className='text-xl font-semibold text-slateBody'>
                  {m.title}
                </h3>
                <p className='mt-2 text-sm'>{m.desc}</p>
              </motion.div>
              <div className='absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-lavender shadow-glow' />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
