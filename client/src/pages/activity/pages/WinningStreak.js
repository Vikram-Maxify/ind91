import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import img from '../../../assets/WinningStreakReward-C2-089ab245.png'

const WinningStreak = () => {
  return (
    <div>
             <div className="bg-[#fe6537] p-1 py-1 sticky top-0">
        <div className="container-section flex  items-center relative py-0">
          <button className="absolute">
            <Link to={"/activity"}>
              {" "}
              <IoIosArrowBack className="text-xl text-white" />
            </Link>
          </button>
          <div className="  text-center flex justify-center items-center m-auto">
            <img src="/logo.png" alt="" className="w-28" />
          </div>
        </div>
      </div>
      <div className="bg-[#fe6537] p-5 pb-[80px] space-y-3">
        <h1 className="font-bold text-2xl text-white">WinGo Winning Streak Bonus</h1>
        <div>
        <p className="text-[12px] font-[400] text-white">
        The bonus is limited to bets in 1-minute matches; as long as the requirements of the 1-minute game activity are met, it can be claimed. <br/>Not accumulative, please claim on the same day.
        </p>
        </div>
      </div>
      <div className=" mt-2 rounded-3xl relative -top-[3rem] p-5 bg-[#f7f8ff]">
      <div className="mx-auto font-sans">
      <p className='text-[12px] text-center py-1'>Today's Highest Winning Streak</p>
      {/* Counter */}
      <div className="text-center mb-4">
        <span className="text-4xl font-bold">0</span>
      </div>

      {/* Receive Button */}
      <button className="w-24 h-10 mx-auto block mb-4 bg-btn hover:bg-[#ff5959] text-white rounded-full shadow-[0_4px_0_#ff9999] active:transform active:translate-y-0.5">
        receive
      </button>

      {/* Play Button */}
      <button className="w-full h-12 mb-6 bg-btn hover:bg-[#ff5959] text-white rounded-full shadow-[0_4px_0_#ff9999] active:transform active:translate-y-0.5">
        Play WinGo game now
      </button>

      {/* Bonus Section */}
      <div className="">
        <div className="flex items-center gap-2 mb-4">
          <h2 className=" text-sm">Winning Streak Bonus B</h2>
        </div>

        <p className="text-sm text-[#ff7171] mb-4">
          ★ No minimum bet requirement, claimable upon reaching the profit standard
        </p>

        {/* Bonus Tiers */}
        <div className="space-y-4">
          {[
            { wins: 10, percent: 3 },
            { wins: 15, percent: 5 },
            { wins: 20, percent: 8 },
            { wins: 25, percent: 10 },
            { wins: 30, percent: 15 },
          ].map((tier) => (
            <div key={tier.wins} className="flex items-center bg-[#fff9f0] p-4 rounded-lg">
              <div className="flex-1">
                <p className="text-[12px]">
                  <span className="">Consecutively win </span>
                  <span className="text-[#ff7171] font-bold">{tier.wins}</span>
                  <span className=""> times</span>
                </p>
                <p className="text-[12px]">
                  <span className="">Get the bet amount of </span>
                  <span className="text-[#ff7171] font-bold">{tier.percent}%</span>
                </p>
              </div>
              <div className="w-12 h-12 flex-shrink-0">
                <img 
                  src={img}
                  alt="Crown"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Example Section */}
        <div className="mt-6 text-[10px] text-red-500">
          <p>★ Example of Rule B:</p>
          <p>★ 10 consecutive wins, each bet amount is 100.</p>
          <p>★ 100+100+100+100+100+100+100+100+100+100</p>
          <p>★ 1000×3%=30</p>
        </div>
      </div>
    </div>
      </div>
      <div class="p-4">
  <h2 class="text-sm font-semibold mb-4">Terms and Conditions:</h2>
  <ol class="list-decimal list-inside text-[12px] text-gray-500 space-y-2">
    <li>The winning streak bonus requires 2 times the bet amount.</li>
    <li>This promotional offer is limited to one-minute sessions in the WinGo game.</li>
    <li>If you place multiple bets within the same round, they will be counted as one instance.</li>
    <li>You can only claim the bonus once per day. If you have already claimed it today, you will not be eligible for a higher winning streak bonus.</li>
    <li>We reserve the right to modify, revise, or cancel this promotional offer without prior notice; applicable to all promotional activities.</li>
  </ol>
</div>
    </div>
  )
}

export default WinningStreak
