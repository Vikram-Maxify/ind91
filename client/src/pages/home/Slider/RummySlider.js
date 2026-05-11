import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { rechargeList2 } from "../../../store/reducer/authReducer";
import icon from "../../../assets/rummyicon.svg";
import {
  gameListByGameType,
  launchGame,
} from "../../../store/reducer/spribeGameReducer";

const RummySlider = () => {
  const { userInfo, rechargelistData } = useSelector((state) => state.auth);
  const [gameId, setGameId] = useState();
  const { loader } = useSelector((state) => state.spribeGame);
  const [jilliPopup, setJilliPopup] = useState(false);
  const [betAlert, setBetAlert] = useState(false);
  const [repopup, setRepoup] = useState(false);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(20);
  const [game_type, setGame_type] = useState("India Poker Game");
  const [gameData, setGameData] = useState([]);

  const navigate = useNavigate();
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
        let playerid = userInfo?.phone_user;
        dispatch(launchGame({ playerid, gameId })).then((res) => {
          if (res.payload.status) {
            window.open(res.payload.data.launch_view_url, "_blank");
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

  useEffect(() => {
    dispatch(gameListByGameType({ game_type, page, size })).then((res) => {
      setGameData(res.payload.data.data);
    });
  }, [dispatch]);
  return (
    <div className="w-full py-2">
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
              className="bg-blue p-2 rounded-br-lg text-black w-[50%]"
              onClick={handleCloseRecharge}
            >
              Confirm
            </button>
          </div>
        </div>
      )}

      {/* <div className="flex justify-between items-center my-2">
        <h2 className="text-base text-[#00ecbe] font-semibold flex item-center gap-1">
          <span>
            <img src={icon} className="size-6" alt="icon" />
          </span>
          Rummy
        </h2>
        <div className="flex items-center gap-2">
          <Link
            to="home/AllOnlineGames?game=Jilli"
            className="text-[12px] text-black blue-linear px-1.5 py-1.5 rounded-md transition-colors"
          >
            Detail
          </Link>
          <button className="popular-prev6 rounded-md blue-linear text-black p-1.5 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="popular-next6 rounded-md blue-linear p-1.5 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div> */}

      <Swiper
        spaceBetween={8}
        slidesPerView={3}
        slidesPerGroup={3}
        // loop={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        navigation={{
          nextEl: ".popular-next6",
          prevEl: ".popular-prev6",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {gameData &&
          gameData?.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="rounded-lg overflow-hidden flex flex-col items-center shadow-md"
                onClick={() => handleJilliOpen(item.game_uid)}
              >
                <img
                  src={item.icon}
                  alt="game"
                  className="h-[19vh]"
                  style={{ objectFit: "fill" }}
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

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
              disabled={loader}
              className="bg-blue p-2 rounded-br-lg text-black w-[50%]"
              onClick={handleJilliSubmit}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RummySlider;
