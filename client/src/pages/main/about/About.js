import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import AboutBg from "../../../assets/aboutBg.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import CAIcon from "../../../assets/copyinvitationcode.png";
import RCDIcon from "../../../assets/invitationrule.png";
const About = () => {
  return (
    <>
      <div className="bg-bluest p-1 py-3 sticky top-0">
        <div className="container-section flex  items-center relative">
          <button className="absolute">
            <Link to={"/main"}>
              {" "}
              <IoIosArrowBack className="text-xl text-white" />
            </Link>
          </button>
          <h1 className="heading-h1 text-white text-lg text-center flex justify-center items-center m-auto">
            About us
          </h1>
        </div>
      </div>

      <div>
        <img src={AboutBg} alt="" />
      </div>

      <div className="container-section">
        <Link
          to={"/main/About/AboutDetail"}
          className="flex justify-between items-center mt-2 body-color p-3 py-4 rounded-lg "
        >
          <div className="flex items-center">
            <svg
                data-v-159bf81f=""
                class="svg-icon icon-privacyIcon size-7 text-[#A08FFF] bright"
              >
                <use href=" #icon-privacyIcon"></use>
              </svg>
            <span className="text-base text-white ms-2 font-sans ">
              Connfidentiality Agreement
            </span>
          </div>
          <div className="flex items-center">
            <MdOutlineArrowForwardIos className="text-lg text-white" />
          </div>
        </Link>
        
        <div className="w-full h-[1px] bg-[#262441]">

        </div>
        <Link
          to={"/main/About/RiskDisclosure"}
          className="flex justify-between items-center mt-2 body-color p-3 py-4 rounded-lg "
        >
          <div className="flex items-center">
            <svg
                data-v-159bf81f=""
                class="svg-icon icon-riskProtocal size-7 text-[#A08FFF] bright"
              >
                <use href=" #icon-riskProtocal"></use>
              </svg>
            <span className="text-base text-white ms-2 font-sans ">
              Risk Disclosure Agreement
            </span>
          </div>
          <div className="flex items-center">
            <MdOutlineArrowForwardIos className="text-lg text-white" />
          </div>
        </Link>
        <div className="w-full h-[1px] bg-[#262441]"></div>
      </div>
    </>
  );
};

export default About;
