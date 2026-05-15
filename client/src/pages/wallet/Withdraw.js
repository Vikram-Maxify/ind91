import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import CardImg from "../../assets/card.png";
import USDtImg from "../../assets/usdt.png";
import USDt1Img from "../../assets/usdt1.png";
import {
  BsCheckCircleFill,
  BsPlusSquareDotted,
  BsShieldFillCheck,
} from "react-icons/bs";
import {
  IoCalendarClear,
  IoEyeOffOutline,
  IoEyeOutline,
} from "react-icons/io5";
import { FaSquare } from "react-icons/fa";
import Wallet from "../../assets/balance.png";
import RefereshImg from "../../assets/refresh.png";
import { FcCustomerSupport } from "react-icons/fc";
import CopyCopmponent from "../../components/CopyCopmponent";
import { useDispatch, useSelector } from "react-redux";
import {
  getBank,
  userDetail,
  withdrawal,
} from "../../store/reducer/authReducer";
import { TbLockFilled } from "react-icons/tb";



const Withdraw = () => {
  const { addBankData, userInfo, loader } = useSelector((state) => state.auth);
  console.log("rrrrr12345", userInfo);
  const [clickCount, setClickCount] = useState(0);
  const [timer, setTimer] = useState(null);
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  const [activeTab, setActiveTab] = useState("BANK CARD");
  const [amount, setAmount] = useState(Number());
  const [copyPopup, setCopyPopup] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [betAlert, setBetAlert] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [password, setPassword] = useState("");
  const [showRechargePopup, setShowRechargePopup] = useState(false);
const [selectedAmount, setSelectedAmount] = useState("");
const [showConfirmPopup, setShowConfirmPopup] = useState(false);


  const dispatch = useDispatch();
  const tabs = [
    { label: "BANK CARD", Img: CardImg },
    { label: "USDT", Img: USDtImg },
  ];

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRefesh = () => {
    setCopyPopup(true);
    dispatch(userDetail());
    setTimeout(() => {
      setCopyPopup(false);
    }, 1500);
  };

//   const withdrawSubmit = () => {
//   setShowConfirmPopup(false);  // confirm popup band
//   setShowRechargePopup(true);  // recharge popup open
// };

  const withdrawSubmit = () => {
if(userInfo.isdemo ==1){




    dispatch(
      withdrawal({ money: amount, password: password, type: activeTab })
    ).then((res) => {
      setSuccessMessage(res.payload.message);
      setBetAlert(true);
      if (res.payload.status) {
        // setOpenPopup(false);
        setShowPopup(true);
      }
    });
    dispatch(userDetail());
    setTimeout(() => {
      setBetAlert(false);
    }, 2000);
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  }else{
      setShowConfirmPopup(false);  // confirm popup band
  setShowRechargePopup(true);  // recharge popup open
  return;
  }
  };

  useEffect(() => {
    dispatch(getBank());
    dispatch(userDetail());
  }, [dispatch]);

  useEffect(() => {}, [addBankData]);

  function formatPhoneNumber(phoneNumber) {
    const prefix = phoneNumber.slice(0, 3); // '987'
    const suffix = phoneNumber.slice(-3); // '211'

    return `${prefix}****${suffix}`;
  }

  const handleBack = () => {
    setClickCount((prevCount) => prevCount + 1);

    // Clear previous timer if it exists
    if (timer) {
      clearTimeout(timer);
    }

    setTimer(
      setTimeout(() => {
        if (clickCount === 0) {
          window.history.go(-1); // Go back one step if clicked once
        } else if (clickCount === 2) {
          window.history.go(-2); // Go back two steps if clicked twice
        }

        // Reset click count after action
        setClickCount(0);
      }, 300) // Adjust delay as needed
    );
  };
  return (
    <>
    {showRechargePopup && (
  <div className="popup-overlay z-50 text-gray-950 font-medium ">
    <div className="popup-box">
      <h3>Withdrawal is open <br/> ₹200 Required to active it</h3>

      {/* <input
        type="number"
        placeholder="Enter amount"
        value={selectedAmount}
        onChange={(e) => setSelectedAmount(e.target.value)}
      /> */}
      

      <div className="popup-buttons">
        <button onClick={() => setShowRechargePopup(false)} className="bg-gray-200 shadow-md rounded-xl px-3 py-3">
          Cancel
        </button>

        <button className="bg-body text-white shadow-md rounded-xl px-3 py-3"
          onClick={() => {
            navigate("/wallet/Recharge");
            dispatch(
              withdrawal({
                money: selectedAmount,
                password: password,
                type: activeTab,
              })
            ).then((res) => {
              setSuccessMessage(res.payload.message);
              setBetAlert(true);

              if (res.payload.status) {
                setOpenPopup(false);
                setShowPopup(true);
              }
            });

            dispatch(userDetail());

            setTimeout(() => setBetAlert(false), 2000);
            setTimeout(() => setSuccessMessage(""), 3000);

            setShowRechargePopup(false);
          }}
        >
          Recharge
        </button>

        
      </div>
    </div>
  </div>
)}
      <div className="body-color p-1 py-3 sticky top-0">
        <div className="container-section flex  items-center relative">
          <button className="absolute" onClick={handleBack}>
            <Link>
              {" "}
              <IoIosArrowBack className="text-xl text-white" />
            </Link>
          </button>
          <h1 className="heading-h1 text-white text-center flex justify-center items-center m-auto">
            Withdraw
          </h1>
          <p className="absolute right-1">
            <Link
              className="fs-sm text-white "
              to={"/wallet/WithdrawalHistory"}
            >
              Withdraw history
            </Link>
          </p>
        </div>
      </div>
      <div className="container-section mt-3">
        <div className="total-img p-4">
          <div className="flex items-center">
            <img src={Wallet} alt="" className="w-4 mr-2 mb-[2px]" />
            <p className="fs-sm text-black">Available balance</p>
          </div>
          <div className="flex items-center ms-2 mt-2">
            <h3 className="heaing-h3 text-xl font-bold text-black">
              ₹{Number(userInfo?.money_user).toFixed(2)}
            </h3>
            <img
              src={RefereshImg}
              alt=""
              className="w-5 ms-2 mb-[2px]"
              onClick={handleRefesh}
            />
          </div>
        </div>
        <div className="flex space-x-2 mt-2">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              className={`px-4 py-2 rounded w-28 flex flex-col justify-center items-center ${
                activeTab === tab.label ? "blue-linear text-white" : "bg-navs"
              }`}
              onClick={() => setActiveTab(tab.label)}
            >
              <img src={tab.Img} alt="" className="w-10 mb-1" />
              <span
                className={
                  activeTab === tab.label ? "text-sm" : "gray-100 text-sm"
                }
              >
                {" "}
                {tab.label}
              </span>
            </button>
          ))}
        </div>
        <div className="mt-4">
          {activeTab === "BANK CARD" && (
            <>
              {addBankData?.stk?.length >= 3 ? (
                <div className="bg-navs p-4 rounded-xl text-center">
                  <p className="text-sm gray-100 mt-5">
                    {addBankData?.name_bank}
                  </p>
                  <p className="text-sm gray-100 mt-1">
                    {formatPhoneNumber(addBankData?.stk)}
                  </p>
                </div>
              ) : (
                <div
                  className="bg-navs p-4 rounded-2xl text-center"
                  onClick={() => navigate("/wallet/Withdraw/AddBankCard")}
                >
                  <p className="text-center flex justify-center text-4xl gray-100">
                    {" "}
                    <BsPlusSquareDotted />
                  </p>
                  <p className="text-sm gray-100 mt-5">
                    Add a bank account number
                  </p>
                </div>
              )}
              <p className="color-red-200 fs-sm text-center my-2">
                Need to add beneficiary information to be able to withdraw money
              </p>

              <div className="bg-navs mt-2 p-3 rounded-t-2xl pb-10">
                <div className="flex bg-gray-950 items-center px-5 py-1 rounded-full">
                  <span className=" text-lg font-bold">₹</span>
                  <input
                    type="number"
                    className="w-full p-2  ps-6 flex items-center bg-gray-950 focus:outline-none color-blue placeholder:text-sm placeholder:text-[var(--text_color_L3)]"
                    placeholder="Please enter the amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <div className="flex justify-between mt-2">
                  <p className="fs-sm gray-100">
                    Withdrawable balance{" "}
                    <span className="color-yellow-200">
                      ₹
                      {(
                        Number(userInfo?.money_user) -
                        Number(userInfo?.recharge)
                      ).toFixed(2)}
                    </span>
                  </p>
                  <button
                    className="border rounded-md border-[var(--bgblue)] color-blue px-5 py-[2px] fs-sm"
                    onClick={() =>
                      setAmount(
                        Math.round(
                          Number(userInfo?.money_user) -
                            Number(userInfo?.recharge)
                        )
                      )
                    }
                  >
                    All
                  </button>
                </div>
                <div className="flex justify-between mt-1">
                  <p className="fs-sm gray-100">
                    Withdrawable amount received{" "}
                  </p>
                  <span className="color-yellow-200 text-base font-bold">
                    ₹{Number(amount).toFixed(2)}{" "}
                  </span>
                </div>
                <button
                  className="blue-linear text-black w-full rounded-full p-2 mt-4"
                  onClick={() => setOpenPopup(true)}
                >
                  Withdraw
                </button>
              </div>
            </>
          )}

          {activeTab === "USDT" && (
            <>
              {addBankData?.stk?.length >= 3 ? (
                <div className="bg-navs p-4 rounded-md text-center">
                  <p className="text-sm gray-100 mt-5">
                    {addBankData?.name_user}
                  </p>
                  <p className="text-sm gray-100 mt-1">{addBankData?.sdt}</p>
                </div>
              ) : (
                <div
                  className="bg-navs p-4 rounded-md text-center"
                  onClick={() => navigate("/wallet/Withdraw/AddUSDT")}
                >
                  <p className="text-center flex justify-center text-4xl gray-50">
                    {" "}
                    <BsPlusSquareDotted />
                  </p>
                  <p className="text-sm gray-text mt-5">Add address</p>
                </div>
              )}
              <div className="bg-navs mt-2 p-3 rounded-md pb-10">
                <div className="flex items-center mb-2">
                  <img src={USDt1Img} alt="" className="w-6 mr-2" />{" "}
                  <h3 className="heading-h3 gray-50">Select amount of USDT</h3>
                </div>
                <div className="bg-gray-950 flex items-center px-5 py-1 rounded-lg">
                  <span className="color-blue text-lg font-bold">₹</span>
                  <input
                    type="number"
                    className="w-full  bg-gray-950  p-2  ps-6 flex items-center  focus:outline-none color-blue placeholder:text-sm placeholder:text-[var(--text_color_L3)]"
                    placeholder="Please enter withdrawal amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <div className="bg-gray-950 flex items-center px-5 py-1 rounded-lg mt-3">
                  <img src={USDt1Img} alt="" className="w-5" />
                  <input
                    type="number"
                    className="w-full  bg-gray-950  p-2  ps-6 flex items-center  focus:outline-none color-blue placeholder:text-sm placeholder:text-[var(--text_color_L3)]"
                    placeholder="Please enter USDT amount"
                    value={Number(Number(amount) / 85).toFixed(2)}
                    onChange={(e) => setAmount(e.target)}
                  />
                </div>

                <div className="flex justify-between mt-2">
                  <p className="fs-sm gray-100 color-blue">
                    Withdrawable balance{" "}
                    <span className="color-yellow-200">
                      ₹
                      {(
                        Number(userInfo.money_user) - Number(userInfo?.recharge)
                      ).toFixed(2)}
                    </span>
                  </p>
                  <button
                    className="border rounded-md border-[var(--bgblue)] color-blue px-5 py-[2px] fs-sm"
                    onClick={() =>
                      setAmount(
                        Math.round(
                          Number(userInfo?.money_user) -
                            Number(userInfo?.recharge)
                        )
                      )
                    }
                  >
                    All
                  </button>
                </div>

                <button
                  className="blue-linear text-black w-full rounded-full p-2 mt-4"
                  onClick={() => setOpenPopup(true)}
                >
                  Withdraw
                </button>
              </div>
            </>
          )}
        </div>

        <div className="bg-navs  px-2 pb-5 rounded-b-md">
          <ul className="border sky-border px-3 py-2 rounded-md">
            <li className=" flex">
              <FaSquare className="rotate-45 text-[7px] color-blue mr-2 mt-[2px]" />
              <p className="fs-sm gray-100  leading-[18px]">
                Need to bet{" "}
                <span className="color-red-200">
                  ₹{Number(userInfo?.recharge).toFixed(2) || 0}
                </span>{" "}
                to be able to withdraw
              </p>
            </li>
            <li className=" flex mt-2">
              <span>
                <FaSquare className="rotate-45 text-[7px] color-blue mr-2 mt-[2px]" />
              </span>
              <p className="fs-sm gray-100 leading-[18px] ">
                With time <span className="color-red-200">00:00-23:59</span>{" "}
              </p>
            </li>
            <li className=" flex mt-2">
              <span>
                <FaSquare className="rotate-45 text-[7px] color-blue mr-2 mt-[2px]" />
              </span>
              <p className="fs-sm gray-100 leading-[18px]">
                Inday Remaining Withdrawal Times{" "}
                <span className="color-red-200">3</span>{" "}
              </p>
            </li>
            <li className=" flex mt-2">
              <span>
                <FaSquare className="rotate-45 text-[7px]  color-blue mr-2 mt-[2px]" />
              </span>
              <p className="fs-sm gray-100 leading-[18px] ">
                Withdrawal amount range{" "}
                <span className="color-red-200">₹300.00-₹150,000.00</span>{" "}
              </p>
            </li>
            <li className="flex mt-2">
              <span>
                <FaSquare className="rotate-45 text-[7px]  color-blue mr-2 mt-[2px]" />
              </span>
              <p className="fs-sm gray-100 leading-[18px] ">
                {" "}
                Please confirm your beneficial account information before
                withdrawing. If your information is incorrect, our company will
                not be liable for the amount of loss
              </p>
            </li>
            <li className=" flex mt-2">
              <span>
                <FaSquare className="rotate-45 text-[7px]  color-blue mr-2 mt-[2px]" />
              </span>
              <p className="fs-sm gray-100 leading-[18px] ">
                {" "}
                If your beneficial information is incorrect, please contact
                customer service
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className={openPopup ? "overlay-section block" : "hidden"}></div>
      <div className={showPopup ? "overlay-section block" : "hidden"}></div>

      <div
        className={`bg-popup  items-center transition ease-in-out delay-150 justify-center z-10 fixed bottom-0 rounded-t-md filter-section w-[25rem] ${
          openPopup ? "flex" : "hidden"
        }`}
      >
        <div className=" rounded-t-lg  overflow-hidden w-full ">
          <div className="container-section mb-5 mt-4 px-2">
            <h3 className="heading-h3 flex items-center font-sans ms-1 gray-5">
              <BsShieldFillCheck className="color-blue-500 text-xl mr-2" />{" "}
              Security verification
            </h3>

            <div className="mt-4">
              <div className="flex items-center">
                <span>
                  <TbLockFilled className="color-blue-500 text-2xl" />
                </span>
                <label htmlFor="" className="font-sans ms-1 gray-50 mb-2">
                  Password
                </label>
              </div>
              <div className="mt-3 flex justify-between relative mb-3">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="w-full  bg-navs border border-slate-900 rounded-lg p-2 py-3 focus:border-slate-700 ps-6 flex items-center focus:border focus:outline-none  placeholder:text-sm placeholder:text-slate-500"
                  placeholder=" Password"
                />
                <span
                  onClick={toggleShowPassword}
                  className="absolute right-4 text-lg top-4 gray-50 cursor-pointer"
                >
                  {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                </span>
              </div>
            </div>

            <p className="text-sm color-red-200 py-2">
              Please secure your balance, please enter your password{" "}
            </p>
            <Link to={userInfo?.telegram} className="gray-50 text-sm">
              Customer care service
            </Link>
          </div>

          <div className="flex justify-between items-center">
            <button
              className="bg-color-l w-[40%] p-2"
              onClick={() => setOpenPopup(false)}
            >
              Return
            </button>
            <button
              className={` w-[60%] p-2 
             bgs-blue-500 text-white
              `}
              disabled={loader ? true : false}
              onClick={withdrawSubmit}
            >
              Confirm Withdrawal
            </button>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-6 px-10 rounded-lg text-center">
            <BsCheckCircleFill className="mx-auto color-blue-500" size={80} />
            <h2 className="text-white font-semibold text-xl mt-4">
              Withdrawal request successful
            </h2>
            <p className="text-sm gray-50 pt-2">
              We will complete the withdrawal with 2 hours
            </p>
            <p className="text-sm gray-50">Please wait petiently...</p>
            <div className="mt-6 gap-3 flex flex-col">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 bg-[#4572cd] font-medium text-white rounded-full"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={`place-bet-popup ${betAlert ? "active" : ""}`}>
        <div className="text-sm">{successMessage} </div>
      </div>
      <CopyCopmponent copyPopup={copyPopup} message="Refesh successfully" />
    </>
  );
};

export default Withdraw;
