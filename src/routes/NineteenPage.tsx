import { useState } from 'react'
import { motion } from 'framer-motion'
import pic01 from '../shared/IMG-20250727-WA0018.JPG'
import pic02 from '../shared/IMG-20250727-WA0038.JPG'
import pic03 from '../shared/IMG-20250719-WA0039.JPG'
import pic04 from '../shared/IMG-20250719-WA0020.JPG'
import pic05 from '../shared/IMG-20250605-WA0083.JPG'
import pic06 from '../shared/IMG-20250407-WA0017 (1).JPG'
import pic07 from '../shared/IMG-20250406-WA0023 (1).JPG'
import pic08 from '../shared/IMG-20250324-WA0043 (1).JPG'
import pic09 from '../shared/IMG-20250324-WA0039.JPG'
import pic10 from '../shared/IMG-20241012-WA0010.jpg'
import pic11 from '../shared/IMG-20241213-WA0064.JPG'
import pic12 from '../shared/IMG_0196.JPG'
import pic13 from '../shared/1000038389.JPG'
import pic14 from '../shared/20250725_180035.JPG'
import pic15 from '../shared/20250426_012429 (1).jpg'
import pic16 from '../shared/IMG-20250127-WA0042 (1).JPG'
import pic17 from '../shared/IMG-20250217-WA0012 (1).jpg'
import pic18 from '../shared/IMG-20250314-WA0045(1) (1).jpg'
import pic19 from '../shared/IMG-20250319-WA0134 (1).jpg'

type Card = { id: number; img: string; alt: string; text: string }

const cards: Card[] = [
  {
    id: 1,
    img: pic01,
    alt: 'The photo of you at the cafe by the window, resting your head on your hand.',
    text: 'That gentle smile of yours that I could look at forever.',
  },
  {
    id: 2,
    img: pic02,
    alt: 'The mirror selfie we took while we were out shopping.',
    text: "That you're the best partner for everything, from big adventures to random store trips.",
  },
  {
    id: 3,
    img: pic03,
    alt: 'The funny, high-angle photo of you making a face at the tea shop.',
    text: 'The countless silly faces you make that always, without fail, make me smile.',
  },
  {
    id: 4,
    img: pic04,
    alt: 'The mirror selfie from the restaurant where you hid your face with the phone.',
    text: 'That no matter where we are, being close to you feels like being home.',
  },
  {
    id: 5,
    img: pic05,
    alt: "The selfie where you're resting your head on my shoulder.",
    text: 'The simple, comforting feeling of just having you by my side.',
  },
  {
    id: 6,
    img: pic06,
    alt: 'That super close-up, goofy selfie with our heads together.',
    text: "It's these silly, unplanned moments with you that I know I'll remember the most.",
  },
  {
    id: 7,
    img: pic07,
    alt: 'The nighttime photo where you have that huge, eyes-shut happy smile.',
    text: 'Nothing in the world makes me happier than seeing you this happy.',
  },
  {
    id: 8,
    img: pic08,
    alt: "The close-up photo where I'm kissing your forehead.",
    text: "For me, a forehead kiss is the purest way to say “I'll take care of you.”",
  },
  {
    id: 9,
    img: pic09,
    alt: 'The photo of you gently holding the puppy in your arms.',
    text: 'You have the kindest and most gentle heart of anyone I know.',
  },
  {
    id: 10,
    img: pic10,
    alt: 'The photo from Garba night, with us all dressed up and looking at each other.',
    text: "I'll never forget the way you looked at me on this night.",
  },
  {
    id: 11,
    img: pic11,
    alt: 'That blurry, candid photo of me kissing your forehead at night.',
    text: 'Just feeling you this peaceful in my arms is everything.',
  },
  {
    id: 12,
    img: pic12,
    alt: 'That happy selfie of us from one of our adventures in your car.',
    text: "I'll never forget you showing up in your car. I was so impressed.",
  },
  {
    id: 13,
    img: pic13,
    alt: 'That photo where our faces are framed by the heart hands.',
    text: "You're the best part of my life.",
  },
  {
    id: 14,
    img: pic14,
    alt: 'That photo from the cafe where the evening sun was lighting you up.',
    text: 'You just look so effortlessly beautiful in this picture.',
  },
  {
    id: 15,
    img: pic15,
    alt: "That screenshot from one of our late-night video calls where you're in your thoughtful pose.",
    text: 'Just being on a call with you feels like home.',
  },
  {
    id: 16,
    img: pic16,
    alt: 'The selfie from the movie theater where you fell asleep on my shoulder.',
    text: 'I have no idea what movie we watched, but I remember this feeling perfectly.',
  },
  {
    id: 17,
    img: pic17,
    alt: 'That picture of you in the stunning red dress with the sun on your face.',
    text: 'I will never, ever get over how stunning you looked in this dress.',
  },
  {
    id: 18,
    img: pic18,
    alt: 'That photo of you all covered in color from Holi.',
    text: 'The perfect combination of clumsy and cute.',
  },
  {
    id: 19,
    img: pic19,
    alt: 'That beautiful photo of you in the cafe, holding your camera.',
    text: "The prettiest girl with the beautiful soul I've ever met.",
  },
]

export default function NineteenPage() {
  const [flippedIds, setFlippedIds] = useState<Set<number>>(new Set())
  const toggle = (id: number) => {
    setFlippedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <section className='max-w-6xl mx-auto px-4 py-12'>
      <h2 className='font-headline text-4xl text-lavender text-center mb-10'>
        19 Things That Make You, You
      </h2>
      <div className='flex flex-wrap justify-center gap-6'>
        {cards.map((c, idx) => {
          const flipped = flippedIds.has(c.id)
          return (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03 }}
              className='w-full sm:w-60 [perspective:1000px]'
            >
              <button
                onClick={() => toggle(c.id)}
                className='relative w-full aspect-[3/4] [transform-style:preserve-3d] transition-transform duration-500 hover:-translate-y-2 focus:outline-none'
                style={{ transform: `rotateY(${flipped ? 180 : 0}deg)` }}
              >
                <div className='absolute inset-0 [backface-visibility:hidden] bg-white/80 ring-1 ring-silver/30 rounded-xl shadow-glow overflow-hidden'>
                  <img
                    src={c.img}
                    alt={c.alt}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='absolute inset-0 [backface-visibility:hidden] rotate-y-180 bg-cream ring-1 ring-silver/30 rounded-xl p-4 grid place-items-center'>
                  <p className='font-headline text-xl text-slateBody text-center'>
                    {c.text}
                  </p>
                </div>
              </button>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
