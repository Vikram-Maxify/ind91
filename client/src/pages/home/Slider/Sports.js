import React, { useState } from "react";
import icon from "../../../assets/sports_a-5313dd33.svg";

import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { rechargeList2 } from "../../../store/reducer/authReducer";
import { jilliGame } from "../../../store/reducer/gameReducer";

const item = "https://i.ibb.co/4wZ1fKtN/sport1.png";
const item2 = "https://i.ibb.co/6ccSf12H/sport2.png";
const item3 = "https://i.ibb.co/zHspRf83/sport3.png";

const Sports = () => {
  const [repopup, setRepoup] = useState(false);
  const { userInfo, rechargelistData } = useSelector((state) => state.auth);
  const [gameId, setGameId] = useState();
  const { loader } = useSelector((state) => state.spribeGame);
  const [jilliPopup, setJilliPopup] = useState(false);
  const [betAlert, setBetAlert] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCloseRecharge = () => {
    Navigate("/wallet/Recharge");
    setRepoup(false);
  };

  const handleJilliOpen = (data) => {
    setGameId(data);
    dispatch(rechargeList2()).then((res) => {
      if (res.payload?.data2?.length === 0) {
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

  return (
    <div className="py-2">
      <div className="flex justify-between items-center my-2">
        {/* <h2 className="text-base text-[#00ecbe] font-semibold flex items-center">
          <span>
            <img src={icon} className="size-6" alt="icon" />
          </span>{" "}
          Sports
        </h2>
        <div className="flex items-center gap-2">
          <Link
            to="home/AllOnlineGames?game=MG_Fish"
            className="text-[12px] text-black blue-linear px-1.5 py-1.5 rounded-md transition-colors"
          >
            Detail
          </Link>
          <button className="popular-prev rounded-md blue-linear text-black p-1.5 transition-colors">
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
          <button className="popular-next rounded-md blue-linear p-1.5 transition-colors">
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
        </div> */}
      </div>
      <div className="grid  grid-cols-9 gap-2">
        <div
          className="h-[20vh] col-span-3  rounded-lg overflow-hidden flex flex-col items-center shadow-md"
          onClick={() => handleJilliOpen(224)}
        >
          <img
            src={item}
            alt="game"
            className="h-full w-full"
            style={{ objectFit: "fill" }}
          />
        </div>
        <div
          className="h-[20vh] col-span-3  rounded-lg overflow-hidden flex flex-col items-center shadow-md"
          onClick={() => handleJilliOpen(225)}
        >
          <img
            src={item2}
            alt="game"
            className="h-full w-full"
            style={{ objectFit: "fill" }}
          />
        </div>
        <div
          className="h-[20vh] col-span-3  rounded-lg overflow-hidden flex flex-col items-center shadow-md"
          onClick={() => handleJilliOpen(230)}
        >
          <img
            src={item3}
            alt="game"
            className="h-full w-full"
            style={{ objectFit: "fill" }}
          />
        </div>
      </div>

      <div className={repopup ? "overlay-section block z-30" : "hidden"}></div>

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
      <div
        className={jilliPopup ? "overlay-section block z-[2]" : "hidden"}
      ></div>

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

export default Sports;
