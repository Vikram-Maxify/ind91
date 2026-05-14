import React, { useCallback, useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import "./home.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Slider from "react-slick";
import Layout from "../../layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userDetail } from "../../store/reducer/authReducer";
import EarningImg from "../../assets/jaiclub/ranking.webp";
import Crown2 from "../../assets/tiranga/crown2.png";
import Place2 from "../../assets/tiranga/place2.png";
import Crown1 from "../../assets/tiranga/crown1.png";
import Place1 from "../../assets/tiranga/place1.png";
import Crown3 from "../../assets/tiranga/crown3.png";
import Place3 from "../../assets/tiranga/place3.png";
import home1 from "../../assets/home1.svg";
import home2 from "../../assets/home2.svg";
import Banner1 from "../../assets/banner/bannerNew/newBanner2.jpg";
import Banner2 from "../../assets/banner/bannerNew/newBanner1.jpg";
import Banner3 from "../../assets/banner/bannerNew/new3.jpg";
import Banner4 from "../../assets/banner/bannerNew/new2.jpg";
import { jilliGame } from "../../store/reducer/gameReducer";
import WinningInformation from "./WinningInformation";
import { AvatarData } from "../main/AvatarData";

import Categories from "./Categories";
import PlatformDetails from "./PlateformData";
import MainLoader from "../../components/MainLoader";
import Apkdownload from "../../components/Apkdownload";
// import rotator from "../../assets/jaiclub/rankHalo.webp"
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaCoins } from "react-icons/fa6";
import rankCrown from "../../assets/jaiclub/rankWreath.webp"
import topBG from "../../assets/jaiclub/Navbar/topBar.webp"
import plus from "../../assets/jaiclub/Navbar/plusIcon.webp"
import download from "../../assets/jaiclub/Navbar/download-icon.webp"
import language from "../../assets/jaiclub/Navbar/language.webp"
import bannerMain from "../../assets/jaiclub/titleBgLeft.png";
import bannerarrow from "../../assets/jaiclub/banner-bg-right.svg";
import WheelSpinImg from "../../assets/jaiclub/Navbar/WheelSpinImg.png"
import ContactRobo from "../../assets/jaiclub/Navbar/contact-robo.webp"
import Dragon from "../../assets/jaiclub/Navbar/Dragon.svg"
import ServiceImg from "../../assets/jaiclub/Navbar/giftbox-2.png";
import Cookies from "js-cookie";


const Home = () => {
  const { userInfo, bannergetData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(true);
  const [topup1, setTopup1] = useState(false);
  const [topup3, setTopup3] = useState(false);
  const [topup, setTopup] = useState(false);
  const [topup2, setTopup2] = useState(false);
  const [betAlert, setBetAlert] = useState(false);
  const [successMessage, setSuccessMessage] = useState(
    "Without deposit you can’t play",
  );
  const [mainLoader, setMainloader] = useState(false);
  const [apps, setApp] = useState(true);
  const [jilliPopup, setJilliPopup] = useState(false);
  const [gameId, setGameId] = useState();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const debouncedDispatch = useCallback(() => {
    dispatch(userDetail());
  }, [dispatch]); // Include dispatch here to avoid ESLint warnings

  useEffect(() => {
  debouncedDispatch();
}, [debouncedDispatch]);

useEffect(() => {
  if (userInfo) {
    const data = localStorage.getItem("topup");

    if (data === "true") {
      setTopup(true);

      // 👇 ek baar show hone ke baad hata do
      localStorage.removeItem("topup");
    }
  }
}, [userInfo]);// Empty dependency array ensures it runs only once
  const handleTopup = () => {
    localStorage.setItem("topup", false);
    setTopup(false);
    setTopup2(true);
  };

  useEffect(() => {
    const data = localStorage.getItem("app");

    if (data === "closed") {
      // Check for the specific value you set
      setApp(false);
    } else {
      setApp(true);
    }
  }, []);

  useEffect(() => {
    if (topup || topup2 || topup1 || topup3) {
      // Disable background scroll
      document.body.style.overflow = "hidden";
    } else {
      // Enable background scroll
      document.body.style.overflow = "";
    }

    // Cleanup to enable scroll again when component unmounts or modal closes
    return () => {
      document.body.style.overflow = "";
    };
  }, [topup, topup2, topup1, topup3]);

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

  const handleCheck = (path) => {
    if (userInfo) {
      navigate(path);
    } else {
      // setBetAlert(true);
      navigate("/login");

      // setTimeout(() => {
      //   setBetAlert(false);
      // }, 2000);
    }
  };

  const notices = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 4000,
    verticalSwiping: true,
    arrows: false, // This removes the arrows
    cssEase: "linear", // Smooth scrolling effect
  };

  useEffect(() => {
    // Function to handle when the page has fully loaded
    const handleLoad = () => {
      console.log("Loading complete.");
      setMainloader(false);
    };

    if (performance.getEntriesByType("navigation")[0].type === "navigate") {
      console.log("Loading started in a new tab...");
      setMainloader(true);
      setTimeout(() => {
        setMainloader(false);
      }, 1000);
      window.addEventListener("load", handleLoad);
    } else {
      setMainloader(false);
    }
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <Layout>
      <div
        style={{
          position: "fixed",
          zIndex: 500,
        }}
        className="flex flex-col right-0 bottom-36"
      >
        <Link to={"/WheelSpin"} style={{ display: "inline-block" }}>
          <img src={WheelSpinImg} alt="Service" className="w-14  " />
        </Link>

        <Link to={`https://support.ind91.us/?token=${Cookies.get(
                        "auth"
                      )}`} style={{ display: "inline-block" }}>
          <img src={ServiceImg} alt="Service" className="w-14 " />
        </Link>
        <div style={{ display: "inline-block" }}>
          <img src={Dragon} alt="Service" className="w-14" />
        </div>
      </div>

      <div className={`place-bet-popup z-20 ${betAlert ? "active" : ""}`}>
        <div className="text-sm">{successMessage} </div>
      </div>

      {/* <Apkdownload /> */}

      {mainLoader && <MainLoader />}
      <div className="w-full body-color z-50">
        {userInfo && userInfo ? (
          <div className="flex items-center justify-between rounded-md">
            <img src={topBG} alt="" className="w-[100vw" />
            <Link to="/wallet/Recharge">
            <span className="absolute left-[20px] top-[11px] flex items-center gap-1 text-yellow-500">
              ₹{Number(userInfo?.money_user)?.toFixed(2)}

              <img
                src={plus}
                alt=""
                className="w-3 h-3 object-contain"
              />
            </span>
            </Link>
            <div className="z-10 left-[37%] absolute">
              <img
                src={bannergetData?.gameall?.logo}
                alt="logo"
                className="w-[100px]"
              />
            </div>
            <div className="flex gap-4 items-center text-xl absolute right-[70px] top-[13px] ">
              <a href="/app.apk">
                {" "}
                <img src={download} alt="" className="h-5 w-5"/>
                

              </a>
              <img src={language} alt="" className="h-5 w-5 absolute right-[-32px]"/>
            </div>
          </div>
        ) : (
          <div className="bg-header flex items-center justify-between rounded-md px-3 z-[100] relative">
            <div className="logo py-2">
              <img
                src={bannergetData?.gameall?.logo}
                alt=""
                className="w-[100px]"
              />
            </div>
            <div className="flex items-center">
              <button
                className="gradient-border-login ml-1 border cursor-pointer rounded-md px-3 py-1 mr-2"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className="popular-btn gradient-border-overlay rounded-full "
                onClick={() => navigate("/register")}
              >
                Register
              </button>{" "}
            </div>
          </div>
        )}
      </div>

      {/* bannner */}
      <div className="container-section  mt-2">
        <div className="home-slider-banner">
          {/* notice board */}
          {/* <div className="flex items-center gap-2 w-full h-[80px] p-2">
            <div>
              <img src={home1} alt="" />
              <svg data-v-d78763b5="" class="svg-icon icon-91-turntable w-full">
                <use href="#icon-91-turntable"></use>
              </svg>
            </div>
            <div>
              <img src={home2} alt="" />
              <svg data-v-d78763b5="" class="svg-icon icon-91-vip w-full">
                <use href="#icon-91-vip"></use>
              </svg>
            </div>
          </div> */}
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="w-full">
                <img
                  src={bannergetData?.data?.ban1}
                  className="w-full rounded-lg"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full">
                <img
                  src={bannergetData?.data?.ban2}
                  className="w-full rounded-lg"
                  alt=""
                />
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="w-full">
                <img
                  src={bannergetData?.data?.ban3}
                  className="w-full rounded-lg"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="container-section">
        <div className="banner-notice bg-navs rounded-xl border border-[#224BA2] flex items-center justify-between">
          <svg
            data-v-20e1659b=""
            class="svg-icon  icon-91-notice notice notice absolute left-0 size-7 pl-3"
          >
            <use href="#icon-noticeBarSpeaker"></use>
          </svg>

            {/* <img src="https://i.ibb.co/PsfB8QXv/speaker.jpg" alt="speekaer" /> */}
          <div className="slider-container bg-navs h-8 ms-6 mr-2 overflow-hidden text-white pl-2">
            <Slider {...notices}>
              <div>
                <h3 className="text-xs">
                  🎉🎉🎉 Welcome to the {bannergetData?.gameall?.name}!
                  Greetings, Gamers and Enthusiasts! The{" "}
                  {bannergetData?.gameall?.name} is more than just a platform
                  for gaming. We invite you to join us, you'll find a variety of
                  games, promo, bonus, luxury gold awards, Register now and win.
                </h3>
              </div>
              <div>
                <h3 className="text-xs">
                  If your deposit not receive, please send it directly to
                  {bannergetData?.gameall?.name} Self-service Center{" "}
                  {bannergetData?.gameall?.name} wait till already get process,
                  do not send to another person and trust anyone claiming to
                  represent {bannergetData?.gameall?.name}. Always verify our
                  website authenticity through the official community channels.
                  Your safety and trust is our prority.
                </h3>
              </div>
              <div>
                <h3 className="text-xs">
                  Please be sure to always use our official website for playing
                  the games with the following link,{" "}
                  {bannergetData?.gameall?.name}. Please always check our
                  official link to access our website and avoid scammers and
                  phishing links
                </h3>
              </div>
            </Slider>
          </div>

          <span className="float-end text-sm py-1 popular-btn gradient-border-overlay relative mr-2 flex items-center rounded-full px-6">
            <Link
              // to={"https://wa.me/+917491861731"}
              target="_blank"
              className="flex items-center"
            >
              Detail
            </Link>

            {/* <div className="ponter-event"></div> */}
          </span>
        </div>
      </div>
      {/*  */}

      {/* <div className="flex items-center justify-between p-4">
        <div className="flex items-center flex-col">
          <p className="text-sm flex items-center text-[#92A8E3]">
            <span>
              <svg data-v-d78763b5="" class="svg-icon icon-91-gold size-4">
                <use href="#icon-91-gold"></use>
              </svg>
            </span>
            Wallet balance
          </p>
          <div className="text-base font-bold flex items-center gap-1 text-white">
            ₹{Number(userInfo?.money_user).toFixed(2)}{" "}
            <span>
              <svg
                data-v-d78763b5=""
                class="svg-icon icon-91-refresh size-5 text-white"
              >
                <use href="#icon-91-refresh"></use>
              </svg>
            </span>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => navigate("/wallet/Withdraw")}
            className=" text-white text-sm px-4 py-2 rounded-lg h-[44px] w-[73px] bg-withdraw flex flex-col items-center"
          >
            {" "}
            <span>
              <svg data-v-d78763b5="" class="svg-icon icon-91-up size-3">
                <use href="#icon-91-up"></use>
              </svg>
            </span>
            Withdraw
          </button>
          <button
            onClick={() => navigate("/wallet/Recharge")}
            className="text-white text-sm px-4 py-2 rounded-lg h-[44px] w-[73px] bg-deposit flex flex-col items-center"
          >
            <span>
              <svg data-v-d78763b5="" class="svg-icon icon-91-down size-3">
                <use href="#icon-91-down"></use>
              </svg>
            </span>
            Deposit
          </button>
        </div>
      </div> */}

      <Categories />

      {/* Rummy  Games */}

      <div className="container-section mt-5">
        <WinningInformation />

        <div
          className="mt-5"
          style={{
            background:
              "linear-gradient(257deg, rgba(138, 214, 253, .9) .97%, rgba(127, 160, 252, .9) 25%, rgba(148, 122, 237, .9) 50%, rgba(234, 125, 175, .9) 75%, rgba(246, 172, 151, .9) 100%)",
          }}
        >
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
                      Today's earnings chart
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
          
                </div>
          <div className="border rounded-lg p-2 py-8 rotating-bg">

            <div
              style={{ backgroundImage: `url(${EarningImg})` }}
              className="w-full mt-20 h-48 bg-cover pb-20"
            >
              <div className="flex items-center justify-around w-full">
                <div className="relative">
                  <div className="relative top-[-120px]">
                    {/* <img
                      src={Crown2}
                      alt=""
                      className="absolute w-12 left-[-15px] top-[-58px]"
                    /> */}
                    <img
                      src={AvatarData[1]}
                      alt=""
                      loading="lazy"
                      className="w-14 rounded-full h-14"
                    />
                    {/* <img
                    src={Place2}
                    alt=""
                    className="absolute bottom-[-10px]"
                  /> */}
                  </div>
                  <div className="left-[-37px] absolute top-[-56px] ">
                    <span className="flex justify-center text-3xl absolute top-[-19px] left-[50px]">
                      <MdOutlineArrowDropDown className="text-white" />
                    </span>
                    <p className="text-sm left-6 relative text-white">
                      Mem**SLH
                    </p>
                    <p className=" fs-sm rounded-3xl text-center relative left-[10px] text-white bg-white/40 px-3">
                      ₹220,499,518.82
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative  top-[-190px]">
                    {/* <img
                      src={Crown1}
                      alt=""
                      className="absolute w-12 left-[-16px] top-[-58px]"
                    /> */}
                    <img
                      src={AvatarData[4]}
                      alt=""
                      loading="lazy"
                      className="w-14 rounded-full h-14"
                    />
                    {/* <img
                    src={Place1}
                    alt=""
                    className="absolute bottom-[-10px]"
                  /> */}
                  </div>
                  <div className="left-[-25px] top-[-120px] absolute">
                    <span className="flex justify-center text-3xl absolute top-[-19px] left-[40px]">
                      <MdOutlineArrowDropDown className="text-white" />
                    </span>
                    <p className="text-sm left-6 relative text-white">
                      Mem**FXI
                    </p>
                    <p className=" fs-sm rounded-3xl  text-center relative left-[10px] text-white bg-white/40 px-3">
                      ₹1,272,332,040.00
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative top-[-20px]">
                    {/* <img
                      src={Crown3}
                      alt=""
                      className="absolute w-12 left-[-10px] top-[-57px]"
                    /> */}
                    <img
                      src={AvatarData[5]}
                      alt=""
                      loading="lazy"
                      className="w-14 rounded-full h-14 mb-40"
                    />
                    {/* <img
                    src={Place3}
                    alt=""
                    className="absolute bottom-[-10px]"
                  /> */}
                  </div>
                  <div className="left-[-32px] absolute top-[44px]">
                    <span className="flex justify-center text-3xl absolute top-[-19px] left-[50px]">
                      <MdOutlineArrowDropDown className="text-white" />
                    </span>
                    <p className="text-sm left-6 relative text-white">
                      Mem**IAP
                    </p>
                    <p className="fs-sm rounded-3xl text-center relative left-[10px] text-white bg-white/40 px-3">
                      ₹97,990,200.00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/50 rounded-2xl">
              <div className="flex py-1 items-center justify-between my-2 rounded-md pt-2">
                <div className="flex items-center ps-1 ">
                  <h1 className="gray-100 w-14 flex justify-center relative">
                    <img src={rankCrown} className="h-[32px] w-[40px]" alt="" />
                    <span className="absolute left-[23px] top-[2px]">4</span>
                  </h1>
                  <img
                    src={AvatarData[6]}
                    alt=""
                    className="rounded-full w-[40px] h-[40px] mr-2"
                  />
                  <p className="fs-sm gray-100">Mem***WJA</p>
                </div>
                <div className="relative flex items-center">
                  <button className=" text-xs px-2 mt-1 color-blue">
                    ₹78,976,308.99
                  </button>
                </div>
              </div>
              <div className="border-t border-[#022C68] py-1 flex items-center justify-between my-2 rounded-md ">
                <div className="flex items-center ps-1">
                  <h1 className="gray-100 w-14 flex justify-center relative">
                    <img src={rankCrown} className="h-[32px] w-[40px]" alt="" />
                    <span className="absolute left-[23px] top-[2px]">5</span>
                  </h1>
                  <img
                    src={AvatarData[7]}
                    alt=""
                    className="rounded-full w-[40px] h-[40px] mr-2"
                  />
                  <p className="fs-sm gray-100">Mem***TCZ</p>
                </div>
                <div className="relative flex items-center">
                  <button className=" text-xs px-2 mt-1 color-blue">
                    ₹61,692,960.00
                  </button>
                </div>
              </div>
              <div className="border-t border-[#022C68] py-1 flex items-center justify-between my-2 rounded-md ">
                <div className="flex items-center ps-1">
                  <h1 className="gray-100 w-14 flex justify-center relative">
                    <img src={rankCrown} className="h-[32px] w-[40px]" alt="" />
                    <span className="absolute left-[23px] top-[2px]">6</span>
                  </h1>
                  <img
                    src={AvatarData[5]}
                    alt=""
                    className="rounded-full w-[40px] h-[40px] mr-2"
                  />
                  <p className="fs-sm gray-100">Mem***KRZ</p>
                </div>
                <div className="relative flex items-center">
                  <button className=" text-xs px-2 mt-1 color-blue">
                    ₹60,222,460.00
                  </button>
                </div>
              </div>
              <div className="border-t border-[#022C68] py-1 flex items-center justify-between my-2 rounded-md ">
                <div className="flex items-center ps-1">
                  <h1 className="gray-100 w-14 flex justify-center relative">
                    <img src={rankCrown} className="h-[32px] w-[40px]" alt="" />
                    <span className="absolute left-[23px] top-[2px]">7</span>
                  </h1>
                  <img
                    src={AvatarData[7]}
                    alt=""
                    className="rounded-full w-[40px] h-[40px] mr-2"
                  />
                  <p className="fs-sm gray-100">Mem***REM</p>
                </div>
                <div className="relative flex items-center">
                  <button className="text-xs px-2 mt-1 color-blue">
                    ₹58,221,670.00
                  </button>
                </div>
              </div>
              <div className="border-t border-[#022C68] py-1 flex items-center justify-between my-2 rounded-md ">
                <div className="flex items-center ps-1">
                  <h1 className="gray-100 w-14 flex justify-center relative">
                    <img src={rankCrown} className="h-[32px] w-[40px]" alt="" />
                    <span className="absolute left-[23px] top-[2px]">8</span>
                  </h1>
                  <img
                    src={AvatarData[2]}
                    alt=""
                    className="rounded-full w-[40px] h-[40px] mr-2"
                  />
                  <p className="fs-sm gray-100">Mem***GOF</p>
                </div>
                <div className="relative flex items-center">
                  <button className="text-xs px-2 mt-1 color-blue">
                    ₹55,244,276.00
                  </button>
                </div>
              </div>
              <div className="border-t border-[#022C68] py-1 flex items-center justify-between rounded-md my-2">
                <div className="flex items-center ps-1">
                  <h1 className="gray-100 w-14 flex justify-center relative">
                    <img src={rankCrown} className="h-[32px] w-[40px]" alt="" />
                    <span className="absolute left-[23px] top-[2px]">9</span>
                  </h1>
                  <img
                    src={AvatarData[6]}
                    alt=""
                    className="rounded-full w-[40px] h-[40px] mr-2"
                  />
                  <p className="fs-sm gray-100">Mem***MRF</p>
                </div>
                <div className="relative flex items-center">
                  <button className="text-xs px-2 mt-1 color-blue">
                    ₹51,754,226.00
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* game text  */}
      {/* <div className="container-section">
        <div className="flex items-center justify-center">
          <img src="/logo.png" alt="" className="w-36 m-1" />
          <img src={Age} alt="" className="m-1" />
          <img src={Telegram} alt="" className="m-1" />
          <img src={Whatsapp} alt="" className="m-1" />
        </div>

        <p className=" text-sm font-medium">
          Justice, and openness. We mainly operate fair lottery.The platform
          advocates fairness, blockchain games, live casinos, and slot machine
          games.{" "}
        </p>
        <br />
        <p className="text-sm font-medium">
          Blockchain games, live casinos,and slot machine Works with over 10,000
          online live game dealers and slot games, all verified fair games.
        </p>
      </div> */}
      <PlatformDetails />

      <div className={topup1 ? "overlay-section block z-10" : "hidden"}></div>
      <div className={topup ? "overlay-section block z-10" : "hidden"}></div>
      <div className={topup2 ? "overlay-section block z-10" : "hidden"}></div>
      {topup && (
        <div className="absolute top-64 bg-navs left-0 right-0 flex m-auto flex-col bg-color-l mx-10 pb-5 rounded-lg z-50">
          <div className="bg-gradient-to-r from-[#422A83] to-[#5C5BDC] text-center p-2 font-bold text-lg rounded-t-lg  text-white">
            Official Announcement
          </div>
          <div className="flex flex-col justify-center items-center text-white font-bold">
            <h1 className="text-center">
              Dear Users
            </h1>
          <h1 className="text-center">
            Please be informed that effective immediately, the maximum amount per withdrawal submission is 50,000.
          </h1>
          <h1 className="text-center">
            Kindly ensure that each withdrawal request does not exceed this limit.
          </h1>
          <h1 className="text-center">
            Thank you for your understanding and cooperation.
          </h1>
          </div>
          {/* <div className="px-2 py-0 font-medium text-left text-sm text-white max-h-[50vh] overflow-auto">
            <img src="https://i.ibb.co/spd13t5j/99-GOLD-Game.png" alt="" />
          </div> */}
          {/* <h4 className="text-center mt-1">
            <a href="#" className="text-white bg-[#003163]">
              JaiClubhibot
            </a>
          </h4> */}
          <button
            className="bg-gradient-to-r from-[#422A83] to-[#5C5BDC] text-center p-2 font-bold text-lg rounded-t-lg  text-white -mb-5"
            onClick={() => {
              setTopup(false);
              setTopup1(true);
            }}
          >
            Confirm
          </button>
        </div>
      )}

      {topup1 && (
        <div className="absolute top-20 left-0 right-0 flex m-auto flex-col bg-color-l mx-10 pb-5 rounded-lg z-50">
          <div className="bg-gradient-to-r from-[#422A83] to-[#5C5BDC] text-center p-2 font-bold text-lg rounded-t-lg  text-white ">
            🦋 Welcome to the New ind91 📢
          </div>
          <div className="px-2 py-0 font-medium text-left text-sm text-white max-h-[50vh] overflow-auto">
            <img src="https://i.ibb.co/xS6xshkp/20.png" alt="" />
          </div>
          {/* <h4 className="text-center mt-1">
            <a href="#" className="text-white bg-[#003163]">
              jaiclub
            </a>
          </h4> */}
          <button
            className="bg-gradient-to-r from-[#422A83] to-[#5C5BDC] text-center p-2 font-bold text-lg rounded-t-lg  text-white -mb-5"
            onClick={() => {
              setTopup1(false);
              setTopup3(true);
            }}
          >
            Confirm
          </button>
        </div>
      )}

      {topup3 && (
        <div className="absolute top-[80px] left-0 right-0 flex m-auto flex-col bg-color-l mx-10 pb-5 rounded-lg z-50">
          <div className="bg-gradient-to-r from-[#422A83] to-[#5C5BDC] text-center p-2 font-bold text-lg rounded-t-lg  text-white">
            🎁Enjoy Bigger Rewards🎁
          </div>
          <h4 className="text-center mt-1">
            <a href="#" className="text-white">
              ➡️Click join now
            </a>
          </h4>
          <div className="px-2 py-0 font-medium text-left text-sm text-white max-h-[50vh] overflow-auto">
            <img src="https://i.ibb.co/jZhHNHdH/19.png" alt="" />
          </div>
          <button
            className="bg-gradient-to-r from-[#422A83] to-[#5C5BDC] text-center p-2 font-bold text-lg rounded-t-lg  text-white -mb-5"
            onClick={() => {
              setTopup3(false);
              setTopup2(true);
            }}
          >
            Confirm
          </button>
        </div>
      )}

      {topup2 && (
        <div id="popup" className="popup bg-light">
          <div className="header-section bg-[#9989f5] text-white">
            <h4>Extra first deposit bonus</h4>
            <p>Each account can only receive rewards once</p>
          </div>
          <div className="middle-content-section">
            <ul>
              {depositBonus?.map((item, i) => (
                <li key={i} onClick={() => navigate("/wallet/Recharge")} className="bg-[#3C3775]">
                  <div className="first-c">
                    <p className="gray-50">
                      First deposit{" "}
                      <span className="text-[#DD9138]">
                        {item.deposit.toLocaleString()}
                      </span>
                    </p>
                    <p className="color-yellow">
                      +₹{item.bonus.toLocaleString()}.00
                    </p>
                  </div>
                  <p className="color-gray">
                    Deposit {item.deposit.toLocaleString()} for the first time
                    in your account and you can receive
                    {item.deposit + item.bonus.toLocaleString()}
                  </p>
                  <div className="bottom-c">
                    <div className="slider-box border  border-color-slat">
                      0/{item.deposit.toLocaleString()}
                    </div>
                    <button className="border fs-sm border-color-blue ">
                      Deposit
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bottom-section">
            <div>
              <label className="flex items-center ">
                <input
                  type="checkbox"
                  className="hidden peer"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center peer-checked:border-[#A08FFF] peer-checked:bg-[#A08FFF]">
                  <svg
                    className={`w-4 h-4 text-white ${isChecked ? "block" : "hidden"
                      }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 111.414-1.414L8 11.586l6.793-6.793a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="gray-100 ms-2 mr-2 fs-sm cursor-pointer">
                  No more reminders today
                </span>
              </label>
            </div>
            <button
              className="activity blue-linear text-black font-bold"
              onClick={() => setTopup2(false)}
            >
              Activity
            </button>
          </div>
          <span onClick={() => setTopup2(false)}>
            <RxCrossCircled className="m-auto flex text-center absolute left-0 right-0 justify-center text-2xl mt-4 text-white" />
          </span>
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
    </Layout>
  );
};

export default Home;

const depositBonus = [
  {
    deposit: 50000,
    bonus: 5000,
  },
  {
    deposit: 10000,
    bonus: 1000,
  },
  {
    deposit: 5000,
    bonus: 500,
  },
  {
    deposit: 3000,
    bonus: 300,
  },
  {
    deposit: 1000,
    bonus: 100,
  },
  {
    deposit: 500,
    bonus: 50,
  },
  {
    deposit: 300,
    bonus: 30,
  },
];
