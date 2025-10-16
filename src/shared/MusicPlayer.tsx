import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hover, setHover] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const onLoaded = () => {
      setDuration(audio.duration || 0)
    }
    const onTime = () => {
      setCurrentTime(audio.currentTime || 0)
    }
    audio.addEventListener('loadedmetadata', onLoaded)
    audio.addEventListener('timeupdate', onTime)
    const tryPlay = async () => {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch {
        setIsPlaying(false)
      }
    }
    // Attempt autoplay; most browsers require user gesture
    tryPlay()
    return () => {
      audio.removeEventListener('loadedmetadata', onLoaded)
      audio.removeEventListener('timeupdate', onTime)
    }
  }, [])

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch {
        /* ignore */
      }
    }
  }

  const stopPlayback = () => {
    const audio = audioRef.current
    if (!audio) return
    audio.pause()
    audio.currentTime = 0
    setCurrentTime(0)
    setIsPlaying(false)
  }

  const onSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (!audio) return
    const value = Number(e.target.value)
    audio.currentTime = value
    setCurrentTime(value)
  }

  return (
    <div className='fixed bottom-6 right-6 z-50 w-[min(90vw,460px)]'>
      <div
        className={`relative flex items-center gap-3 rounded-full px-4 py-3 shadow-glow ${
          hover ? 'bg-lavender text-cream' : 'bg-cream text-slateBody'
        } border border-silver/40`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <button
          onClick={togglePlay}
          className='w-10 h-10 rounded-full bg-gradient-to-br from-lavender to-silver grid place-items-center text-cream text-lg'
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? '❚❚' : '▶'}
        </button>
        <button
          onClick={stopPlayback}
          className='w-10 h-10 rounded-full grid place-items-center border border-silver/40 text-slateBody'
          aria-label='Stop'
          title='Stop'
        >
          ■
        </button>
        <AnimatePresence>
          {hover && (
            <motion.span
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              className='whitespace-nowrap'
            >
              With You/For You - Prateek Kuhad
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className='mt-2 bg-white/95 rounded-full px-4 py-3 border border-lavender/30 shadow-glow'
          >
            <div className='flex items-center gap-3'>
              <span className='text-xs tabular-nums w-12 text-right text-slateBody font-medium'>
                {formatTime(currentTime)}
              </span>
              <input
                type='range'
                min={0}
                max={duration || 100}
                step={0.1}
                value={currentTime}
                onChange={onSeek}
                className='flex-1 h-2 bg-silver/30 rounded-full appearance-none cursor-pointer'
                style={{
                  background: `linear-gradient(to right, #C8B6FF 0%, #C8B6FF ${
                    (currentTime / (duration || 100)) * 100
                  }%, #C0C0C0 ${
                    (currentTime / (duration || 100)) * 100
                  }%, #C0C0C0 100%)`,
                }}
              />
              <span className='text-xs tabular-nums w-12 text-slateBody font-medium'>
                {formatTime(duration)}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <audio
        ref={audioRef}
        src='/music/prateek-kuhad-with-you-for-you.mp3'
        preload='auto'
      />
    </div>
  )
}

function pad(n: number) {
  return n.toString().padStart(2, '0')
}

function formatTime(sec: number) {
  if (!isFinite(sec)) return '00:00'
  const minutes = Math.floor(sec / 60)
  const seconds = Math.floor(sec % 60)
  return `${pad(minutes)}:${pad(seconds)}`
}
