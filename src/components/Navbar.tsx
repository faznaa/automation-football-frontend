import { signOut, useSession } from 'next-auth/react'
import React from 'react'
import LoginBtn from './login-btn'

export default function Navbar() {
    const { data: session } = useSession()
  return (
    <div className='h-[60px] bg-gray-100 flex items-center justify-end px-6'>
    {session?.user ? <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => signOut()}>Logout</button> : <LoginBtn text="Login"/>}
    </div>  
  )
}
