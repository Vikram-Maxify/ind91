import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import delyselery from "../../../assets/banner/delyselery.jpeg";
import { useSelector } from "react-redux";

const DailySalery = () => {
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
      <div className="bg-[#fe6537] p-5 space-y-3">
        <h1 className="font-bold text-2xl text-white text-center">
          Daily Salery
        </h1>
        <div>
          <p className="text-[12px] font-[400] text-white">
            Encourage activity and deposits from your referrals to earn your
            daily salary.
          </p>
        </div>
      </div>

      <div class="p-4">
        <img src={delyselery} alt="" />
        {/* <table class="min-w-full border-collapse bg-[#fff7f5] text-center">
          <thead>
            <tr class="">
              <th class="border p-2 font-[400]">Active Players</th>
              <th class="border p-2 font-[400]">Daily Salary</th>
            </tr>
          </thead>
          <tbody className="text-[#e26f37]">
            <tr class="">
              <td class="border p-2 font-bold">2</td>
              <td class="border p-2">₹377</td>
            </tr>
            <tr class="">
              <td class="border p-2 font-bold">5</td>
              <td class="border p-2">₹1077</td>
            </tr>
            <tr class="">
              <td class="border p-2 font-bold">10</td>
              <td class="border p-2">₹2177</td>
            </tr>
            <tr class="">
              <td class="border p-2 font-bold">20</td>
              <td class="border p-2">₹5777</td>
            </tr>
            <tr class="">
              <td class="border p-2 font-bold">40</td>
              <td class="border p-2">₹11777</td>
            </tr>
            <tr class="">
              <td class="border p-2 font-bold">60</td>
              <td class="border p-2">₹17777</td>
            </tr>
            <tr class="">
              <td class="border p-2 font-bold">80</td>
              <td class="border p-2">₹22777</td>
            </tr>
            <tr class="">
              <td class="border p-2 font-bold">100</td>
              <td class="border p-2">₹27777</td>
            </tr>
            <tr class="">
              <td class="border p-2 font-bold">200</td>
              <td class="border p-2">₹37777</td>
            </tr>
            <tr class="">
              <td class="border p-2 font-bold">300</td>
              <td class="border p-2">₹57777</td>
            </tr>
            <tr class="">
              <td class="border p-2 font-bold">500</td>
              <td class="border p-2">₹110000</td>
            </tr>
            <tr class="">
              <td class="border p-2 font-bold">1000</td>
              <td class="border p-2">₹220000</td>
            </tr>
            <tr class="">
              <td class="border p-2 font-bold">3000</td>
              <td class="border p-2">₹370000</td>
            </tr>
          </tbody>
        </table> */}
        <p class="mt-2 text-center">
          <span class="text-accent">Telegram:</span>{" "}
          <a href="#" class="text-primary">
            {" "}
            @Jalwa9game
          </a>
        </p>
        <p class="mt-4 text-[12px] text-red-500">
          Contact an agent to activate your Jalwa9game Daily Salary Special
          Bonus.
        </p>
      </div>
      <div class="p-2">
        <h2 class="text-base font-semibold mb-4">Terms and Conditions:</h2>
        <ul class=" list-inside text-[12px]">
          <li class="mb-2 ">
            <span class="font-semibold">★</span> Invite users to Deposit and
            play games. Even if you invited them a long time ago and they have
            only recently become active through deposits, they will still be
            counted as active users for you. Daily wages are not accumulated;
            they are calculated solely based on the activities from the previous
            day.
          </li>
          <li class="mb-2">
            1. Active refers to your subordinate accounts engaging in gaming
            activities daily. Our customer service agents will analyze the data
            by 12 PM the following day at the latest, and calculate the number
            of active users from the previous day for you.
          </li>
          <li class="mb-2">
            2. Daily salary participation requires daily activity and Deposit.
            Salaries may be withheld or permanently discontinued for accounts
            with fake members.
          </li>
          <li class="mb-2">
            3. A minimum of 30% to 50% of discount members must Deposit again,
            and new members must be recruited to qualify for salaries.
          </li>
          <li class="mb-2">
            4. This platform's daily salaries are subject to manual
            participation and analysis the following day.
          </li>
          <li>
            5. Salaries cannot be claimed by accounts with the same IP, bank
            details, or phone numbers. This promotion is solely the property of
            our company, and we reserve the right to cancel without prior notice
            in case of any violations.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DailySalery;
