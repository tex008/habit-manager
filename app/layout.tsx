import type { Metadata } from 'next'
import { Dosis } from 'next/font/google'
import './globals.css'

const dosis = Dosis({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Daily Goals - Habit Manager',
  description: 'Manage your habits data easily',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dosis.className}>{children}</body>
    </html>
  )
}
