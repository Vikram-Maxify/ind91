import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const bettingTiers = [
  { betting: "₹5000000-₹9999999", bonus: "₹30000" },
  { betting: "₹1000000-₹4999999", bonus: "₹6000" },
  { betting: "₹200000-₹999999", bonus: "₹1200" },
  { betting: "₹100000-₹199999", bonus: "₹600" },
  { betting: "₹50000-₹99999", bonus: "₹300" },
  { betting: "₹20000-₹49999", bonus: "₹120" },
  { betting: "₹10000-₹19999", bonus: "₹67" },
  { betting: "₹5000-₹9999", bonus: "₹37" },
];

const Salery = () => {
  return (
    <div>
      <div className="bg-[#fe7350] p-1 py-1 sticky top-0">
        <div className="container-section flex  items-center relative py-0">
          <button className="absolute">
            <Link to={"/"}>
              {" "}
              <IoIosArrowBack className="text-xl text-white" />
            </Link>
          </button>
          <div className="  text-center flex justify-center items-center m-auto">
            <img src="/logo.png" alt="" className="w-28" />
          </div>
        </div>
      </div>
      <div className="bg-[#fe7350] p-5 pb-[80px] space-y-3">
        <div>
          <h1 className="font-bold text-xl text-white text-center">
            Team levels 1 to 3 WinGo turnover salary
          </h1>
          <p className="text-sm text-center font-[400] text-white">
            Outstanding agents, daily team turnover salary
          </p>
        </div>
      </div>
      <div className="bg-white rounded-3xl relative -top-[3rem] py-5">
        <div className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden">
          <div className=" p-4">
            <h2 className="text-sm font-normal flex items-center gap-2">
              Contact agent to activate team salary
            </h2>

            {/* <p className="flex items-center text-sm">
            Telegram:
            <span className="text-blue-500 ml-1">@RajaGamesAgent</span>
          </p> */}
          </div>
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold border-l-4 border-red-500 pl-2">
              Team valid betting amount
            </h2>
          </div>
          <div className="divide-y">
            {bettingTiers.map((tier, index) => (
              <div key={index} className="flex justify-between p-4">
                <div>
                  <div className="text-gray-600 text-sm">Team betting</div>
                  <div className="font-medium text-base text-red-500">
                    {tier.betting}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-gray-600 text-sm">Bonus</div>
                  <div className="font-medium text-base text-red-500">
                    {tier.bonus}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div class="p-2">
        <h2 class="text-lg font-semibold border-l-4 border-red-500 px-4">
          Rules explanation
        </h2>
        <ol class="list-decimal list-inside text-gray-500 space-y-2 text-sm">
          <li>Opening requires contacting official agents.</li>
          <li>
            Teams of levels 1-3 under you in WinGo make game bets, and you
            receive team turnover salary based on the proportion. Manual
            analysis and calculation will be conducted the next day, and you can
            claim after calculation.
          </li>
          <li>
            Requirements for participating in team turnover salary bonus: Having
            multiple IPs or bank card names and numbers the same will be
            considered invalid team turnover if involved in illegal betting
            activities.
          </li>

          <li>
            This activity is managed by official manual calculation and review.
            Participating in improper behavior such as violating rules, illegal
            betting, or any misconduct to obtain salary bonuses may result in
            severe penalties, permanent disqualification from the activity,
            without further notice.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Salery;
