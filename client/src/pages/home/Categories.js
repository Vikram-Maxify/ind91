import React, { useEffect, useRef, useState } from "react";
import Wingos from "../../assets/jaiclub/wingo.png";
import Trxs from "../../assets/trx.png";
import K3s from "../../assets/jaiclub/k3.png";
import Fiveds from "../../assets/jaiclub/5d.png";
import Trx from "../../assets/jaiclub/trx.png";
import Dragon from "../../assets/dragon.png";
import viewImg from "../../assets/tiranga/view.png";
import lobby from "../../assets/download.png";
import flash from "../../assets/jaiclub/categoryIMG/rocket.png";
import slot from "../../assets/jaiclub/categoryIMG/slotsimg.png";
import popular from "../../assets/jaiclub/categoryIMG/pvc.png";
import casinos from "../../assets/jaiclub/categoryIMG/pokerimg.png";
import video from "../../assets/download (1).png";
import sprots from "../../assets/jaiclub/categoryIMG/sports.png";
import fish from "../../assets/jaiclub/categoryIMG/fishing.png";
import pvc from "../../assets/jaiclub/categoryIMG/popular.png";
import MotoRAcing from "../../assets/jaiclub/categoryIMG/wingo-moto.png";
import lottery from "../../assets/jaiclub/categoryIMG/casino.png";
import icon from "../../assets/ball_8-075598b0.svg";

import { Link, useNavigate } from "react-router-dom";
import Popular from "./Popular";
import PopularSlider from "./Slider/PopularSlider";
import SlotSlider from "./Slider/SlotSlider";
import RecommendSlider from "./Slider/RecommendSlider";
import Sports from "./Slider/Sports";
import Casino from "./Slider/Casino";
// import Video from "./Slider/Video";
import Recommended from "./Recommended";
import FishSlider from "./Slider/FishSlider";
import Flash from "./Slider/Flash";
import { useDispatch, useSelector } from "react-redux";
import { jilliGame } from "../../store/reducer/gameReducer";
import { rechargeList2 } from "../../store/reducer/authReducer";
import RummySlider from "./Slider/RummySlider";
import Jackpot from "./Slider/Jackpot";

import Spribe from "./Slider/Spribe";
import MiniGame from "./MiniGame";
import SlotsGame from "./SlotsGame";
// import { Casino } from "./AllGameImg";
import FishingGame from "./FishingGame";
import bannerMain from "../../assets/jaiclub/titleBgLeft.png";
import bannerarrow from "../../assets/jaiclub/banner-bg-right.svg";
import { MdKeyboardArrowRight } from "react-icons/md";

const menuItems = [
  { id: 1, label: "Lottery", icon:lottery },
  { id: 2, label: "Popular ", icon:  pvc  },
  { id: 3, label: "Mini game", icon: flash },
  { id: 4, label: "Slot", icon: slot },
  { id: 5, label: "PVC", icon: popular },
  { id: 6, label: "Casino", icon: casinos },
  { id: 7, label: "Sports", icon: sprots },
  { id: 8, label: "Fish", icon: fish },
  
];

const Categories = () => {
  const [activeTab, setActiveTab] = useState(1);
  const navigate = useNavigate();

  const { userInfo, rechargelistData } = useSelector((state) => state.auth);
  const activeItem = menuItems.find(item => item.id === activeTab);
  const [gameId, setGameId] = useState();
  const [jilliPopup, setJilliPopup] = useState(false);
  const [betAlert, setBetAlert] = useState(false);
  const [open, setOpen] = useState(false);
  const [gameName, setName] = useState("");
  const contentRef = useRef(null);
  const [repopup, setRepoup] = useState(false);

  const dispatch = useDispatch();

  const handleCloseRecharge = () => {
    navigate("/wallet/Recharge");
    setRepoup(false);
  };

  const handleJilliOpen = (data) => {
    setGameId(data);
    dispatch(rechargeList2()).then((res) => {
      if (res.payload.data2?.length === 0) {
        setRepoup(true);
      } else {
        setJilliPopup(true);
      }
    });
  };

  const handleJilliSubmit = () => {
    if (userInfo === undefined || userInfo === "") {
      navigate("/login");
    } else {
      if (userInfo?.isdemo === 0) {
        dispatch(jilliGame(gameId)).then((res) => {
          if (res.payload.status) {
            window.open(res.payload.data.url, "_blank");
            setJilliPopup(false);
          }
        });
      } else {
        setBetAlert(true);
        setTimeout(() => {
          setBetAlert(false);
        }, 2000);
      }
    }
  };

  function handleOpen(data) {
    dispatch(rechargeList2()).then((res) => {
      if (res.payload.data2?.length === 0) {
        setRepoup(true);
        setName(data);
      } else {
        navigate(`/${data}`);
      }
    });
  }

  function handleGo() {
    navigate(`/wallet/Recharge`);
    setOpen(false);
  }

  useEffect(() => {
    dispatch(rechargeList2());
  }, [dispatch]);

  // useEffect(() => {
  //   if (contentRef.current) {
  //     contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // }, [activeTab]);

  return (
    <>
      <div className={repopup ? "overlay-section block z-10" : "hidden"}></div>

      {repopup && (
        <div className="fixed top-0 z-50 bottom-0 h-32 m-auto flex flex-col justify-center items-center left-0 right-0 w-[20rem] nav-bg rounded-lg">
          <h3 className="heading-h3 gray-50 mt-5">Tips</h3>
          <p className="text-sm gray-100 mt-2">
            First need to recharge for this game
          </p>

          <div className="w-full mt-5">
            <button
              className="bgs-blue-500 p-2 w-[50%] text-black rounded-bl-lg"
              onClick={() => setRepoup(false)}
            >
              Cancel
            </button>
            <button
              className="bg-blue p-2 text-white rounded-br-lg w-[50%]"
              onClick={handleCloseRecharge}
            >
              Confirm
            </button>
          </div>
        </div>
      )}

      {/* Horizontal Scrollable Menu */}
      <div className="flex overflow-x-auto gap-3 py-2 px-2 sticky top-0 z-50 body-color pt-5 -mb-5 scrollbar-hide">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex-shrink-0 ${activeTab === item.id ? "popular-btn" : "gradient-border-overlay flex items-center px-5 text-white"
              }`}
          >
            <img src={item.icon} alt="" className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      <div ref={contentRef} className="p-2 overflow-hidden w-full">
  <div className="mt-5 border border-[#32264B] rounded-lg">

    {/* 🔥 HEADER (dynamic) */}
    {/* <div className="bg-[#32264B] rounded-xl">
      <p
        className="mt-2 flex text-white items-center gap-2 text-base font-semibold px-4 bg-cover bg-center rounded-lg relative py-3 w-1/3 h-[47.8px] bg-no-repeat"
        style={{
          backgroundImage: `url(${bannerMain})`
        }}
      >
        <span>
          <img
            src={bannerarrow}
            className="absolute h-[47.8px] w-full top-[1.04px] left-[82.36px]"
            alt=""
          />
        </span>

        {activeItem?.label}
      </p>
    </div> */}
  <div className="flex items-center h-[47.8px] relative section-linear">

  {/* LEFT MAIN BG */}
  <div
    className="relative flex items-center h-full px-6 min-w-[120px]"
    style={{
      background: `url(${bannerMain}) no-repeat right center / auto 103%`
    }}
  >

    {/* INNER DARK OVERLAY */}
    <div
      className="absolute left-0 top-1/2 -translate-y-1/2 h-[26px]"
      style={{
        width: "calc(100% - 6px)", // 👈 thoda kam kiya
        backgroundColor: "#030214",
        opacity: 0.45,
        borderTopRightRadius: "26px",
        borderBottomRightRadius: "26px",
        boxShadow: "-2px 2px 2px #0b1265 inset"
      }}
    />

    {/* TEXT */}
    <span className="relative z-10 text-white font-semibold">
      {activeItem?.label}
    </span>
  </div>

  {/* RIGHT TAIL */}
  <div
    className="h-full"
    style={{
      width: "55px",
      minWidth: "55px",
      marginLeft: "-2px", // 👈 back to safe value
      background: `url(${bannerarrow}) no-repeat left center / 100% 100%`
    }}
  />

  <Link to={"/home/AllOnlineGames"} className="flex gap-1 items-center text-white font-semibold absolute right-0 top-3">
    ALL <MdKeyboardArrowRight className="font-semibold text-2xl"/>
  </Link>

</div>

    {/* 🔥 CONTENT SWITCH */}
    <div className="mt-2 relative">
      <div key={activeTab} className="tab-content-animate">
        {activeTab === 1 && (
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-4" onClick={() => handleOpen(`wingo?Game=${10}`)}>
              <img src={Wingos} className="w-full rounded-lg" />
            </div>

            <div className="col-span-4" onClick={() => handleOpen("k3")}>
              <img src={K3s} className="w-full rounded-lg" />
            </div>

            <div className="col-span-4" onClick={() => handleOpen("5d")}>
              <img src={Fiveds} className="w-full rounded-lg" />
            </div>

            <div className="col-span-4" onClick={() => handleOpen("trx")}>
              <img src={Trx} className="w-full rounded-lg" />
            </div>

            <div className="col-span-4" onClick={() => handleOpen("trx")}>
              <img src={MotoRAcing} className="w-full rounded-lg" />
            </div>
          </div>
        )}
        {activeTab === 2 && <PopularSlider />}


        {activeTab === 3 && <MiniGame />}
        {activeTab === 4 && <SlotsGame />}
        {activeTab === 5 && <RummySlider />}
        {activeTab === 6 && <Casino />}
        {activeTab === 7 && <Sports />}
        {activeTab === 8 && <FishSlider />}
        
        

      </div>
    </div>

  </div>
</div>


<div className="p-4 bg-[#1A1A2C]">
  <div className="bg-[#32264B] rounded-xl border border-[#32264B] ">

    {/* 🔥 HEADER BANNER */}
    <div className="flex items-center h-[47.8px]">

      {/* LEFT MAIN BG */}
      <div
        className="relative flex items-center h-full px-6 min-w-[140px]"
        style={{
          background: `url(${bannerMain}) no-repeat right center / auto 103%`
        }}
      >

        {/* INNER DARK OVERLAY */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[26px]"
          style={{
            width: "calc(100% - 6px)",
            backgroundColor: "#030214",
            opacity: 0.45,
            borderTopRightRadius: "26px",
            borderBottomRightRadius: "26px",
            boxShadow: "-2px 2px 2px #0b1265 inset"
          }}
        />

        {/* TEXT */}
        <span className="relative z-10 text-white font-semibold">
          Recommended
        </span>
      </div>

      {/* RIGHT TAIL */}
      <div
        className="h-full"
        style={{
          width: "55px",
          minWidth: "55px",
          marginLeft: "-2px",
          background: `url(${bannerarrow}) no-repeat left center / 100% 100%`
        }}
      />

    </div>

    {/* 🔽 CONTENT */}
    <div className="bg-[#1A1A2C] px-3">
      <RecommendSlider />
    </div>

  </div>
</div>
      <div className={open ? "overlay-section block" : "hidden"}></div>

      {open && (
        <div className="fixed top-0 z-10 bottom-0 h-32 m-auto flex flex-col justify-center items-center left-0 right-0 w-[20rem] nav-bg rounded-lg">
          <h3 className="heading-h3 gray-50 mt-5">Tips</h3>
          <p className="text-sm gray-100 mt-2 text-center">
            If You want to open this game <br />
            minimum recharge 200
          </p>

          <div className="w-full mt-5">
            <button
              className="bgs-blue-500 p-2 w-[50%] rounded-bl-lg"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button
              className="bg-blue p-2 rounded-br-lg w-[50%]"
              onClick={handleGo}
            >
              Confirm
            </button>
          </div>
        </div>
      )}

      <div className={jilliPopup ? "overlay-section block" : "hidden"}></div>

      {jilliPopup && (
        <div className="fixed top-0 z-10 bottom-0 h-32 m-auto flex flex-col justify-center items-center left-0 right-0 w-[20rem] nav-bg rounded-lg">
          <h3 className="heading-h3 gray-50 mt-5">Tips</h3>
          <p className="text-sm gray-100 mt-2">
            Are you sure you want to join the game?
          </p>

          <div className="w-full mt-5">
            <button
              className="bgs-blue-500 p-2 w-[50%] text-black rounded-bl-lg"
              onClick={() => setJilliPopup(false)}
            >
              Cancel
            </button>
            <button
              className="bg-blue p-2 rounded-br-lg text-white w-[50%]"
              onClick={handleJilliSubmit}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Categories;
