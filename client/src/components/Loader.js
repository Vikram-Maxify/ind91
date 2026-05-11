import React from "react";
import loader from "../assets/loader-out.png";
import { useSelector } from "react-redux";

const Loader = () => {
  const { bannergetData } = useSelector((state) => state.auth);
  return (
    <>
      <div className="loader z-50" role="status">
        <div className="outer-layer rounded-full">
          {" "}
          <img src={loader} alt="" className="h-full w-full imgs" />
        </div>
        <img src={bannergetData?.gameall?.logo} alt="" className="imgs2" />
      </div>
    </>
  );
};

export default Loader;
