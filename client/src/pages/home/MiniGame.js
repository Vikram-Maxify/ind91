import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { rechargeList2 } from "../../store/reducer/authReducer";
import {
  gameListByGameType,
  launchGame,
} from "../../store/reducer/spribeGameReducer";

const MiniGame = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [gameId, setGameId] = useState();
  const { loader } = useSelector((state) => state.spribeGame);
  const [jilliPopup, setJilliPopup] = useState(false);
  const [betAlert, setBetAlert] = useState(false);
  const [repopup, setRepoup] = useState(false);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(20);
  const [game_type, setGame_type] = useState("Crash Game");
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
      if (res.payload?.data2?.length === 0) {
        setRepoup(true);
      } else {
        setJilliPopup(true);
      }
    });
  };

  const handleJilliSubmit = () => {
    if (!userInfo) {
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
    <div>
      <div className="mySwiper grid grid-cols-12 gap-2">
        {gameData.map((item, index) => (
          <div key={index} className="col-span-4">
            <div
              className="rounded-lg overflow-hidden flex flex-col items-center shadow-md"
              onClick={() => handleJilliOpen(item.game_uid)}
            >
              <img
                src={item.icon}
                alt="game"
                className="h-[20vh] w-full"
                style={{ objectFit: "fill" }}
              />
            </div>
          </div>
        ))}
      </div>

      <div
        className={jilliPopup ? "overlay-section block z-[3]" : "hidden"}
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
              className="bg-blue p-2 rounded-br-lg text-white w-[50%]"
              onClick={handleJilliSubmit}
            >
              Confirm
            </button>
          </div>
        </div>
      )}

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
              className="bg-blue p-2 rounded-br-lg text-white w-[50%]"
              onClick={handleCloseRecharge}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MiniGame;
