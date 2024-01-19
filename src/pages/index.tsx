import Navbar from '@/components/Navbar'
import LoginBtn from '@/components/login-btn'
import React from 'react'

export default function Home() {
  return (
    // HOME PAGE 
    <>
    <Navbar />
    <div className='h-screen flex flex-col justify-center items-center px-20 gap-4'>
      <h1 className="text-4xl text-center">SA FOOTBALLER</h1>
      <div className='sm:max-w-sm'><LoginBtn text='Get started'/></div>
    </div>
    </>
  )
}
