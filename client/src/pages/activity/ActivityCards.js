import React from "react";
import banner1 from "../../assets/Banner_20240501030737kwyn.png";
import banner2 from "../../assets/Banner_20231118202346qlsx.png";
import banner3 from "../../assets/Banner_20240607133056mj6h.png";
import banner4 from "../../assets/Banner_20240106013055dfv4.png";
import banner5 from "../../assets/Banner_20240318000200c1j7.png";
import banner6 from "../../assets/Banner_20231222235913fg2x.png";
import banner7 from "../../assets/Banner_20231118203256rwdx.png";
import banner8 from "../../assets/Banner_20231118203046nuou.png";
import banner9 from "../../assets/Banner_20231118201616e4rb.png";
import banner10 from "../../assets/Banner_202311182028264uxu.png";
import banner11 from "../../assets/Banner_20231124224947buya.png";
import { FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";

const ActivityCards = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 py-4 px-2">
        <Link
          to="/teamsalery"
          className="bg-white rounded-md shadow-md overflow-hidden"
        >
          <img
            src={banner1}
            alt="Team levels"
            className="w-full h-[150px] object-cover"
          />
          <div className="p-3">
            <h3 className="text-sm font-bold leading-tight mb-2 text-center">
              Team levels 1 to 3 WinGo turnover salary
            </h3>
            <p className="text-xs text-gray-400">
              Downline 3 levels, the turnover in WinGo games all count towards
              your team's turnover.
            </p>
          </div>
        </Link>

        <div className="bg-white rounded-md shadow-md overflow-hidden">
          <img
            src={banner2}
            alt="Free Bonus Event"
            className="w-full h-[150px] object-fill"
          />
          <div className="p-3">
            <h3 className="text-sm font-bold leading-tight mb-2 text-center">
              🔥 Free Bonus Event 🔥
            </h3>
            <p className="text-xs text-gray-400 mb-2">
              Follow the Telegram channel at 8pm every night to participate and
              get free rewards
            </p>
            <button className="w-full bg-[#0088cc] text-white text-[12px] justify-center gap-1 py-1 flex items-center">
              <span>
                <FaTelegram />
              </span>{" "}
              Telegram Channel
            </button>
          </div>
        </div>

        <Link
          // to="/referbounce"
          className="bg-white rounded-md shadow-md overflow-hidden"
        >
          <img
            src={banner3}
            alt="Referrals"
            className="w-full h-[150px] object-fill"
          />
          <div className="p-3">
            <h3 className="text-sm font-bold leading-tight mb-2 text-center">
              REFERRALS BONUSES
            </h3>
            <p className="text-xs text-gray-400">
              Refer new members to make first deposit and get referral bonus up
              to ₹13888.
            </p>
          </div>
        </Link>

        <Link
          to="/freebounce"
          className="bg-white rounded-md shadow-md overflow-hidden"
        >
          <img
            src={banner4}
            alt="Free Bonus"
            className="w-full h-[150px] object-fill"
          />
          <div className="p-3">
            <h3 className="text-sm font-bold leading-tight mb-2 text-center">
              🔥 Free Bonus 🔥
            </h3>
            <p className="text-xs text-gray-400">
              Everyone is eligible to participate. Each bonus round has a
              limited amount of funds available on a first-come, first-served
              basis, with the highest possible free bonus being ₹1000.
            </p>
          </div>
        </Link>
        <Link
          to="/daytask"
          className="bg-white rounded-md shadow-md overflow-hidden"
        >
          <img
            src={banner5}
            alt="Referrals"
            className="w-full h-[150px] object-fill"
          />
          <div className="p-3">
            <h3 className="text-sm font-bold leading-tight mb-2 text-center">
              Daily/Weekly activity
            </h3>
            <p className="text-xs text-gray-400">
              Daily/Weekly events, WinGo daily/weekly game bonuses, VIP
              daily/weekly deposit bonuses, we will regularly offer you
              different special events.{" "}
            </p>
          </div>
        </Link>

        {/* <Link */}
        {/* to="/dailysalery"
          className="bg-white rounded-md shadow-md overflow-hidden"
        > */}
        <div className="bg-white rounded-md shadow-md overflow-hidden">
          <img
            src={banner6}
            alt="Free Bonus"
            className="w-full h-[150px] object-fill"
          />
          <div className="p-3">
            <h3 className="text-sm font-bold leading-tight mb-2 text-center">
              Daily Salary
            </h3>
            <p className="text-xs text-gray-400">
              Contact your agent to inquire. Your daily salary is determined
              based on the active user count as per the specified table.{" "}
            </p>
          </div>
        </div>
        {/* </Link> */}
        <Link
          to="/winningstreak"
          className="bg-white rounded-md shadow-md overflow-hidden"
        >
          <img
            src={banner7}
            alt="Referrals"
            className="w-full h-[150px] object-fill"
          />
          <div className="p-3">
            <h3 className="text-sm font-bold leading-tight mb-2 text-center">
              WinGo Streak Bonus
            </h3>
            <p className="text-xs text-gray-400">
              Earn bonuses through winning streaks, the more you win and the
              more consecutive wins you have, the bigger your bonus will be.{" "}
            </p>
          </div>
        </Link>

        <Link
          to="/dailybetting"
          className="bg-white rounded-md shadow-md overflow-hidden"
        >
          <img
            src={banner8}
            alt="Free Bonus"
            className="w-full h-[150px] object-fill"
          />
          <div className="p-3">
            <h3 className="text-sm font-bold leading-tight mb-2 text-center">
              WinGo Daily Betting Bonus
            </h3>
            <p className="text-xs text-gray-400">
              Deposit every day and participate in WinGo game activities to win
              super bonuses.
            </p>
          </div>
        </Link>
        <Link
          to="/activity/DailySignIn"
          className="bg-white rounded-md shadow-md overflow-hidden"
        >
          <img
            src={banner9}
            alt="Referrals"
            className="w-full h-[150px] object-fill"
          />
          <div className="p-3">
            <h3 className="text-sm font-bold leading-tight mb-2 text-center">
              Daily check-in
            </h3>
            <p className="text-xs text-gray-400">
              The more consecutive days you enter, the greater the reward.{" "}
            </p>
          </div>
        </Link>

        <Link
          to="/radeemgift"
          className="bg-white rounded-md shadow-md overflow-hidden"
        >
          <img
            src={banner10}
            alt="Free Bonus"
            className="w-full h-[150px] object-fill"
          />
          <div className="p-3">
            <h3 className="text-sm font-bold leading-tight mb-2 text-center">
              Gift redemption
            </h3>
            <p className="text-xs text-gray-400">
              You can redeem the gift reward by entering the redemption code
            </p>
          </div>
        </Link>
        <Link
          to="/youtube"
          className="bg-white rounded-md shadow-md overflow-hidden"
        >
          <img
            src={banner11}
            alt="Free Bonus"
            className="w-full h-[150px] object-fill"
          />
          <div className="p-3">
            <h3 className="text-sm font-bold leading-tight mb-2 text-center">
              YouTube Creative
            </h3>
            <p className="text-xs text-gray-400">
              Create creative videos about the game Jalwa9game on YouTube to earn
              bonuses through views.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ActivityCards;
