import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Afeefuddin',
  description: 'Afeef is full stack developer who is passionate about software engineering and web development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en " className='dark '>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}