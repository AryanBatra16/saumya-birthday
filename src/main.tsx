import React, { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './routes/RootLayout'
const HomePage = React.lazy(() => import('./routes/HomePage'))
const JourneyPage = React.lazy(() => import('./routes/JourneyPage'))
const NineteenPage = React.lazy(() => import('./routes/NineteenPage'))
const NotesPage = React.lazy(() => import('./routes/NotesPage'))
const GalleryPage = React.lazy(() => import('./routes/GalleryPage'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'our-journey', element: <JourneyPage /> },
      { path: 'nineteen-things', element: <NineteenPage /> },
      { path: 'little-notes', element: <NotesPage /> },
      { path: 'our-gallery', element: <GalleryPage /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div className='p-6 text-center'>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
)
