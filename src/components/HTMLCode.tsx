import React, { useEffect, useState } from 'react'
import Button from './Button'
import axios from 'axios'
import { htmlLadderTemplate, htmlStatisticsTemplate } from '@/helpers/convertToHtml'
import { toast } from 'react-toastify'

export default function HTMLCode() {
  const [url, setUrl] = useState("")
  const [links,setLinks] = useState<any>({
    ladder: "",
    fixture: "",
    statistics: "",
  })
  const [datas,setDatas] = useState<any>({
    ladder: {},
    fixture: {},
    statistics: {},
  })
  const [loading, setLoading] = useState(false)
  const generateLinksFromUrl = async () => {
    setLinks({ladder: url.replace("/GF","/ladder"),
    fixture: url,
    statistics: url.replace("/GF","/statistics")})
  }
  useEffect(() => {
    if(url && (url.includes("/GF"))){
        generateLinksFromUrl()
    }
  },[url])
  const generateTable = async() => {
    setLoading(true)
    try{
        const { data:ladderData } = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/ladder`,
            { url: links.ladder }
          );
       
        // const { data:fixtureData } = await axios.post(
        //     `${process.env.NEXT_PUBLIC_BASE_URL}/fixture`,
        //     { url: links.fixture }
        //   );
        // if (fixtureData?.data?.data) {
        //     setDatas({...datas,fixture: fixtureData.data?.data})
        // }
        const { data:statisticsData } = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/statistics`,
            { url: links.statistics }
          );
        console.log(statisticsData?.data)
        if (statisticsData?.data?.data && ladderData?.data) {
            setDatas({...datas,statistics: statisticsData.data?.data, ladder: ladderData.data})
        }
    }catch(err){
        console.log(err)
        toast.error("Something went wrong")
    }finally{
        setLoading(false)
    }
  }
const copyToClipboard = (text:string) => {
    navigator.clipboard.writeText(text)
    toast.success("Copied to clipboard")
}

  return (
    <div className="w-full bg-white p-6 rounded-xl min-h-screen">
    <h1 className="text-4xl font-bold mb-8">Generate Data</h1>
    <div className="flex justify-between items-center gap-x-6">
      
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Paste your link here"
        className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 placeholder:text-gray-400  sm:text-sm sm:leading-6"
      />

       
      <div className="flex justify-center w-full sm:max-w-sm">
        <Button loading={loading} onClick={() => generateTable()}>
          Generate Table
        </Button>
      </div>
    </div>
    {/* <div>
        Ladder - {links.ladder} <a target='_blank' href={links.ladder} >link</a> <br/>
        Fixture - {links.fixture} <a target='_blank' href={links.fixture} >link</a><br/>
        Statistics - {links.statistics} <a target='_blank' href={links.statistics} >link</a> <br/>
      </div> */}
     
    <div >
        {datas?.ladder?.length > 0 && <Button onClick={() => copyToClipboard(htmlLadderTemplate("Ladder",datas?.ladder))}>Copy Ladder data</Button>}
        {datas?.statistics?.length > 0 &&<>
        <Button onClick={() => copyToClipboard(htmlStatisticsTemplate("Statistics",datas?.statistics))}>Copy Statistics data</Button></> }
    </div>

    </div>
  )
}
