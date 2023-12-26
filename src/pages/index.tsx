import Image from 'next/image'
import { Inter } from 'next/font/google'
import LadderBoard from '@/components/LadderBoard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100 text-black ${inter.className}`}
    >
      <LadderBoard />
          </main>
  )
}
