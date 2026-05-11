import React, { useEffect, useMemo, useState } from "react";
import "./wallet.css";
import { Link, useNavigate } from "react-router-dom";
import { IoWallet } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa";
import DepositImg from "../../assets/jaiclub/gold-wallet.png";
import WithdrawImg from "../../assets/jaiclub/withdraw-image.png";
import DepositHisImg from "../../assets/jaiclub/rechargeHistory.png";
import WithdrawHisImg from "../../assets/jaiclub/withdrawal-image.png";
import { GiEightBall } from "react-icons/gi";
import Layout from "../../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowBack } from "react-icons/io";
import Loader from "../../components/Loader";

import { userDetail } from "../../store/reducer/authReducer";
import {
  checkBalance,
  transferBalance,
} from "../../store/reducer/spribeGameReducer";

const Wallet = () => {
  const { userInfo, loader } = useSelector((state) => state.auth);

  const { checkBalanceData } = useSelector((state) => state.spribeGame);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    dispatch(userDetail());
    let playerid = userInfo?.phone_user;
    dispatch(checkBalance(playerid));
  }, []);

  const handleTransfer = () => {
    let playerid = userInfo?.phone_user;
    dispatch(transferBalance(playerid)).then((res) => {
      dispatch(userDetail());
      dispatch(checkBalance(playerid));
    });
  };

  useEffect(() => {}, [checkBalanceData, userInfo]);
  return (
    <Layout>
      <div className="p-1 py-3 sticky top-0 z-20 bg-navs">
        <div className="container-section flex items-center">
          <button>
            <Link to={"/promotion"}>
              <IoIosArrowBack className="text-xl text-white" />
            </Link>
          </button>
          <h1 className="heading-h1 text-white text-center flex justify-center items-center m-auto">
            Wallet
          </h1>
        </div>
      </div>
      {loader && <Loader />}

      <div className="bg-body-color flex flex-col justify-center items-center py-4 z-10">
        <p>
          <svg
                data-v-159bf81f=""
                class="svg-icon icon-wallet1 size-12 text-[#A08FFF] bright"
              >
                <use href="#icon-wallet1"></use>
              </svg>
        </p>
        <h3 className="heading text-2xl font-medium text-white">
          ₹{Number(userInfo?.money_user)?.toFixed(2)}
        </h3>
        <p className="fs-sm text-white">Total balance</p>
      </div>
      <div className="bg-body-color py-4 flex justify-around text-white">
        <div className="text-center">
          <h4>{userInfo?.totalRecharge ? userInfo?.totalRecharge : 0}</h4>
          <p className="fs-sm">Total deposit amount</p>
        </div>
        <div className="text-center">
          <h4>{userInfo?.totalWithdraw ? userInfo?.totalWithdraw : 0}</h4>
          <p className="fs-sm">Total withdraw amount</p>
        </div>
      </div>
      <div className="container-section mt-3">
        <div className="bg-navs rounded-xl p-3">
          <div className="flex  justify-between px-8 pt-4">
            <div className="relative inline-block">
              <FaRegCircle className="text-[--bg_color_L3] text-[100px]" />
              <span className="absolute top-[28%] left-[30%] text-white">
                100%
              </span>
              <p className="text-center text-sm text-white">
                ₹{Number(userInfo?.money_user).toFixed(2)}
              </p>
              <p className="text-center fs-sm text-white">Main Wallet</p>
            </div>
            <div className="relative inline-block">
              <FaRegCircle className="color-l text-[100px]" />
              <span className="absolute top-[28%] left-[40%] text-white">
                0%
              </span>
              <p className="text-center text-sm text-white">
                ₹{parseFloat(checkBalanceData?.Balance) || 0}
              </p>
              <p className="text-center fs-sm text-white">3rd party Wallet</p>
            </div>
          </div>
          <button
            className="bg-body-color w-full p-1 text-base font-bold my-2 rounded-full mt-3 text-[#05012B]"
            onClick={handleTransfer}
          >
            Main wallet transfer
          </button>

          <div className="flex justify-between mt-4 mx-2">
            <div onClick={() => navigate("/wallet/Recharge")}>
              <img src={DepositImg} alt="" className="w-16" />
              <p className="fs-sm gray-100 text-center mt-2">Deposit</p>
            </div>
            <div onClick={() => navigate("/wallet/Withdraw")}>
              <img src={WithdrawImg} alt="" className="w-16" />
              <p className="fs-sm gray-100 text-center mt-2">Withdraw</p>
            </div>
            <div onClick={() => navigate("/wallet/RechargeHistory")}>
              <img src={DepositHisImg} alt="" className="w-16" />
              <p className="fs-sm gray-100 text-center mt-2">
                Deposit <br /> history
              </p>
            </div>
            <div onClick={() => navigate("/wallet/WithdrawalHistory")}>
              <img src={WithdrawHisImg} alt="" className="w-16" />
              <p className="fs-sm gray-100 text-center mt-2">
                Withdrawal <br /> history
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-section mt-3">
        <div className="grid grid-cols-12 gap-2 ">
          {LotteryData.map((item, i) => (
            <div
              key={i}
              className={`col-span-4 relative bg-navs flex flex-col justify-center items-center rounded-md shadow  py-5 ${
                i === 0 ? "bg-navs text-[#92A8E3]" : "gray-50"
              }`}
            >
              <h5 className="heading-h5 text-sm relative z-10 mb-3">
                {i === 0
                  ? `₹${Number(userInfo?.money_user)?.toFixed(2)}`
                  : i === 1
                    ? `₹${parseFloat(checkBalanceData?.Balance) || 0}`
                    : item.amount}
              </h5>
              <p className="fs-sm relative z-10 ">{item.name}</p>
              <span className="absolute top-4 text-[#D9D9D9] text-6xl wallet-svg opacity-[0.5]">
                {item.Icons}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Wallet;

const LotteryData = [
  {
    amount: "0.0",
    name: "Lottery",
    Icons: <GiEightBall />,
  },
  {
    amount: "0.00",
    name: "JILI",
    Icons: <GiEightBall />,
  },

  // {
  //   amount: "0.00",
  //   name: "Wickets9",
  //   Icons: <GiEightBall />,
  // },
  // {
  //   amount: "0.00",
  //   name: "CQ9",
  //   Icons: <GiEightBall />,
  // },
  // {
  //   amount: "0.00",
  //   name: "MG",
  //   Icons: <GiEightBall />,
  // },
  // {
  //   amount: "0.00",
  //   name: "JDM",
  //   Icons: <GiEightBall />,
  // },
  // {
  //   amount: "0.00",
  //   name: "DG",
  //   Icons: <GiEightBall />,
  // },
  // {
  //   amount: "0.00",
  //   name: "CMD",
  //   Icons: <GiEightBall />,
  // },
  // {
  //   amount: "0.00",
  //   name: "Saba",
  //   Icons: <GiEightBall />,
  // },
  // {
  //   amount: "0.00",
  //   name: "EVO_Video",
  //   Icons: <GiEightBall />,
  // },
  // {
  //   amount: "0.00",
  //   name: "TB_Chess",
  //   Icons: <GiEightBall />,
  // },
  // {
  //   amount: "0.00",
  //   name: "Card365",
  //   Icons: <GiEightBall />,
  // },
  // {
  //   amount: "0.00",
  //   name: "VSCard",
  //   Icons: <GiEightBall />,
  // },
  // {
  //   amount: "0.00",
  //   name: "AG_Video",
  //   Icons: <GiEightBall />,
  // },
  // {
  //   amount: "0.00",
  //   name: "PG",
  //   Icons: <GiEightBall />,
  // },
  // {
  //   amount: "0.00",
  //   name: "TB",
  //   Icons: <GiEightBall />,
  // },
  // {
  //   amount: "0.00",
  //   name: "WM_Video",
  //   Icons: <GiEightBall />,
  // },
];
