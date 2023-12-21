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
      <body className='bg-gradient-to-b from-blue-950 to-black text-white '>
        <Navbar />
        <main className='p-8 lg:px-64 py-32'>
            {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
