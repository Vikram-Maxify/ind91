import React, { useEffect, useState } from "react";
import "./promotion.css";
import Layout from "../../layout/Layout";
import { MdFilterListAlt } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { FaBook, FaUsers } from "react-icons/fa";
import { HiMiniCurrencyDollar, HiUsers } from "react-icons/hi2";
import {
  MdOutlineArrowForwardIos,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import { PiCopySimpleLight } from "react-icons/pi";
import CopyCodeImg from "../../assets/copyinvitationcode.png";
import SubordinateImg from "../../assets/subordinatedata.png";
import CommissionDetailImg from "../../assets/commisiondetail.png";
import InvitationRuleImg from "../../assets/invitationrule.png";
import CustomerServiceImg from "../../assets/customerserviceIcon.png";
import RebaterationImg from "../../assets/rebateratio.png";
import promotindataImg from "../../assets/promotiondeal.png";
import CopyCopmponent from "../../components/CopyCopmponent";
import { useDispatch, useSelector } from "react-redux";
import { promotions, totalCommission } from "../../store/reducer/authReducer";
import Loader from "../../components/Loader";
import { IoShareSocialOutline } from "react-icons/io5";
import { FiCopy } from "react-icons/fi";
const PartnerReward = "https://i.ibb.co/x8HRG7tZ/icons.png";
const Promotion = () => {
  const { promotionsData, totalCommissionData, userInfo } = useSelector(
    (state) => state.auth,
  );
  console.log("promotionsData", promotionsData);
  const [copyPopup, setCopyPopup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUrl = window.location.origin;
  const invitationLink = `${currentUrl}/#/register?r_code=${userInfo?.code}`;
  console.log("object", promotionsData);
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(invitationLink)
      .then(() => {
        setCopyPopup(true);
        setTimeout(() => {
          setCopyPopup(false);
        }, 1500);
      })
      .catch((err) => {
        console.error("Failed to copy the text: ", err);
      });
  };

  const copyToClipCode = () => {
    navigator.clipboard
      .writeText(userInfo?.code)
      .then(() => {
        setCopyPopup(true);
        setTimeout(() => {
          setCopyPopup(false);
        }, 1500);
      })
      .catch((err) => {
        console.error("Failed to copy the text: ", err);
      });
  };

  useEffect(() => {
    dispatch(promotions());
    dispatch(totalCommission());
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dispatch]);

  return (
    <Layout>
      {/* this is promotion page design by maxify web solution and developed by Engineer Jitendra kumar */}
      <div className="nav-bg p-1 py-3 sticky top-0 z-30">
        <div className="container-section flex  items-center">
          {/* <button><Link to={"/activity"}>  <IoIosArrowBack className='text-xl' /></Link></button> */}
          <h3 className="heading-h3 text-white text-center flex justify-center items-center m-auto">
            Agency
          </h3>
          <Link to="/promotion/Subordinate">
            <svg
                  className="svg-icon icon-subordinate size-7 text-[#A08FFF] bright"
                >
                  <use href="#icon-subordinate"></use>
                </svg>
          </Link>
        </div>
      </div>

      {!userInfo && <Loader />}

      <div className="promotion-banner">
        <div className="flex flex-col justify-center items-center">
          <h3 className="heading-h3 text-2xl text-black py-1">
            {Number(totalCommissionData?.yesterdayBalance || 0).toFixed(2)}
          </h3>
          <p className="text-sm nav-bg color-blue rounded-full px-3  pb-[2px] flex items-center  justify-center text-center">
            Yesterday's total commission
          </p>
          <p className="text-xs font-medium text-black py-1">
            Upgrade the level to increase commission income
          </p>

          <div className="promotion-member mt-2 flex items-center nav-bg w-[100%] rounded-lg relative z-10">
            <div className="w-[50%]">
              <div className="subordinate_bg flex items-center p-1 rounded-tl-lg py-2">
                <svg data-v-7d799898="" class="svg-icon size-7 icon-directSubordinates">
                <use href="#icon-directSubordinates"></use>
              </svg>
                <p className="text-sm ms-2 font-normal text-white">
                  Direct subordinates
                </p>
              </div>

              <div className="flex  items-center justify-center flex-col text-center py-1">
                <div className="w-full">
                  <h5 className="heading-h5 text-base">
                    {promotionsData?.level1_count
                      ? promotionsData?.level1_count
                      : "0"}
                  </h5>
                  <p className="text-white fs-sm">Number of register</p>
                </div>
                <div className="w-full">
                  <h5 className="heading-h5 text-green-600 text-base">
                    {promotionsData?.totalDepositCount
                      ? promotionsData?.totalDepositCount
                      : "0"}
                  </h5>
                  <p className="text-white fs-sm">Deposit number</p>
                </div>
                <div className="w-full">
                  <h5 className="heading-h5 color-yellow-200 text-base">
                    {promotionsData?.totalDepositAmount
                      ? promotionsData?.totalDepositAmount
                      : "0"}
                  </h5>
                  <p className="text-white fs-sm">Deposit amount</p>
                </div>
                <div className="w-full">
                  <h5 className="heading-h5 text-base">
                    {promotionsData?.firstDepositCount
                      ? promotionsData?.firstDepositCount
                      : "0"}
                  </h5>
                  <p className="text-white fs-sm">
                    Number of people making first deposit
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[50%] border-l border-[#0d2b66]">
              <div className="subordinate_bg flex items-center p-1 rounded-tr-lg py-2">
                <svg data-v-7d799898="" class="svg-icon size-7 icon-teamSubordinates">
                <use href="#icon-teamSubordinates"></use>
              </svg>
                <p className="text-sm ms-2 font-normal text-white">
                  Team subordinates
                </p>
              </div>
              <div className="flex  items-center justify-center flex-col text-center py-1">
                <div className="w-full">
                  <h5 className="heading-h5 text-base">
                    {promotionsData?.level2_to_level6count
                      ? promotionsData?.level2_to_level6count
                      : "0"}
                  </h5>
                  <p className="text-white fs-sm">number of register</p>
                </div>
                <div className="w-full">
                  <h5 className="heading-h5 text-green-600 text-base">
                    {promotionsData?.level2_to_level6totalDepositCount
                      ? promotionsData?.level2_to_level6totalDepositCount
                      : "0"}
                  </h5>
                  <p className="text-white fs-sm">Deposit number</p>
                </div>
                <div className="w-full">
                  <h5 className="heading-h5 color-yellow-200 text-base">
                    {promotionsData?.level2_to_level6totalDepositAmount
                      ? promotionsData?.level2_to_level6totalDepositAmount
                      : "0"}
                  </h5>
                  <p className="text-white fs-sm">Deposit amount</p>
                </div>
                <div className="w-full">
                  <h5 className="heading-h5 text-base">
                    {promotionsData?.level2_to_level6firstDepositCount
                      ? promotionsData?.level2_to_level6firstDepositCount
                      : "0"}
                  </h5>
                  <p className="text-white fs-sm">
                    Number of people making first deposit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-section">
        <button
          className="blue-linear px-20 text-lg font-semibold w-full my-2 rounded-full flex items-center justify-center relative overflow-hidden uppercase text-[#05012B] py-2"
          onClick={copyToClipboard}
        >
          Invitation Link
          {/* <span className="uppercase text-[#05012B]">Invitation Link</span> */}
          {/* <span className="absolute right-0 bg-[#dd472a] py-4 px-2">
            <IoShareSocialOutline className="text-2xl " />
          </span> */}
        </button>

        <ul className="mt-3 ">
          <li className="mt-2 nav-bg p-3 py-4 rounded-lg">
            <Link
              className="flex justify-between items-center "
              to={"/promotion/PartnerReward"}
            >
              <div className="flex items-center">
                <svg
                  className="svg-icon icon-team_partner size-7 text-[#A08FFF] bright"
                >
                  <use href="#icon-team_partner"></use>
                </svg>
                <span className="text-sm font-semibold text-white ms-2 font-sans">
                  Partner rewards
                </span>
              </div>
              <div className="flex items-center">
                <MdOutlineArrowForwardIos className="text-xl text-white" />
              </div>
            </Link>
          </li>
          <li className="mt-2 nav-bg p-3 py-4 rounded-lg">
            <Link className="flex justify-between items-center  ">
              <div className="flex items-center">
                <svg
                  className="svg-icon icon-copy_Code size-7 text-[#A08FFF] bright"
                >
                  <use href="#icon-copy_Code"></use>
                </svg>

                <span className="text-sm font-semibold text-white ms-2 font-sans">
                  Copy invitation code
                </span>
              </div>
              <div className="flex items-center" onClick={copyToClipCode}>
                <span className="text-sm gray-100 mr-2">{userInfo?.code}</span>
                <PiCopySimpleLight className="gray-100" />
              </div>
            </Link>
          </li>
          <li className="mt-2 nav-bg p-3 py-4 rounded-lg">
            <Link
              className="flex justify-between items-center "
              to={"/promotion/TeamReport"}
            >
              <div className="flex items-center ">
                <svg
                  className="svg-icon icon-team_port size-7 text-[#A08FFF] bright"
                >
                  <use href="#icon-team_port"></use>
                </svg>

                <span className="text-sm font-semibold text-white ms-2 font-sans">
                  Subordinate data
                </span>
              </div>
              <div className="flex items-center ">
                <MdOutlineArrowForwardIos className="text-xl text-white" />
              </div>
            </Link>
          </li>
          <li className="mt-2 nav-bg p-3 py-4 rounded-lg">
            <Link
              className="flex justify-between items-center"
              to={"/promotion/MyCommission"}
            >
              <div className="flex items-center ">
                <svg
                  className="svg-icon icon-commission size-7 text-[#A08FFF] bright"
                >
                  <use href="#icon-commission"></use>
                </svg>

                <span className="text-sm font-semibold text-white ms-2 font-sans">
                  Commission detail
                </span>
              </div>
              <div className="flex items-center ">
                <MdOutlineArrowForwardIos className="text-xl text-white" />
              </div>
            </Link>
          </li>
          <li className="mt-2 nav-bg p-3 py-4 rounded-lg">
            <Link
              className="flex justify-between items-center  "
              to={"/promotion/PromotionRule"}
            >
              <div className="flex items-center ">
                <svg
                  className="svg-icon icon-invite_reg size-7 text-[#A08FFF] bright"
                >
                  <use href="#icon-invite_reg"></use>
                </svg>

                <span className="text-sm font-semibold text-white ms-2 font-sans">
                  Invitation rules
                </span>
              </div>
              <div className="flex items-center ">
                <MdOutlineArrowForwardIos className="text-xl text-white" />
              </div>
            </Link>
          </li>
          <li className="mt-2 nav-bg p-3 py-4 rounded-lg">
            <Link
              className="flex justify-between items-center  "
            // to={"http://h5workordersupport.trueprofit.biz/"}
            >
              <div className="flex items-center ">
                <svg
                  className="svg-icon icon-server size-7 text-[#A08FFF] bright"
                >
                  <use href="#icon-server"></use>
                </svg>

                <span className="text-sm font-semibold text-white ms-2 font-sans">
                  Agent line customer service
                </span>
              </div>
              <div className="flex items-center ">
                <MdOutlineArrowForwardIos className="text-xl text-white" />
              </div>
            </Link>
          </li>
          <li className="mt-2 nav-bg p-3 py-4 rounded-lg">
            <Link
              className="flex justify-between items-center  "
              to={"/promotion/RebateRatio"}
            >
              <div className="flex items-center ">
                <svg
                  className="svg-icon icon-rebateRatio size-7 text-[#A08FFF] bright"
                >
                  <use href="#icon-rebateRatio"></use>
                </svg>

                <span className="text-sm font-semibold text-white ms-2 font-sans">
                  Rebate ratio
                </span>
              </div>
              <div className="flex items-center ">
                <MdOutlineArrowForwardIos className="text-xl text-white" />
              </div>
            </Link>
          </li>
        </ul>

        <div className="mt-2 nav-bg p-2 rounded-lg">
          <div className="flex items-center ">
            <svg
                  className="svg-icon icon-promotionData size-7 text-[#A08FFF] bright"
                >
                  <use href="#icon-promotionData"></use>
                </svg>

            <h5 className="heading-h5 text-white text-base gray-50 font-sans">
              promotion data
            </h5>
          </div>

          <div className="flex justify-between mt-2">
            <div className="text-center w-[50%]">
              <h5 className="heading-h5 text-white text-base gray-50">
                {Number(totalCommissionData?.weekBalance)?.toFixed(2)}
              </h5>
              <p className="fs-sm gray-100">This Week</p>
            </div>
            <div className="text-center  w-[50%] border-l border-[#022C68]">
              <h5 className="heading-h5 text-white text-base gray-50">
                {Number(totalCommissionData?.totalBalance)?.toFixed(2)}
              </h5>
              <p className="fs-sm gray-100">Total commission</p>
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <div className="text-center w-[50%]">
              <h5 className="heading-h5 text-white text-base gray-50">
                {promotionsData?.invite?.f1}
              </h5>
              <p className="fs-sm gray-100">direct subordinate</p>
            </div>
            <div className="text-center  w-[50%] border-l border-[#022C68] px-4">
              <h5 className="heading-h5 text-white text-base gray-50">
                {promotionsData?.total_downline_count}
              </h5>
              <p className="fs-sm gray-100">
                Total number of subordinate in the team
              </p>
            </div>
          </div>
        </div>
      </div>
      <CopyCopmponent copyPopup={copyPopup} message="Copy successful" />
    </Layout>
  );
};

export default Promotion;
