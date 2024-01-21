import Image from 'next/image'
import { Inter } from 'next/font/google'
import LadderBoard from '@/components/LadderBoard'
import { Tab } from '@headlessui/react'
import FixtureBoard from '@/components/FixtureBoard'
import StatisticBoard from '@/components/StatisticsBoard'
import HTMLCode from '@/components/HTMLCode'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '@/components/Button'
import { toast } from 'react-toastify'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })
function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
    const { data: session } = useSession()
    const router = useRouter()
    useEffect(() => {
        if(!session) {
            router.push('/')
        }
    },[session])
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
  const [loading, setLoading] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const [url, setUrl] = useState("");
  const [datas, setDatas] = useState<any>({
    blogs:[]
  });
  useEffect(() => {
    if (url) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  },[url])
  const generateBlogOld = async () => {
    setLoading(true);
    try {
     

      const { data:_fixtureData } = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
          { url }
        );
      console.log(_fixtureData.blogs)
    
     
      if (_fixtureData.blogs) {
        setDatas({
          ...datas,
          blogs:_fixtureData.blogs
        });
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  const generateBlog = async () => {
    setLoading(true);
    try {
     

      const { data:links } = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/links`,
          { url }
        );
      const _links = links.data
    
      for (const link of _links) {
        const { data:_fixtureData } = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/blog/single`,
          { url:link }
        );
        toast.success("Blog Generated");
        setDatas((prev:any) => {
          return {
            ...prev,
            blogs:[...prev.blogs,_fixtureData.data]
          }
        })
       
      }
      // if (_fixtureData.blogs) {
      //   setDatas({
      //     ...datas,
      //     blogs:_fixtureData.blogs
      //   });
      // }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  
function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}
    if(!session?.user?.email) return (<div>NOT LOGGED IN </div>)
  return (
  <>
  <Navbar />
  <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100 text-black ${inter.className}`}
    >
      {!isBackendRunning ? <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">Backend is not running</h1>
        <p className="text-xl font-bold mb-8">Please try again in 5 minutes</p>
      </div> :       <div className='w-full'>
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1  rounded-xl">
          {["HTML CODE","BLOG"].map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm leading-5 font-medium text-black rounded-lg',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                  selected
                    ? 'bg-blue-400 text-black shadow'
                    : 'bg-gray-100 text-black hover:bg-blue-300'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel className="bg-white rounded-xl p-3">
          <HTMLCode />
          </Tab.Panel>
          <Tab.Panel className="mt-2 w-full">
          <div className="flex flex-col justify-between  gap-x-6 bg-gray-50 p-4 rounded-lg">
        <label className="text-left">Gameboard URL</label>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste your link here"
          className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 placeholder:text-gray-400  sm:text-sm sm:leading-6"
        />
       

        <div className="my-4 flex justify-center w-full sm:max-w-sm">
          <Button
            disabled={!buttonActive}
            loading={loading}
            onClick={() => generateBlog()}
          >
            Generate Blog
          </Button>
        </div>

          {datas.blogs?.length > 0 && datas?.blogs?.map((blog:any) => (
            <div>
              <h1 className="text-2xl font-bold mb-3">{blog.team}</h1>
              <p className='my-2'>Date : {blog.date}</p>
              <p className='my-2'>Place : {blog.place}</p>  
                <div className="my-4 bg-gray-100 p-4 rounded-md flex flex-col gap-2">
            {blog.blog }
            <Button onClick={() => copyToClipboard(datas?.blog)}>Copy Blog</Button>
            </div>
              </div>
            ))
          }
            </div>
          </Tab.Panel>
        </Tab.Panels>
        </Tab.Group>

      </div>
}
{/* <HTMLCode/> */}
    
          </main>
  </>
  )
}
