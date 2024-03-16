import React, { useEffect, useState } from 'react'
import Button from './Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import { htmlupcomingRoundTemplate } from '@/helpers/convertToHtml';

export default function UpcomingData() {
    const [loading, setLoading] = useState(false);
    const [buttonActive, setButtonActive] = useState(false);
    const [url, setUrl] = useState("")
    const [data, setData] = useState<any>([]);

    const generateData = async () => {
        setLoading(true);
        try {
          const { data } = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/upcoming`,
            { url: url }
          );
          console.log(data.data)
          if (data?.data) {
            setData(data.data);
          }
        } catch (err) {
          console.log(err);
          toast.error("Something went wrong");
        } finally {
          setLoading(false);
          setUrl("");
        }
    }

    useEffect(() => {
        if (url && url.length > 10 && url.includes("/R")) {
          setButtonActive(true);
        } else {
          setButtonActive(false);
        }
      }
    ,[url])

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        toast.success("Copied to clipboard");
      };
    
  return (
    <div>
        <input type="text" placeholder="Enter URL" 
                  className="pl-2 block w-full my-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 placeholder:text-gray-400  sm:text-sm sm:leading-6"

        value={url}
        onChange={(e) => setUrl(e.target.value)}
        />

        <Button
            disabled={!buttonActive}
            loading={loading}
            onClick={() => generateData()}
          >
            Generate Data
            </Button>


            {/* {data?.teams?.length > 0 && htmlupcomingRoundTemplate("SANFL League",data)} */}
{data?.teams?.length>0 && <div className="w-full mt-6">
                    <textarea
                      value={htmlupcomingRoundTemplate("SANFL League",data)}
                      rows={4}
                      name="comment"
                      id="comment"
                      className="mb-4 block w-full lg:max-w-md rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xs sm:leading-6"
                    />{" "}
                    <Button
                  
                      onClick={() =>
                        copyToClipboard(htmlupcomingRoundTemplate("SANFL League",data))
                      }
                    >
                      Copy RESULT data
                    </Button>
                  </div>}
    </div>
  )
}
