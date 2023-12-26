import React,{ useState} from 'react'
import Button from './Button'
import axios from 'axios'
import CsvDownloadButton from 'react-json-to-csv'

export default function LadderBoard() {
    const [url, setUrl] = useState('')
    const [data, setData] = useState<any>([])
    const [loading, setLoading] = useState(false)
    const generateTable = async () => {
        setLoading(true)
        try{
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/ladder`,{url: url})
            if(data?.data) {
                setData(data.data)
            }
        }catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }
    }
    const ladderKeys = [
        "a",
        "Team",
        "P",
        "PTS",
        "%",
        "W",
        "L",
        "D",
        "BYE",
        "F",
        "A",
        "FORF"
    ]
    const download = () => {

    }

  return (

    <div className='w-full bg-white p-6 rounded-xl min-h-screen'>
        <h1 className="text-4xl font-bold mb-8">Ladder Board</h1>
        <div className='flex justify-between items-center gap-x-6'><input type="text"  value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Search"           className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        <div className="flex justify-center w-full sm:max-w-sm"><Button loading={loading} onClick={() => generateTable()}>Generate Table</Button></div></div>
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 mt-4">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className='bg-gray-200'>
                <tr>
                    {ladderKeys.map((key) => (
                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {key}
                        </th>
                    ))}
                  {/* <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th> */}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.map((team:any) => (
                  <tr key={team.Team}>
                    
                    {ladderKeys.map((key) => (<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{team[key]}</td>))}
                   
                   
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>

        {/* Download button  */}
        {/* <Button className="mt-4" onClick={() => download()}>Download</Button> */}
        <CsvDownloadButton
    data={data}
    filename="ladder_data.csv"
    style={{ //pass other props, like styles
      boxShadow:"inset 0px 1px 0px 0px #e184f3",
      background:"indigo",
      backgroundColor:"blue",
      borderRadius:"6px",
      border:"1px solid #a511c0",
      display:"inline-block",
      cursor:"pointer","color":"#ffffff",
      fontSize:"15px",
      fontWeight:"bold",
      padding:"6px 24px",
      textDecoration:"none",
      textShadow:"0px 1px 0px #9b14b3"
      }}
  >
    Download CSV
  </CsvDownloadButton>
    </div>
  )
}