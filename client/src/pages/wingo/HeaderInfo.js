import React from "react";
import { BsFire } from "react-icons/bs";
import { FaVolumeUp } from "react-icons/fa";
import RefereshImg from "../../assets/refresh.png";
import Wallet from "../../assets/wallet.png";
import { useNavigate, Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
const HeaderInfo = ({ money, handleRefersh }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className=" pb-24 rounded-b-[60px]">
        <div className="container-section pt-5">
          <div className="wallet-bg-section nav-bg pb-5 rounded-2xl  flex flex-col justify-center items-center w-full">
            <div className="flex items-center ms-2 mt-4 mb-2">
              <h3 className="heaing-h3 text-xl font-bold">
                ₹{Number(money).toFixed(2)}
              </h3>
              <img
                src={RefereshImg}
                alt=""
                className="w-5 ms-2 mb-[2px] filter invert"
                onClick={handleRefersh}
              />
            </div>
            <div className="flex items-center">
              <img src={Wallet} alt="" className="w-4 mr-2 mb-[2px]" />
              <p className="fs-sm">Wallet balance</p>
            </div>
            <div className="flex w-full justify-around items-center mt-4">
              <button
                className="text-base flex justify-center text-white items-center px-6 py-1 border-none font-bold bg-[#D23838] rounded-full "
                onClick={() => navigate("/wallet/Withdraw")}
              >
                Withdraw
              </button>
              <button
                className="text-base flex justify-center text-white items-center px-6 py-1 border-none font-bold bgs-green rounded-full "
                onClick={() => navigate("/wallet/Recharge")}
              >
                Deposit
              </button>
            </div>
          </div>

          <div className="bg-color-l mt-5 p-2 items-center flex justify-between rounded-full">
            <FaVolumeUp className="color-blue-500" />
            <Marquee className="gray-50 text-sm">
              Welcome To Jalwa9game If you need any help contact our Support
              team, Thanks.
            </Marquee>

            <Link
              // to={"https://wa.me/+917491861731"}
              className="flex items-center blue-linear rounded-full p-1 px-3"
            >
              <BsFire className="text-white mr-1" />{" "}
              <span className="text-white fs-sm">Details</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderInfo;
