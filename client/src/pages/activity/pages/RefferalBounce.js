import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import refbanner from "../../../assets/banner/refbanner.jpeg";
import { useSelector } from "react-redux";

const RefferalBounce = () => {
  const { bannergetData } = useSelector((state) => state.auth);
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
            <img src={bannergetData?.gameall?.logo} alt="" className="w-28" />
          </div>
        </div>
      </div>
      <div className="bg-[#fe7350] p-5 pb-[80px] space-y-3">
        <div>
          <h1 className="font-bold text-xl text-white text-center mb-2">
            REFERRALS BONUSES
          </h1>
          <p className="text-sm text-center font-[400] text-white">
            Contact the agent to activate the bonus for deposits made by your
            downline.
          </p>
        </div>
      </div>
      <div className="bg-white rounded-3xl relative -top-[3rem] py-5">
        <div class="p-2">
          <img src={refbanner} alt="" />
          {/* <h2 class="text-sm font-bold text-center mb-4">
            <span className="text-[#fe7350]">★</span> List of bonuses{" "}
            <span className="text-[#fe7350]">★</span>{" "}
          </h2>
          <table class="min-w-full border-collapse border border-border text-sm text-center rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th class="border border-border text-sm p-2">FIRST RECHARGE</th>
                <th class="border border-border text-sm  p-2">
                  SUBORDINATE FIRST BONUS
                </th>
                <th class="border border-border text-sm  p-2">UPLINE BONUS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-border p-2">₹100</td>
                <td class="border border-border p-2">₹28</td>
                <td class="border border-border p-2">₹58</td>
              </tr>
              <tr>
                <td class="border border-border p-2">₹200</td>
                <td class="border border-border p-2">₹48</td>
                <td class="border border-border p-2">₹78</td>
              </tr>
              <tr>
                <td class="border border-border p-2">₹500</td>
                <td class="border border-border p-2">₹108</td>
                <td class="border border-border p-2">₹128</td>
              </tr>
              <tr>
                <td class="border border-border p-2">₹1000</td>
                <td class="border border-border p-2">₹188</td>
                <td class="border border-border p-2">₹288</td>
              </tr>
              <tr>
                <td class="border border-border p-2">₹5000</td>
                <td class="border border-border p-2">₹488</td>
                <td class="border border-border p-2">₹788</td>
              </tr>
              <tr>
                <td class="border border-border p-2">₹12000</td>
                <td class="border border-border p-2">₹1388</td>
                <td class="border border-border p-2">₹1998</td>
              </tr>
              <tr>
                <td class="border border-border p-2">₹60000</td>
                <td class="border border-border p-2">₹5888</td>
                <td class="border border-border p-2">₹5888</td>
              </tr>
              <tr>
                <td class="border border-border p-2">₹110000</td>
                <td class="border border-border p-2">₹9999</td>
                <td class="border border-border p-2">₹9999</td>
              </tr>
              <tr>
                <td class="border border-border p-2">₹200000</td>
                <td class="border border-border p-2">₹13888</td>
                <td class="border border-border p-2">₹13888</td>
              </tr>
            </tbody>
          </table>

          <h3 class="text-sm font-bold text-center mt-6">
            <span className="text-[#fe7350]">★</span> Rules{" "}
            <span className="text-[#fe7350]">★</span>{" "}
          </h3>
          <ol class="list-decimal list-inside text-sm text-gray-500 mt-4">
            <li>To activate, please contact your agent.</li>
            <li>
              UPLINE BONUS: Statistics will be calculated the following day, and
              the latest time for completion is by noon. Bonuses do not
              accumulate and will expire if not claimed on the same day.
            </li>
            <li>
              SUBORDINATE FIRST BONUS: Inform your downline to claim this bonus
              on the first deposit activity page; it can be claimed on the same
              day.
            </li>
            <li>
              Users with multiple IP addresses, repeated bank cards, violations,
              etc., will be deemed invalid and will not be included in the
              participation calculation.
            </li>
            <li>
              This activity is organized by the official entity. In the event of
              bonus arbitrage, violations, or other infractions, we reserve the
              right to cancel all your activities without further notice.
            </li>
          </ol> */}
        </div>
      </div>
    </div>
  );
};

export default RefferalBounce;
