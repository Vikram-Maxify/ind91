import React, { useState } from 'react'
import { popularData } from './AllImageData';
import { TiStarFullOutline } from "react-icons/ti";
import { jilliGame } from '../../store/reducer/gameReducer';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import icon from '../../assets/pop-bc4fd589.svg'

const Popular = () => {
  const { userInfo, rechargelistData } = useSelector((state) => state.auth);
  const [gameId, setGameId] = useState();
  const [jilliPopup, setJilliPopup] = useState(false);
  const [betAlert, setBetAlert] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleJilliOpen = (data) => {
    setGameId(data);
    setJilliPopup(true);
  };

  const handleJilliSubmit = () => {
    if (userInfo === undefined || userInfo === "") {
      navigate("/login");
    } else {
      if (userInfo?.isdemo == 0) {
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
    <div>
    <p className=' mt-2  flex items-center gap-2 text-base font-semibold'><span><img src={icon} className="size-6" alt="icon" /></span>POPULAR</p>
              <div className="grid grid-cols-12 gap-2 mt-3">
            {popularData.map((img, index) => (
              <div className="col-span-4 rounded-lg" key={index}
                     onClick={() => {
              index===0 && handleJilliOpen(51);
                      index===1 && handleJilliOpen(109);
                      index===2 && handleJilliOpen(223);
                      index===3 && handleJilliOpen(259);
                      index===4 && handleJilliOpen(35);
                      index===5 && handleJilliOpen(49);
                      index===6 && handleJilliOpen(82);
                      index===7 && handleJilliOpen(27);
                      index===8 && handleJilliOpen(252);
                      index===9 && handleJilliOpen(94);
            }}
              >
                <img src={img.img} alt='img' className="w-full h-[20vh] cursor-pointer rounded-lg" loading='lazy'  />
              </div>
            ))}
          </div>

          <div className={jilliPopup ? "overlay-section block" : "hidden"}></div>

{jilliPopup && (
  <div className="fixed top-0 z-10 bottom-0 h-32 m-auto flex flex-col justify-center items-center left-0 right-0 w-[20rem] nav-bg rounded-lg">
    <h3 className="heading-h3 gray-50 mt-5">Tips</h3>
    <p className="text-sm gray-100 mt-2">
      Are you sure you want to join the game?
    </p>

    <div className="w-full mt-5">
      <button
        className="bgs-blue-500 p-2 w-[50%] text-black rounded-bl-lg "
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
    </div>
  )
}

export default Popular
