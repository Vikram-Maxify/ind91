import React, { useEffect } from "react";
import "./activity.css";
import Layout from "../../layout/Layout";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
import giftBox from "../../assets/jaiclub/Navbar/giftbox.webp"





const bettingImg = 'https://i.ibb.co/Kz8vtWT/Betting-Rebate.png"';
const SupperImg = "https://i.ibb.co/1MbggqG/super-Jackpot.png";
// const MemberGiftImg = "https://i.ibb.co/Hg13hYF/member-Gift.png";
const ActivityReward = "https://i.ibb.co/9mn4dwjn/activity-Reward.webp";
const GiftImg = "https://i.ibb.co/GkJh6My/sign-In-Banner.png";
const AttendanceImg = "https://i.ibb.co/PCm07tj/gift-Redeem.png";
const InvitationImg = "https://i.ibb.co/pvdxFQds/invitation-Bonus-aa7acbd3.png";

const Activity = () => {
  const { userInfo, bannergetData } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Layout>
      <div className="flex justify-center">
        <img src={bannergetData?.gameall?.logo} alt="" className="w-36" />
      </div>

      {!userInfo && <Loader />}
      <div className="bg-body py-3 text-white pb-[20px] text-center rounded-lg">
        <div className="flex justify-center items-center space-x-8 mb-5">
          <div>
            <p className="fs-sm text-gray-100">Today's bonus</p>
            <p className="text-xl font-bold text-white">₹0.00</p>
          </div>

          <div className="h-8 w-px bg-[#022C68]"></div>

          <div>
            <p className="fs-sm text-gray-100">Total bonus</p>
            <p className="text-xl font-bold text-white">₹0.00</p>
          </div>
        </div>

        <button className="text-[#A08FFF] px-6 py-2 rounded-full  transition bg-[#1A1A2C]">
          Bonus details
        </button>
      </div>
      <div className="container-section mt-3">
        {/* <ActivityCards /> */}

        <div className="grid grid-cols-4 justify-around items-center text-white">
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => navigate("/main/ActivityAward")}
          >
            <img src={ActivityReward} alt="" loading="lazy" className="w-10" />
            <p className="fs-sm text-white text-center whitespace-nowrap leading-3 mt-2">
              Activity <br /> Reward
            </p>
          </div>
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => navigate("/main/InvitationBonus")}
          >
            <img src={InvitationImg} alt="" loading="lazy" className="w-10" />
            <p className="fs-sm text-white text-center whitespace-nowrap leading-3 mt-2">
              Invitation <br /> Bonus
            </p>
          </div>
          <div
            className=" flex flex-col justify-center items-center"
            onClick={() => navigate("/main/Laundry")}
          >
            <img src={bettingImg} alt="" loading="lazy" className="w-10" />
            <p className="fs-sm black-2 text-white text-center leading-3 mt-2">
              Betting <br /> rebate
            </p>
          </div>
          <div
            className=" flex flex-col justify-center items-center"
            onClick={() => navigate("/main/SuperJackpot")}
          >
            <img src={SupperImg} alt="" loading="lazy" className="w-10" />
            <p className="fs-sm black-2 text-white text-center leading-3 mt-2">
              Super
              <br />
              Jackpot
            </p>
          </div>
          <div
            className=" flex flex-col justify-center items-center mt-5"
            onClick={() => navigate("/activity/MemberPackage")}
          >
            <img src={giftBox} alt="" loading="lazy" className="w-10" />
            <p className="fs-sm black-2 text-white text-center leading-3 mt-2">
             First gift
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3 mt-5">
          <div
            className="col-span-6 bg-bluest rounded-md"
            onClick={() => navigate("/main/RedeemGift")}
          >
            <img src={GiftImg} alt="" loading="lazy" />
            <div className="p-2 mb-3">
              <h3 className="heading-h3 text-white  mb-1 text-sm font-bold">
                Gift
              </h3>
              <p className="black-2 text-white fs-sm">
                Enter the redemption code to recieve gift rewards
              </p>
            </div>
          </div>
          <div
            className="col-span-6 bg-bluest rounded-md"
            onClick={() => navigate("/activity/DailySignIn")}
          >
            <img src={AttendanceImg} alt="" loading="lazy" />
            <div className="p-2 mb-3">
              <h3 className="heading-h3 text-white mb-1 text-sm font-bold">
                Attendance bonus
              </h3>
              <p className="black-2 fs-sm text-white">
                The more consecutive days you sign in, the higher the reward
                will be.
              </p>
            </div>
          </div>
        </div>
        <div
          className="bg-bluest mt-3 rounded-xl"
          onClick={() => navigate("/activity/firstDeposit")}
        >
          <img
            src={bannergetData?.activity?.ban1}
            alt=""
            className="rounded-t-xl"
          />
          <h3 className="heading-h6 text-sm text-white font-semibold p-2">
            Member First Deposit Bonus
          </h3>
        </div>
        <div
          className="bg-bluest mt-3 rounded-xl"
          onClick={() => navigate("/activity/ActivityDetail?id=2")}
        >
          <img
            src={bannergetData?.activity?.ban2}
            alt=""
            className="rounded-t-xl"
          />
          <h3 className="heading-h6 text-sm text-white font-semibold p-2">
            AGENT REFFERAL BONUS
          </h3>
        </div>
        <div
          className="bg-bluest mt-3 rounded-xl"
          onClick={() => navigate("/main/InvitationBonus")}
        >
          <img
            src={bannergetData?.activity?.ban3}
            alt=""
            className="rounded-t-xl"
          />
          <h3 className="heading-h6 text-sm text-white font-semibold p-2">
            REFFERAL BONUS
          </h3>
        </div>

        {/* <div
          className="bg-bluest mt-3 rounded-xl"
          onClick={() => navigate("/activity/ActivityDetail?id=2")}
        >
          <img
            src={bannergetData?.activity?.ban4}
            alt=""
            className="rounded-t-xl"
          />
          <h3 className="heading-h6 text-sm text-white font-semibold p-2">
            WinGo Consecutive Victory Bonus
          </h3>
        </div> */}
        <div
          className="bg-bluest mt-3 rounded-xl"
          onClick={() => navigate("/activity/ActivityDetail?id=3")}
        >
          <img
            src={bannergetData?.activity?.ban5}
            alt=""
            className="rounded-t-xl"
          />
          <h3 className="heading-h6 text-sm text-white font-semibold p-2">
            RECHARGE BONUS FOR NEW PLAYERS
          </h3>
        </div>
        <div
          className="bg-bluest mt-3 rounded-xl"
          onClick={() => navigate("/activity/DailyTasks")}
        >
          <img
            src={bannergetData?.activity?.ban4}
            alt=""
            className="rounded-t-xl"
          />
          <h3 className="heading-h6 text-sm text-white font-semibold p-2">
            7-DAYS CUMULATIVE BETTING REWARDS
          </h3>
        </div>
        <div
          className="bg-bluest mt-3 rounded-xl"
          onClick={() => navigate("/activity/DailyTasks")}
        >
          <img
            src={bannergetData?.activity?.ban6}
            alt=""
            className="rounded-t-xl"
          />
          <h3 className="heading-h6 text-sm text-white font-semibold p-2">
            MINI GAMES DAILY MISSION REWARDS
          </h3>
        </div>
        <div
          className="bg-bluest mt-3 rounded-xl"
          onClick={() => navigate("/activity/ActivityDetail?id=4")}
        >
          <img
            src={bannergetData?.activity?.ban7}
            alt=""
            className="rounded-t-xl"
          />
          <h3 className="heading-h6 text-sm text-white font-semibold p-2">
            Benefits of Using AR WALLET
          </h3>
        </div>
        <div
          className="bg-bluest mt-3 rounded-xl"
          onClick={() => navigate("/activity/MemberPackage")}
        >
          <img
            src="https://i.ibb.co/1GsgPbxW/Banner-20250609132654h9f7.jpg"
            alt=""
            className="rounded-t-xl"
          />
          <h3 className="heading-h6 text-sm text-white font-semibold p-2">
            New Member Gift Package
          </h3>
        </div>
      </div>
    </Layout>
  );
};

export default Activity;
