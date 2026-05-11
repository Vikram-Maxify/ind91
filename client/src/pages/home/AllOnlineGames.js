import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";
import { MdSportsBasketball, MdSportsSoccer } from "react-icons/md";
import { PiApplePodcastsLogo, PiTelevisionSimpleFill } from "react-icons/pi";
import { BiHeartCircle } from "react-icons/bi";
import {
  GiArrowsShield,
  GiBarbedNails,
  GiCherish,
  GiCircularSaw,
  GiFishingLure,
  GiStarSwirl,
} from "react-icons/gi";
import { Casino, Crash, Fishing, Jilli, Rummy, Slots } from "./AllGameImg";
import { jilliGame } from "../../store/reducer/gameReducer";
import { useDispatch, useSelector } from "react-redux";
import { rechargeList, rechargeList2 } from "../../store/reducer/authReducer";
import {
  gameListByGameType,
  gameListByProviderAndGametype,
  launchGame,
} from "../../store/reducer/spribeGameReducer";

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  overflow: scroll;
  margin: 0 auto;
  position: relative;
  height: 60px;
`;

const Picker = styled.div`
  display: flex;
  align-items: center;
  transform: translateX(${(props) => props.translateX}px);
  transition: transform 0.3s ease-out;
  z-index: 2;
  position: absolute;
  overflow: hidden;
`;

const Item = styled.div`
  height: 49.67px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${(props) => (props.active ? "#fff" : "#8f959d")};
  transition: color 0.3s;
  cursor: pointer;
  font-weight: 400;
  width: 100px; /* Assuming each item has a width of 100px */
  margin: 10px;
  background: ${(props) =>
    props.active
      ? "var(--main_gradient-color)"
      : "#0d2b66"};
  padding-top: 15px;
  padding-bottom: 20px;
  padding-left: 3px;
  text-align: center;
`;

const Span = styled.span`
  font-size: 18px;
`;

const AllOnlineGames = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [activeIndex, setActiveIndex] = useState(0);
  const pickerRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const [openAll, setOpenAll] = useState(false);
  const [jilliPopup, setJilliPopup] = useState(false);
  const [gameId, setGameId] = useState();
  const [repopup, setRepoup] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("game");
  const { loader } = useSelector((state) => state.spribeGame);

  const [tab, setTabs] = useState("Slot Game");
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(20);
  const [gameList, setGameList] = useState([]);
  const [gameType, setGameType] = useState("Slot Game");

  //   8273142996

  const items = [
    { name: "Slot Game", icon: <MdSportsBasketball className="svg-white" /> },
    { name: "Fish Game", icon: <GiStarSwirl className="svg-white" /> },
    {
      name: "Table Game",
      icon: <GiFishingLure className="svg-white" />,
    },
    { name: "Crash Game", icon: <BiHeartCircle className="svg-white" /> },
    {
      name: "India Poker Game",
      icon: <PiApplePodcastsLogo className="svg-white pt-2 text-2xl" />,
    },
  ];

  useEffect(() => {
    dispatch(
      gameListByProviderAndGametype({
        provider: "jili",
        game_type: gameType,
        page,
        size,
      })
    ).then((res) => {
      if (res?.payload?.data?.data) {
        setGameList(res.payload.data.data);
      }
    });
  }, [dispatch, gameType, page, size]);

  const handleClick = (index) => {
    setActiveIndex(index);
    setTabs(items[index].name);
    setGameType(items[index].name);
  };
  useEffect(() => {}, [activeIndex]);

  useEffect(() => {
    setTabs(name);
    const index = items.findIndex((item) => item.name === name);
    setActiveIndex(index);

    // if (pickerRef.current) {
    //   const itemWidth = pickerRef.current.children[0].clientWidth;

    //   const newTranslateX = -(activeIndex * itemWidth);
    //   setTranslateX(newTranslateX)
    // }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleJilliOpen = (data) => {
    setGameId(data);
    dispatch(rechargeList2()).then((res) => {
      if (res.payload.data2?.length == 0) {
        setRepoup(true);
      } else {
        setJilliPopup(true);
      }
    });
  };

  const handleJilliSubmit = () => {
    if (!userInfo) {
      navigate("/login");
      return;
    }
    if (userInfo?.isdemo === 0) {
      const playerid = userInfo?.phone_user;
      dispatch(launchGame({ playerid, gameId })).then((res) => {
        if (res?.payload?.status) {
          window.location.href = res.payload.data.launch_view_url;
          setJilliPopup(false);
        }
      });
    }
  };

  const handleCloseRecharge = () => {
    navigate("/wallet/Recharge");
    setRepoup(false);
  };

  return (
    <>
      <div className={repopup ? "overlay-section block z-50" : "hidden"}></div>

      {repopup && (
        <div className="fixed top-0 z-10 bottom-0 h-32 m-auto flex flex-col justify-center items-center left-0 right-0 w-[20rem] nav-bg rounded-lg">
          <h3 className="heading-h3 gray-50 mt-5">Tips</h3>
          <p className="text-sm gray-100 mt-2">
            First need to recharge for this game
          </p>

          <div className="w-full mt-5">
            <button
              className="bgs-blue-500 p-2 w-[50%]  rounded-bl-lg "
              onClick={() => setRepoup(false)}
            >
              Cancel
            </button>
            <button
              className="bg-blue p-2 rounded-br-lg  w-[50%] text-black"
              onClick={handleCloseRecharge}
            >
              Confirm
            </button>
          </div>
        </div>
      )}

      <div className="nav-bg p-1 py-3 sticky top-0 z-10">
        <div className="container-section flex items-center">
          <button className="absolute">
            <Link to={"/"}>
              <IoIosArrowBack className="text-xl text-pink-500" />
            </Link>
          </button>
          <h1 className="heading-h1 gray-50 text-center flex justify-center items-center m-auto">
            Game
          </h1>
        </div>
      </div>

      <Container className="scroll-none">
        <Picker className="">
          {items.map((item, index) => (
            <Item
              className="text-sm nav-bg rounded-md"
              key={index}
              active={index === activeIndex}
              onClick={() => handleClick(index)}
            >
              <Span>{item.icon}</Span>
              <p className="flex ">{item.name}</p>
            </Item>
          ))}
        </Picker>
        <div className="picker-bottom-highlight"></div>
      </Container>

      <div className="container-section">
        {/* jilli game */}
        {tab === "Slot Game" && (
          <div className="grid grid-cols-12 gap-3 mt-3">
            {gameList &&
              gameList?.map((item, index) => (
                <div className="col-span-4" key={index}>
                  <img
                    src={item.icon}
                    alt={`Image ${index + 1}`}
                    className="w-full h-[150px] cursor-pointer rounded-lg"
                    loading="lazy"
                    onClick={() => handleJilliOpen(item.game_uid)}
                  />
                </div>
              ))}
          </div>
        )}

        {/* Crash game */}
        {tab === "Fish Game" && (
          <div className="grid grid-cols-12 gap-3 mt-3">
            {gameList &&
              gameList?.map((item, index) => (
                <div className="col-span-4" key={index}>
                  <img
                    src={item.icon}
                    alt={`Image ${index + 1}`}
                    className="w-full h-[150px] cursor-pointer rounded-lg"
                    loading="lazy"
                    onClick={() => handleJilliOpen(item.game_uid)}
                  />
                </div>
              ))}
          </div>
        )}

        {/* MG_Fish game */}
        {tab === "Table Game" && (
          <div className="grid grid-cols-12 gap-3 mt-3">
            {gameList &&
              gameList?.map((item, index) => (
                <div className="col-span-4" key={index}>
                  <img
                    src={item.icon}
                    alt={`Image ${index + 1}`}
                    className="w-full h-[150px] cursor-pointer rounded-lg"
                    loading="lazy"
                    onClick={() => handleJilliOpen(item.game_uid)}
                  />
                </div>
              ))}
          </div>
        )}
        {/* Rummy game */}
        {tab === "Crash Game" && (
          <div className="grid grid-cols-12 gap-3 mt-3">
            {gameList &&
              gameList?.map((item, index) => (
                <div className="col-span-4" key={index}>
                  <img
                    src={item.icon}
                    alt={`Image ${index + 1}`}
                    className="w-full h-[150px] cursor-pointer rounded-lg"
                    loading="lazy"
                    onClick={() => handleJilliOpen(item.game_uid)}
                  />
                </div>
              ))}
          </div>
        )}
        {/* Slots game */}
        {tab === "India Poker Game" && (
          <div className="grid grid-cols-12 gap-3 mt-3">
            {gameList &&
              gameList?.map((item, index) => (
                <div className="col-span-4" key={index}>
                  <img
                    src={item.icon}
                    alt={`Image ${index + 1}`}
                    className="w-full h-[150px] cursor-pointer rounded-lg"
                    loading="lazy"
                    onClick={() => handleJilliOpen(item.game_uid)}
                  />
                </div>
              ))}
          </div>
        )}
      </div>

      <div
        className={jilliPopup ? "overlay-section block z-[60]" : "hidden"}
      ></div>

      {jilliPopup && (
        <div className="fixed top-0 z-[70] bottom-0 h-32 m-auto flex flex-col justify-center items-center left-0 right-0 w-[20rem] nav-bg rounded-lg">
          <h3 className="heading-h3 gray-50 mt-5">Tips</h3>
          <p className="text-sm gray-100 mt-2">
            Are you sure you want to join the game?
          </p>

          <div className="w-full mt-5">
            <button
              className="bgs-blue-500 p-2 w-[50%]  rounded-bl-lg "
              onClick={() => setJilliPopup(false)}
            >
              Cancel
            </button>
            <button
              disabled={loader}
              className="bg-[#A08FFF] p-2 rounded-br-lg  w-[50%] text-black"
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

export default AllOnlineGames;
