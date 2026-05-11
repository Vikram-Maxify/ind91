import React, { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Img2 from "../../assets/banner/bann11.jpg";
import Img4 from "../../assets/activity4.png";
import Img5 from "../../assets/activity5.jpg";
import Img6 from "../../assets/activity6.png";
import Img7 from "../../assets/activity7.jpg";
import Img3 from "../../assets/banner/bann16.jpg";
import Banner9 from "../../assets/banner/ban9.jpg";
import Banner10 from "../../assets/banner/b1.jpg";

const Banner4 =
  "https://res.cloudinary.com/djkkjx9ry/image/upload/v1723875799/GameAssets/activity-banner4_jiurxb.jpg";
const Banner5 =
  "https://res.cloudinary.com/djkkjx9ry/image/upload/v1723875757/GameAssets/activity-banner5_b8y5uy.png";
const Banner6 =
  "https://res.cloudinary.com/djkkjx9ry/image/upload/v1723875772/GameAssets/activity-banner6_w8azed.png";
const Banner7 = "https://i.ibb.co/9m71LhqS/bann11.jpg";

const ActivityDetail = () => {
  const { userInfo, bannergetData } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="body-color p-1 py-3 sticky top-0 z-10">
        <div className="container-section flex justify-between items-center">
          <button className="absolute" onClick={() => navigate("/activity")}>
            <IoIosArrowBack className="text-xl" />
          </button>
          <h1 className="heading-h1 gray-100 text-center flex justify-center items-center m-auto">
            Activity details
          </h1>
        </div>
      </div>
      {id == 2 && (
        <div>
          <img src={bannergetData?.activity?.ban2} alt="" className="w-full" />
          <h3 className="heading-h3 text-center mt-3 mb-1 gray-50 font-medium">
            {" "}
            Wingo Win Streak Bonus
          </h3>
          <div className="container-section">
            <img src="https://i.ibb.co/jkCCdv7m/Whats-App-Image-2026-04-09-at-6-24-41-PM-6.jpg" alt="" />

            <p className="fs-sm text-center gray-50 mt-3">
              {" "}
              Please click the link beloto reach our Package
            </p>
            <Link
              to={userInfo?.telegram}
              className="fs-sm color-blue-500 text-center flex justify-center"
            >
              {userInfo?.telegram}
            </Link>
          </div>
        </div>
      )}
      {id == 3 && (
        <div>
          <img src={bannergetData?.activity?.ban5} alt="" className="w-full" />
          <h3 className="heading-h3 text-center mt-3 mb-1 gray-50 font-medium">
            RECHARGE BONUS FOR NEW PLAYERS
          </h3>
          <div className="container-section">
            <img src="https://i.ibb.co/jkCCdv7m/Whats-App-Image-2026-04-09-at-6-24-41-PM-6.jpg" alt="" />
          </div>
        </div>
      )}
      {id == 4 && (
        <div>
          <img src={bannergetData?.activity?.ban7} alt="" className="w-full" />
          <h3 className="heading-h3 text-center mt-3 mb-1 gray-50 font-medium">
            Benefits of Using AR WALLET
          </h3>
          <div className="container-section">
            <img src="https://i.ibb.co/KcKP1WrH/Whats-App-Image-2026-04-09-at-6-24-40-PM-14.jpg" alt="" />
          </div>
        </div>
      )}
      {id == 5 && (
        <div>
          <img src={bannergetData?.activity?.ban5} alt="" className="w-full" />
          <h3 className="heading-h3 text-center mt-3 mb-1 gray-50 font-medium">
            🔄 Lucky "10" Days Of Interest 🔄
          </h3>
          <div className="container-section">
            <img src={Img5} alt="" />
          </div>
        </div>
      )}
      {id == 6 && (
        <div>
          <img src={bannergetData?.activity?.ban6} alt="" className="w-full" />
          <h3 className="heading-h3 text-center mt-3 mb-1 gray-50 font-medium">
            🚀 Aviator Fly High & Win Big 🚀
          </h3>
          <div className="container-section">
            <img src={Img6} alt="" />
          </div>
        </div>
      )}
      {id == 7 && (
        <div>
          <img src={bannergetData?.activity?.ban7} alt="" className="w-full" />
          <h3 className="heading-h3 text-center mt-3 mb-1 gray-50 font-medium">
            ⁉️ Mysterious Gift ⁉️
          </h3>
          <div className="container-section">
            <img src={Img7} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default ActivityDetail;
