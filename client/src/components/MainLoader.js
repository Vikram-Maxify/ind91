import React from "react";
import { useSelector } from "react-redux";

const img1 = "https://i.ibb.co/tMyKppjB/start-15844f4f.webp";
const bgImg = "https://i.ibb.co/bRMXVrkx/main-Loader.webp";

const MainLoader = () => {
  const { bannergetData } = useSelector((state) => state.auth);

  return (
    <div
      className="fixed z-[999] w-full md:w-[27rem] top-0 bottom-0 flex flex-col gap-5 items-center justify-center h-screen overflow-hidden p-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <img
        src={img1}
        className="w-[76%] h-auto"
        alt="Vegasclub"
        loading="lazy"
      />

      <h2 className="text-white font-bold arial text-[18px]">
        Withdraw fast, safe and stable
      </h2>

      <img
        src={bannergetData?.gameall?.logo}
        className="w-[200px] h-auto mt-[70px]"
        alt="logo"
        loading="lazy"
      />
    </div>
  );
};

export default MainLoader;