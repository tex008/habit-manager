import type { Metadata } from 'next';
import { Dosis, Inter } from 'next/font/google';
import Image from 'next/image';
import './globals.css';

const dosis = Dosis({ subsets: ['latin'], variable: "--font-dosis" });
const inter = Inter({ subsets: ['latin'], variable: "--font-inter" })

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
      <body className={`${dosis.variable} ${inter.variable} flex flex-col mt-10 bg-neutral-900 items-center`}>
        <Image
          src="/images/logo.svg"
          width={200}
          height={200}
          alt="logo meta diaria"
        />
        {children}
      </body>
    </html>
  )
}
