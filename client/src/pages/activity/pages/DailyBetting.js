import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DailyBetting = () => {
  const { bannergetData } = useSelector((state) => state.auth);
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
            <img src={bannergetData?.gameall?.logo} alt="" className="w-28" />
          </div>
        </div>
      </div>
      <div className="bg-[#fe6537] p-5 pb-[110px] space-y-3">
        <div>
          <p className="text-[12px] font-[400] text-white">
          WinGo Daily Betting to Win Super Bonuses <br />
          If your daily bets on WinGO exceed six times the daily deposit amount, you qualify for a bonus. The reward can be claimed the next day.
          </p>
        </div>
      </div>

      <div className="relative -top-10 mx-auto bg-[#f7f8ff] rounded-2xl p-4 space-y-6">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-sm">Get bonus</h1>
        <p className="text-base mt-2">₹0</p>
        <button className="mt-4 bg-btn text-white px-8 py-2 rounded-full shadow-md ">
          receive
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 gap-4 bg-gray-50 rounded-lg p-4">
        <div className="text-center">
          <p className="text-sm">₹0</p>
          <p className="text-[12px] text-gray-500">Deposit Amount from Yesterday</p>
        </div>
        <div className="text-center">
          <p className="text-sm">₹0</p>
          <p className="text-[12px] text-gray-600">WinGO Game Turnover</p>
        </div>
      </div>

      {/* Play Button */}
      <button className="w-full bg-btn text-white py-3 rounded-full text-lg font-semibold shadow-md ">
        Go Play WinGo Game
      </button>

      {/* Maximum Bonus Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <p className="font-semibold text-sm">Maximum Bonus₹500000</p>
        </div>

        {/* Bonus Tiers */}
        <div className="space-y-4">
          <div className="p-4 bg-white border rounded-lg space-y-1">
            <p className="text-gray-800 text-[12px]">Turnover exceeds the Deposit amount by 6 times</p>
            <p className="text-[12px] text-gray-800">Get 3% of deposit amount</p>
          </div>

          <div className="p-4 bg-white border rounded-lg space-y-1">
            <p className="text-gray-800 text-[12px]">Turnover exceeds the Deposit amount by 10 times</p>
            <p className="text-[12px] text-gray-800">Get 4% of deposit amount</p>
          </div>

          <div className="p-4 bg-white border rounded-lg space-y-1">
            <p className="text-gray-800 text-[12px]">Turnover exceeds the Deposit amount by 15 times</p>
            <p className="text-[12px] text-gray-800">Get 5% of deposit amount</p>
          </div>

          <div className="p-4 bg-white border rounded-lg space-y-1">
            <p className="text-gray-800 text-[12px]">Turnover exceeds the Deposit amount by 20 times</p>
            <p className="text-[12px] text-gray-800">Get 6% of deposit amount</p>
          </div>
        </div>
      </div>
    </div>
    <div class="p-4 text-[12px]">
  <h2 class="text-sm font-bold mb-2">Terms and Conditions:</h2>
  <ul class=" text-gray-500">
    <li class="mb-1">★ Bonuses require 1 times the wagering amount.</li>
    <li class="mb-1">1. This promotional offer is applicable to any session in WinGo games only.</li>
    <li class="mb-1">2. It covers all game options in WinGo, whether big, small, green, or red. Today's deposit amount and WinGo betting records will be calculated the next day.</li>
    <li class="mb-1">3. Today's deposit amount and WinGo betting records are calculated the next day.</li>
    <li class="mb-1">4. For example, if you deposit ₹10,000 every day, and your total betting amount reaches ₹60,000, you will receive a ₹300 bonus the next day (₹10,000 x 3% = ₹300).</li>
    <li class="mb-1">5. Activity bonuses do not accumulate; please remember to claim them the following day.</li>
    <li>6. To avoid discrepancies in textual descriptions, we reserve the right to modify, change, or cancel this promotional offer without prior notice; applicable to all promotional activities.</li>
  </ul>
</div>
    </div>
  );
};

export default DailyBetting;
