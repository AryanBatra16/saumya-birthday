import { NavLink, Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import MusicPlayer from '../shared/MusicPlayer'

export default function RootLayout() {
	return (
		<div className="min-h-screen bg-cream text-slateBody">
			<header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-cream/70 border-b border-silver/30">
				<div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
					<motion.h1 initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="font-headline text-2xl text-lavender">
						Happy 19th Birthday, Saumya!
					</motion.h1>
					<nav className="hidden md:flex gap-4 text-sm">
						<NavLink to="/" className={({ isActive }) => `px-3 py-1 rounded-full transition ${isActive ? 'bg-lavender text-cream' : 'hover:bg-lavender/20'}`}>Home</NavLink>
						<NavLink to="/our-journey" className={({ isActive }) => `px-3 py-1 rounded-full transition ${isActive ? 'bg-lavender text-cream' : 'hover:bg-lavender/20'}`}>Our Journey</NavLink>
						<NavLink to="/nineteen-things" className={({ isActive }) => `px-3 py-1 rounded-full transition ${isActive ? 'bg-lavender text-cream' : 'hover:bg-lavender/20'}`}>19 Things</NavLink>
						<NavLink to="/little-notes" className={({ isActive }) => `px-3 py-1 rounded-full transition ${isActive ? 'bg-lavender text-cream' : 'hover:bg-lavender/20'}`}>Little Notes</NavLink>
						<NavLink to="/our-gallery" className={({ isActive }) => `px-3 py-1 rounded-full transition ${isActive ? 'bg-lavender text-cream' : 'hover:bg-lavender/20'}`}>Gallery</NavLink>
					</nav>
				</div>
			</header>
			<main className="pt-16">
				<Outlet />
			</main>
			<MusicPlayer />
		</div>
	)
}

