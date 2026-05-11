import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import img from "../../../assets/share-yihan-cf44e3ad.png";

const FreeBounse = () => {
  return (
    <div>
      <div className="bg-[#fe7350] p-1 py-1 sticky top-0">
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

      <div class="bg-[#ffe4de] p-2">
        <img
          aria-hidden="true"
          alt="bonus-icon"
          src={img}
          class="w-[150px] h-auto mx-auto rounded-full py-8"
        />
        <h2 class="text-xl font-bold text-primary text-center mt-4">
          Unfortunately
        </h2>
        <p class="text-sm text-center mt-2">
          Today's bonuses have all been claimed. The next chance will begin at 8
          PM tomorrow evening, sharp. Please come and participate tomorrow.
        </p>

        <button class="bg-t-b text-white w-full mt-4 py-2 rounded-full">
          Share with friends
        </button>

        <h3 class="text-lg font-semibold text-primary mt-6">
          Before participating, please read the rules:
        </h3>
        <ol class="list-inside list-decimal text-sm mt-2">
          <li>
            Free bonuses are open to everyone. Inviting your friends to join the
            game and participate may increase your free bonus amount.
          </li>
          <li>
            Free bonuses have a daily limit and start at 8 PM each day. It's
            first-come, first-served. If you can't participate this time, please
            come back tomorrow.
          </li>
          <li>
            After successfully making a reservation, you can claim your free
            bonus by following the steps.
          </li>
          <li>
            Participation requirements for free bonuses: Users with multiple IPs
            or engaged in false and prohibited activities are not eligible to
            participate.
          </li>
          <li>
            Free bonus withdrawal requirements: Participation in the game bets
            of any of the following options - WinGo, K3, 5D, or TrxWin - is
            mandatory.
          </li>
          <li>
            This activity is officially managed. Engaging in violations, illegal
            activities, or any misconduct to obtain free bonuses may result in
            severe actions, including restrictions, without further notice.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default FreeBounse;
