import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SessionProvider, signOut } from "next-auth/react"

export default function App({ Component, pageProps : {session, ...pageProps} }: AppProps) {
  return <SessionProvider session={session}>  
      
            <ToastContainer />
            <Component {...pageProps} />
          </SessionProvider>
}
