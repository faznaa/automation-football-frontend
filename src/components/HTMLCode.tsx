import React, { Fragment, useEffect, useState } from "react";
import Button from "./Button";
import axios from "axios";
import {
  htmlFixtureTemplate,
  htmlLadderTemplate,
  htmlResultTemplate,
  htmlStatisticsTemplate,
} from "@/helpers/convertToHtml";
import { toast } from "react-toastify";
import { Tab } from "@headlessui/react";

const fixtureData = {
  status: "success",
  message: "Data scraped successfully",
  data: {
    date: "02:30 PM, Sunday, 24 Sep 2023",
    place: "Adelaide Oval / Adelaide Oval 1",
    round: "South Australia National Football League (SANFL), 2023",
    playData: "02:30 PM, Sunday, 24 Sep 2023",
    scores: [
      {
        teamName: "Glenelg Football Club",
        points: ["27", "47", "79", "86"],
        secondValues: ["4.3", "7.5", "12.7", "13.8"],
      },
      {
        teamName: "Sturt Football Club",
        points: ["3", "18", "42", "62"],
        secondValues: ["-.3", "2.6", "6.6", "8.14"],
      },
    ],
    playersLength: 4,
    bestPlayers: {
      team_1: [],
      team_2: [
        "William Coomblas",
        " James Battersby",
        " Connor McFadyen",
        " Steven Slimming",
        " Casey Voss",
      ],
      all: [
        "William Coomblas",
        " James Battersby",
        " Connor McFadyen",
        " Steven Slimming",
        " Casey Voss",
      ],
    },
    goalKeepers: {
      team_1: [],
      team_2: [
        {
          index: "7",
          player: "James Mathews",
          goal: "2",
        },
        {
          index: "1",
          player: "Manguru Frederick",
          goal: "1",
        },
        {
          index: "22",
          player: "William Coomblas",
          goal: "1",
        },
        {
          index: "30",
          player: "Oliver Grivell",
          goal: "1",
        },
        {
          index: "31",
          player: "Lachlan Burrows",
          goal: "1",
        },
        {
          index: "34",
          player: "Casey Voss",
          goal: "1",
        },
        {
          index: "44",
          player: "James Richards",
          goal: "1",
        },
      ],
      all: [
        {
          index: "7",
          player: "James Mathews",
          goal: "2",
        },
        {
          index: "1",
          player: "Manguru Frederick",
          goal: "1",
        },
        {
          index: "22",
          player: "William Coomblas",
          goal: "1",
        },
        {
          index: "30",
          player: "Oliver Grivell",
          goal: "1",
        },
        {
          index: "31",
          player: "Lachlan Burrows",
          goal: "1",
        },
        {
          index: "34",
          player: "Casey Voss",
          goal: "1",
        },
        {
          index: "44",
          player: "James Richards",
          goal: "1",
        },
      ],
      text: {
        team_1: [],
      },
    },
  },
};
export default function HTMLCode() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [buttonActive, setButtonActive] = useState(false);
  const [headings, setHeadings] = useState<any>({
    statistics: "SFNL Game 2023",
    ladder: "SFNL Ladder 2023",
    fixture: "SFNL Fixture 2023",
    resultTeam1: "TIGERS",
    resultTeam2: "BLUES",
  });
  const [links, setLinks] = useState<any>({
    ladder: "",
    fixture: "",
    statistics: "",
  });
  const [datas, setDatas] = useState<any>({
    ladder: {},
    fixture: {},
    statistics: {},
    result: {},
    blog:''
  });
  const [loading, setLoading] = useState(false);
  const memoedHTMLResultTemplate = React.useMemo(() =>{
    if(datas?.result?.scores?.length>0) {
      return htmlResultTemplate(
        title,
        headings.resultTeam1,
        headings.resultTeam2,
        datas.result
      )
    }
    return ''
  },[title,headings,datas])
  const memoedHTMLLadderTemplate = React.useMemo(() => datas?.ladder?.length>0 ? htmlLadderTemplate(headings.ladder, datas?.ladder) : '',[headings,datas])
  const memoedHTMLStatisticsTemplate = React.useMemo(() => datas?.statistics?.length>0 ? htmlStatisticsTemplate(headings.statistics, datas?.statistics):'',[headings,datas])
  const generateLinksFromUrl = async () => {
    setLinks({
      ladder: url.replace("/GF", "/ladder"),
      fixture: url,
      statistics: url.replace("/GF", "/statistics"),
    });
  };
  useEffect(() => {
    if (url && url.includes("/GF") && title) {
      setButtonActive(true);
      generateLinksFromUrl();
    } else {
      setButtonActive(false);
    }
  }, [url,title]);
  const generateTable = async () => {
    setLoading(true);
    try {
      const { data: ladderData } = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/ladder`,
        { url: links.ladder }
      );

      const { data:_fixtureData } = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/fixture`,
          { url: links.fixture }
        );
      console.log(_fixtureData.data)
      // if (fixtureData?.data?.data) {
      //     setDatas({...datas,fixture: fixtureData.data?.data})
      // }
      const { data: statisticsData } = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/statistics`,
        { url: links.statistics }
      );
      // console.log(statisticsData?.data);
      if (statisticsData?.data?.data && ladderData?.data) {
        setDatas({
          ...datas,
          statistics: statisticsData.data?.data,
          ladder: ladderData.data,
          result:_fixtureData.data,
        });
      }
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
  return (
    <div className="w-full bg-white p-6 rounded-xl min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Generate Data</h1>

      <div className="flex flex-col justify-between  gap-x-6 bg-gray-50 p-4 rounded-lg">
        <label className="text-left">Gameboard URL</label>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste your link here"
          className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 placeholder:text-gray-400  sm:text-sm sm:leading-6"
        />
        <label className="mt-4">Tabs Responsive name</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="eg: SAFNL Reserves Game"
          className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 placeholder:text-gray-400  sm:text-sm sm:leading-6"
        />

        <div className="my-4 flex justify-center w-full sm:max-w-sm">
          <Button
            disabled={!buttonActive}
            loading={loading}
            onClick={() => generateTable()}
          >
            Generate Table
          </Button>
        </div>
      </div>
      {datas?.ladder?.length > 0 && (<Tab.Group>
        <Tab.List className="flex w-full  justify-between text-center space-x-1 rounded-xl  p-1 font-semibold sm:min-w-sm">
          {["Result", "Ladder", "GoalKickers"].map((category) => (
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <div
                className={classNames(
                  selected ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-50 text-gray-500 hover:text-gray-700 hover:bg-gray-100',
                  'w-full rounded-md px-3 py-2 text-sm font-medium cursor-pointer '
                )}
                >
                  {category}
                </div>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {/* RESULT TAB  */}
          <Tab.Panel className="mt-2 w-full">
          {datas?.result && (
              <div className="my-4 bg-gray-100 p-4 rounded-md flex flex-col gap-2">
                <div className="my-4">
                  <label className="text-semibold text-sm mx-2">Team 1 name</label>
                  <input 
                  type="text"
                  value={headings.resultTeam1}
                  onChange={(e) => setHeadings({...headings,resultTeam1:e.target.value})}
                  className="pl-2 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  placeholder="eg: TIGERS"/>
                </div>
                <div className="my-4">
                  <label className="text-semibold text-sm mx-2">Team 2 name</label>
                  <input 
                  type="text"
                  value={headings.resultTeam2}
                  onChange={(e) => setHeadings({...headings,resultTeam2:e.target.value})}
                  className="pl-2 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 placeholder:text-gray-400  sm:text-sm sm:leading-6"

                  placeholder="eg: BLUES"/>
                </div>
                <div className="flex items-start justify-between gap-x-10 text-white">
                <div
              className="left-0 h-96 sm:min-w-lg overflow-y-scroll bg-black"
              dangerouslySetInnerHTML={{
                __html: memoedHTMLResultTemplate,
              }}
            />
                  {/* <iframe className="w-1/3 ">{htmlLadderTemplate(headings.ladder, datas?.ladder)}</iframe> */}
                  <div className="w-full">
                    <textarea
                      value={memoedHTMLResultTemplate}
                      rows={4}
                      name="comment"
                      id="comment"
                      className="mb-4 block w-full lg:max-w-md rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xs sm:leading-6"
                    />{" "}
                    <Button
                  
                      onClick={() =>
                        copyToClipboard(memoedHTMLResultTemplate)
                      }
                    >
                      Copy RESULT data
                    </Button>
                  </div>
                </div>
              </div>
            )}
           
          </Tab.Panel>
          {/* LADDER TAB  */}
          <Tab.Panel className="mt-2 w-full">
            {datas?.ladder?.length > 0 && (
              <div className="my-4 bg-gray-100 p-4 rounded-md flex flex-col gap-2">
                <div className="flex flex-row gap-x-4 items-center">
                  <p className="w-1/2">Heading of Ladder data</p>
                  <input
                    type="text"
                    value={headings.ladder}
                    onChange={(e) =>
                      setHeadings({ ...headings, ladder: e.target.value })
                    }
                    placeholder="Enter heading for ladder table"
                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="flex items-center justify-between gap-x-10">
                  <div
                    className="w-1/2 left-0 h-96 overflow-y-scroll"
                    dangerouslySetInnerHTML={{
                      __html: memoedHTMLLadderTemplate,
                    }}
                  />
                  {/* <iframe className="w-1/3 ">{htmlLadderTemplate(headings.ladder, datas?.ladder)}</iframe> */}
                  <div className="w-full">
                    <textarea
                      value={memoedHTMLLadderTemplate}
                      rows={4}
                      name="comment"
                      id="comment"
                      className="block w-full lg:max-w-md rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xs sm:leading-6"
                    />{" "}
                    <Button
                      onClick={() =>
                        copyToClipboard(
                          memoedHTMLLadderTemplate
                        )
                      }
                    >
                      Copy Ladder data
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </Tab.Panel>

          {/* GOALKICKERS TAB  */}
          <Tab.Panel className="mt-2 w-full">
            {datas?.statistics?.length > 0 && (
              <div className="my-4 bg-gray-100 p-4 rounded-md flex flex-col gap-2">
                <div className="flex flex-row gap-x-4 items-center">
                  <p className="w-1/2">Heading of Goalkeeper data</p>

                  <input
                    type="text"
                    value={headings.statistics}
                    onChange={(e) =>
                      setHeadings({ ...headings, statistics: e.target.value })
                    }
                    placeholder="Enter heading for statistics table"
                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="flex items-center justify-between gap-x-10">
                  <div
                    className="w-1/2 left-0 h-96 overflow-y-scroll"
                    dangerouslySetInnerHTML={{
                      __html: htmlStatisticsTemplate(
                        headings.statistics,
                        datas?.statistics
                      ),
                    }}
                  />

                  <div className="w-full">
                    <textarea
                      value={htmlStatisticsTemplate(
                        headings.statistics,
                        datas?.statistics
                      )}
                      rows={4}
                      name="comment"
                      id="comment"
                      className="block w-full lg:max-w-md rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xs sm:leading-6"
                    />
                    <Button
                      onClick={() =>
                        copyToClipboard(
                          htmlStatisticsTemplate(
                            headings.statistics,
                            datas?.statistics
                          )
                        )
                      }
                    >
                      Copy Goalkeepers data
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </Tab.Panel>
          {/* BLOG TAB  */}
          
        </Tab.Panels>
      </Tab.Group>)}

      <div></div>
    </div>
  );
}
