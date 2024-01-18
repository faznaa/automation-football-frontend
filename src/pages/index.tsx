import Image from 'next/image'
import { Inter } from 'next/font/google'
import LadderBoard from '@/components/LadderBoard'
import { Tab } from '@headlessui/react'
import FixtureBoard from '@/components/FixtureBoard'
import StatisticBoard from '@/components/StatisticsBoard'
import HTMLCode from '@/components/HTMLCode'
import { useEffect, useState } from 'react'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })
function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const categories =[ 'Ladder', 'Fixture','Statistics']
  const [isBackendRunning, setIsBackendRunning] = useState(false)
  useEffect(() => {
    async function checkBackend() {
      const x = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}`)
      if(x.status === 200) {
        setIsBackendRunning(true)
      }
    }
    checkBackend()
  },[])
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100 text-black ${inter.className}`}
    >
      {!isBackendRunning ? <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">Backend is not running</h1>
        <p className="text-xl font-bold mb-8">Please try again in 5 minutes</p>
      </div> :         <HTMLCode />
}
{/* <HTMLCode/> */}
    
          </main>
  )
}
