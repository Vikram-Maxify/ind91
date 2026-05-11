import React,{useState,useRef, useCallback, useEffect } from 'react'
import debounce  from "lodash/debounce";

import { gameListByProvider, launchGame } from '../../../store/reducer/spribeGameReducer';

import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import { rechargeList2 } from '../../../store/reducer/authReducer';


// arrow img
const Arrowleft= "https://i.ibb.co/JjPV1sK6/button-2.png";
const Arrowright= "https://i.ibb.co/93vC5KsZ/button-1.png";


const Jackport = () => {
    const { userInfo } = useSelector((state) => state.auth);
    const { loader } = useSelector((state) => state.spribeGame);
   const dispatch = useDispatch();
   const [gameId, setGameId] = useState();
  const [gameList,setGameList]=useState([]);
 const [gameType, setGameType] = useState("CasinoLive");
  const [jilliPopup, setJilliPopup] = useState(false);
  const [betAlert, setBetAlert] = useState(false);
  const [repopup, setRepoup] = useState(false);

 const navigate = useNavigate();
 
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
 
   const handleSpribeSubmit = () => {
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
 
  
    const fetchGameList = useCallback(
    debounce(() => {
      dispatch(gameListByProvider({ provider: "jili",game_type:gameType, page:6, size:9 })).then(
        (res) => {
          if (res?.payload?.data?.data) {
            setGameList(res.payload.data.data);
          }
        }
      );
    }, 300),
    [dispatch, gameType]
  );

  useEffect(() => {
    fetchGameList();
    return () => fetchGameList.cancel();
  }, [fetchGameList]);

    const sliderRef = useRef(null); // Create a ref for the slider
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 5000,
      slidesToShow: 3, // Show 3 slides at a time
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 1000,
      pauseOnHover: true,
      arrows: false,
    };


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
              className="bg-blue p-2 rounded-br-lg text-black w-[50%]"
              onClick={handleCloseRecharge}
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
              disabled={loader}
              className="bg-blue p-2 rounded-br-lg text-black w-[50%]"
              onClick={handleSpribeSubmit}
            >
              Confirm
            </button>
          </div>
        </div>
      )}

<div className="flex items-center justify-between mb-2 flex-wrap">
        <div className="flex items-start ">
          <h2 className="border-after mt-2 text-whites font-[400] text-base">
            Super Jackpot
          </h2>
        </div>

        <div className="flex gap-2 mt-1 md:mt-0">
          <button
            onClick={() => sliderRef.current.slickPrev()} // Navigate to previous slide
          >
            <img
              src={Arrowleft}
              alt="Previous"
              className="w-auto h-4" // Adjusting the size of the left arrow
            />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()} // Navigate to next slide
          >
            <img
              src={Arrowright}
              alt="Next"
              className="w-auto h-4" // Adjusting the size of the right arrow
            />
          </button>
        </div>
      </div>

      <p className="text-whites text-[12px] mb-2">
        When you win a super jackpot, you will receive additional rewards
      </p>

      <p className="text-whites mb-4 text-[12px]">
        Maximum bonus <span className="text-blue-600">₹500.00</span>
      </p>

      <div className="slider-container mt-4">
        <Slider ref={sliderRef} {...settings}>

          {gameList && gameList?.map((game, index) => (
            <div key={index} className="rounded p-1 relative">
              {" "}
              {/* Added padding for spacing */}
              {/* Ensure that multiplier is visible above the image */}
              <div
                className="absolute top-1 left-1   px-2 py-1  text-sm z-10  bg-gradient-to-r from-pink-500 via-purple-500 to-purple-700 text-black p-6 rounded-lg overflow-hidden" // Added z-10 for visibility
              >
               {parseFloat((Math.random() * (40 - 20) + 20).toFixed(2))}
              </div>
              <img
              data-origin={game.icon}
                     src={game.icon}
                             alt={game.game_name}
                             loading='lazy'
                className="w-full h-40 rounded"
                onClick={() => 
                handleJilliOpen(game.game_uid)     }
              />
              <div className="bottom-0 left-0 right-0 bg-gradient-to-t">
                <h3 className="text-whites text-[10px] whitespace-nowrap overflow-ellipsis object-fill">
                 {game.game_name}
                </h3>
                <p className="text-[#0F9957] text-[10px]">₹100</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

    </>
  )
}

export default Jackport
