import React from "react";
import { useSelector } from "react-redux";
import nineG from "../../assets/jaiclub/svg/9G.svg"
import AG from "../../assets/jaiclub/svg/AG.svg"
import ARpay from "../../assets/jaiclub/svg/ARpay.svg"
import CQ9 from "../../assets/jaiclub/svg/CQ9.svg"
import Evo from "../../assets/jaiclub/svg/Evo.svg"
import JDB from "../../assets/jaiclub/svg/JDB.svg"
import JILLI from "../../assets/jaiclub/svg/JILI.svg"
import PG from "../../assets/jaiclub/svg/PG.svg"
import PP from "../../assets/jaiclub/svg/PP.svg"

const PlatformDetails = () => {

  const platforms = [
  nineG,
  AG,
  ARpay,
  CQ9,
  Evo,
  JDB,
  JILLI,
  PG,
  PP
];

  const { userInfo, bannergetData } = useSelector((state) => state.auth);
  return (
    <div className="p-4 m-4 flex bg-[#272037] pb-10 flex-col items-center rounded-xl ">
      {/* Header */}
      {/* <div className="flex space-x-5 gap-8 mx-auto items-center w-full h-auto max-w-xl mb-6 ">
        <img src="https://i.ibb.co/v4sjnG7j/GOLD-3.png" alt="Logo" className=" h-9 mb-2 w-40" />
        <div className="flex items-center justify-center space-x-3">
          <span className="flex items-center justify-center w-12 h-12 rounded-full color-blue font-bold text-lg border-[#00ECBE] border-2">
            18+
          </span>
          <img src={nineG} alt="" />
        </div> */}
        {/* <span className=" text-red-500   rounded-full font-semibold">
          <img
            src={Img3} // Replace with the actual path to your image
            alt="Icon"
            className="h-14 w-14 inline-block"
          />
        </span> */}
      {/* </div> */}

      <div className="grid grid-cols-3 justify-center gap-4 mb-4">
  {platforms.map((logo, index) => (
    <div
      key={index}
      className="bg-white/10 rounded-xl p-2 flex items-center justify-center gradient-border-overlay"
    >
      <img
        src={logo}
        alt="platform"
        className="h-8 w-28 object-contain"
      />
    </div>
  ))}
</div>

      {/* Description */}
      <div className="text-xs text-[#6F80A4] font-sm space-y-1 max-w-xl">
        <p className="flex items-start gap-1 text-white text-sm">
          <span className="mt-2 text-white ">
            <svg
              data-v-87a02cdf=""
              width="9"
              height="9"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                data-v-87a02cdf=""
                x="5.65625"
                width="8"
                height="8"
                rx="1"
                transform="rotate(45 5.65625 0)"
                fill="currentColor"
              ></rect>
            </svg>
          </span>{" "}
          The platform advocates fairness, justice, and openness. We mainly
          operate fair lottery, blockchain games, live casinos, and slot machine
          games.
        </p>
        <p className="flex items-start gap-1 text-white text-sm pt-5">
          <span className="mt-2 text-white">
            <svg
              data-v-87a02cdf=""
              width="9"
              height="9"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                data-v-87a02cdf=""
                x="5.65625"
                width="8"
                height="8"
                rx="1"
                transform="rotate(45 5.65625 0)"
                fill="currentColor"
              ></rect>
            </svg>
          </span>{" "}
          JaiClub works with more than 10,000 online live game dealers and
          slot games, all of which are verified fair games.
        </p>
        <p className="flex items-start gap-1 text-white text-sm pt-5">
          <span className="mt-2 text-white">
            <svg
              data-v-87a02cdf=""
              width="9"
              height="9"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                data-v-87a02cdf=""
                x="5.65625"
                width="8"
                height="8"
                rx="1"
                transform="rotate(45 5.65625 0)"
                fill="currentColor"
              ></rect>
            </svg>
          </span>{" "}
          JaiClub supports fast deposit and withdrawal and looks forward to
          your visit.
        </p>
        <br />
        <p className="text-[#F8BF61] text-[16px]">
          Gambling can be addictive, please play rationally.
        </p>
        <p className="text-[#F8BF61] text-[15px]">
          JaiClub only accepts customers above the age of 18.
        </p>
      </div>
    </div>
  );
};

export default PlatformDetails;
