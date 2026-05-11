import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const bonusItems = [
    {
      title: "WinGo Weekly Betting Bonus",
      amount: "0/50000",
      description: "Play WinGo Weekly with a bet of ₹50000 to receive a bonus of",
      bonus: "₹107"
    },
    {
      title: "WinGo Daily Betting Bonus",
      amount: "0/500000",
      description: "Play WinGo Daily with a bet of ₹500000 to receive a bonus of",
      bonus: "₹477"
    },
    {
      title: "WinGo Daily Betting Bonus",
      amount: "0/100000", 
      description: "Play WinGo Daily with a bet of ₹100000 to receive a bonus of",
      bonus: "₹177"
    },
    {
      title: "Daily deposit amount",
      amount: "0/5000",
      description: "Deposit ₹5000 Daily to get a bonus of",
      bonus: "₹97"
    },
    {
      title: "Daily deposit amount",
      amount: "0/3000",
      description: "Deposit ₹3000 Daily to get a bonus of",
      bonus: "₹10"
    }
  ]
const vipItems = [
    {
      title: "Upgrade to",
      vip: "VIP1",
      description: "Upgrade to VIP to unlock this benefit.",
      line: "Deposit ₹300 Weekly and receive a bonus of ₹57.",
    },
    {
      title: "Upgrade to",
      vip: "VIP1",
      description: "Upgrade to VIP to unlock this benefit.",
      line: "Deposit ₹300 Weekly and receive a bonus of ₹57.",
    },
  ]
const DayTask = () => {
    const [activeTab, setActiveTab] = useState("activity")
    const { bannergetData } = useSelector((state) => state.auth);
  return (
    <div>
           <div className="bg-[#fb634b] p-1 py-1 sticky top-0">
        <div className="container-section flex  items-center relative py-0">
          <button className="absolute">
            <Link to={"/activity"}>
              {" "}
              <IoIosArrowBack className="text-xl text-white" />
            </Link>
          </button>
          <div className="  text-center flex justify-center items-center m-auto">
            <img src={bannergetData?.gameall?.logo} alt="" className="w-28" />
          </div>
        </div>
      </div>
      <div className="bg-[#fb634b] p-5">
        <div className=' space-y-2'>
        <p className="text-[12px] font-[400] text-white">
        Daily/Weekly activity -
        </p>
        <p className="text-[12px] font-[400] text-white">
        ★ Complete daily/weekly tasks to receive generous rewards.
        </p>
        <p className="text-[12px] font-[400] text-white">
        ★ Weekly rewards cannot be carried over to the next week, and daily rewards cannot be accumulated to the next day.
        </p>
        </div>
      </div>

      <div className="w-full p-2">
      <div className="flex mb-6">
        <button
          className={`flex-1 py-2 px-4 text-center ${
            activeTab === "activity"
              ? "bg-[#fb634b] text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("activity")}
        >
          activity
        </button>
        <button
          className={`flex-1 py-2 px-4 text-center ${
            activeTab === "vip"
              ? "bg-[#fb634b] text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("vip")}
        >
          VIP area activities
        </button>
      </div>

      {activeTab === "activity" && (
        <div className="space-y-4">
          {bonusItems.map((item, index) => (
            <div key={index} className="bg-card p-8 rounded-lg relative">
              <span className="absolute top-0 left-0 bg-[#fb634b] text-white text-xs px-2 py-1 rounded">
                Not Completed
              </span>
              <div className="space-y-1">
                <div className="flex gap-1 items-start">
                  <h3 className="text-[12px]">{item.title}</h3>
                  <span className="text-[12px]">{item.amount}</span>
                </div>
                <p className="text-[12px]">
                  {item.description} <span className="">{item.bonus}</span>
                </p>
                <div className="flex justify-end">
                  <button className="bg-transparent border border-gray-300 text-black text-sm px-3 py-1 rounded-full">
                    Go complete it
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "vip" && (
        <div className="space-y-4">
          {vipItems.map((item, index) => (
            <div key={index} className="bg-card p-3 rounded-lg relative">
              <div className="space-y-2">
                <div className="flex gap-1 items-center">
                  <h3 className="text-[12px] font-semibold">{item.title}   <span className="text-base text-[#fb634b] font-smibold">{item.vip}</span></h3>
                
                </div>
                <p className="text-[12px]">
                  {item.description}
                </p>
                <p className="text-[12px]">
                  {item.line}
                </p>
                <div className="flex w-full">
                  <button className="bg-t-b  w-full border border-gray-300 text-sm px-3 py-2 text-white rounded-md">
                    Upgrade Vip
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  )
}

export default DayTask
