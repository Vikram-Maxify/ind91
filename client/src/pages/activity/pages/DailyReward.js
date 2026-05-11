import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const DailyReward = () => {
    const { bannergetData } = useSelector((state) => state.auth);
  return (
    <div>
       <div className="bg-[#fb634b] p-1 py-1 sticky top-0 z-[999]">
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

      <div className="min-h-screen bg-gradient-to-b from-[#ff7171] to-[#ff5f5f] p-4 flex items-center justify-center">
      <div className="w-full rounded-3xl p-2 relative overflow-hidden">
        {/* Floating coins decoration */}
        <div className="absolute right-0 top-1/4">
          <div className="w-6 h-6 bg-yellow-400 rounded-full opacity-50 animate-bounce"></div>
          <div className="w-8 h-8 bg-yellow-400 rounded-full opacity-50 animate-bounce delay-100 ml-4"></div>
          <div className="w-5 h-5 bg-yellow-400 rounded-full opacity-50 animate-bounce delay-200 ml-2"></div>
        </div>

        {/* Daily Mystery Rewards Section */}
        <div className="text-white mb-6">
          <h2 className="text-sm font-semibold mb-3">Daily Mystery Rewards</h2>
          <p className="text-[12px] mb-2"> Invite friends to join the platform, and if the customers you refer are of high quality, make substantial deposits, and are active in gaming, you will have the opportunity to earn higher mystery bonuses from these referrals.</p>
          <p className="text-[12px]"> Unlike other platforms where you only receive rewards for the first, second, or third time, our platform offers you permanent rewards. Make every day full of surprises.</p>
        </div>

        {/* Daily Bonus Amount Section */}
        <div className="mb-6 text-white">
          <h3 className="text-sm font-medium mb-2">Daily Bonus Amount</h3>
          <div className="text-2xl font-medium mb-3">₹2388888</div>
          <p className="text-[12px] ">
            There are substantial daily bonuses to be shared. The more active users you refer and the larger their deposit amounts, the greater your mystery rewards will be. The bonuses will be distributed before 10 AM the next day. Best of luck to you!
          </p>
        </div>

        {/* My Bonuses Section */}
        <div className="mb-6 bg-white w-[90%] mx-auto p-4">
          <h3 className="text-sm font-medium text-center mb-4">My Bonuses</h3>
          <div className="bg-[#ffede2] border border-[#ffe4e4] rounded-lg p-4 text-[12px] text-[#8a5640]">
            <p className="mb-3">Recently, you haven't brought in any valid referrals, so bonus calculations cannot be conducted.</p>
            <p>By continuously introducing new referrals, you can participate in all the active actions of your downline. All these activities are related to you, and as a result, your potential for higher bonuses increases.</p>
          </div>
        <button className="w-full bg-btn mt-3 text-white py-2 rounded-full font-medium hover:opacity-90 transition-opacity">
          Share with friends
        </button>
        </div>

        
    <div class="p-2 text-white">
  <h2 class="text-sm font-bold text-primary mb-2">★ Rule Explanation:</h2>
  <ol class="list-decimal list-inside text-[12px]">
    <li>Daily Mystery Reward Pool: Total of ₹<span class="font-bold">2388888</span></li>
    <li>Daily bonuses are limited, but if you miss out, don't worry — it’s an ongoing event, and you can participate every day.</li>
    <li>Participate in the Daily Mystery Rewards activity by inviting friends to join the game through sharing every day.</li>
    <li>Reward your hard work with mysterious bonus rewards. The bonuses will be announced the next day. Good luck!</li>
    <li>We reserve the right to modify, change, or cancel this promotional offer without prior notice; applicable to all promotional activities.</li>
    <li>The mysterious bonus requires 0 to 3 times the wager, adding a mysterious element (up to a maximum of 3 times).</li>
  </ol>
</div>
      </div>
      
    </div>
    </div>
  )
}

export default DailyReward
