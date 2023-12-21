import type { Metadata } from 'next'

import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'Test Hyge',
  description: 'Belajar bikin web pakai next js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='text-white font-["Plus Jakarta Sans"] bg-gradient-to-b from-slate-900 to-neutral-900'>
        <Navbar />
        <main className='p-8 z-10 lg:px-64 py-32'>
            {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
