import React, { useEffect, useState } from "react";
import "./navbar.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
 
import ServiceImg from "../assets/jaiclub/Navbar/giftbox-2.png";
 
import Promotion from "../assets/jaiclub/Navbar/promotion.webp";
import PromotionBaner from "../assets/jaiclub/Navbar/tabbar-center.webp";
import PromotionBG from "../assets/jaiclub/Navbar/centerPedestal.webp";
 
import ActivityNav from "../assets/jaiclub/Navbar/activity.webp";
import ActivityActive from "../assets/jaiclub/Navbar/Activity-Active.webp";
import HomeNav from "../assets/jaiclub/Navbar/home.webp";
import HomeActive from "../assets/jaiclub/Navbar/Home-Active.webp";
import AccountNav from "../assets/jaiclub/Navbar/Account.webp";
import AccountActive from "../assets/jaiclub/Navbar/Account-Active.webp";
import Wallet from "../assets/jaiclub/Navbar/Wallet.webp";
import WalletActive from "../assets/jaiclub/Navbar/Wallet-Active.webp";
import ContactRobo from "../assets/jaiclub/Navbar/contact-robo.webp"
import Cookies from "js-cookie";
 
const Navbar = () => {
  const [activeItem, setActiveItem] = useState("/");
  const navigate = useNavigate();
  const naviaget = useNavigate();
  const dispatch = useDispatch();
 
  // ─── Draggable Button State ───────────────────────────────────────────────
  // Store position as percentage so it survives screen resize
  const BUTTON_SIZE = 56; // w-14 = 56px
 
  const [posPercent, setPosPercent] = useState({
    xPct: (window.innerWidth - 100) / window.innerWidth,
    yPct: (window.innerHeight - 100) / window.innerHeight,
  });
 
  // Derive pixel position from percentage on every render
  const position = {
    x: posPercent.xPct * window.innerWidth,
    y: posPercent.yPct * window.innerHeight,
  };
 
  const [dragging, setDragging] = useState(false);
  const [dragStarted, setDragStarted] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
 
  // ─── Recalculate position on window resize ────────────────────────────────
  useEffect(() => {
    const handleResize = () => {
      // Force a re-render; pixel position recalculates automatically from pct
      setPosPercent((prev) => ({ ...prev }));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
  // ─── Drag Move / Stop ─────────────────────────────────────────────────────
  useEffect(() => {
    const handleMove = (e) => {
      if (!dragging) return;
 
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
 
      let newX = clientX - offset.x;
      let newY = clientY - offset.y;
 
      const maxX = window.innerWidth - BUTTON_SIZE;
      const maxY = window.innerHeight - BUTTON_SIZE;
 
      newX = Math.max(0, Math.min(newX, maxX));
      newY = Math.max(0, Math.min(newY, maxY));
 
      // Save as percentage so resize keeps button in same relative spot
      setPosPercent({
        xPct: newX / window.innerWidth,
        yPct: newY / window.innerHeight,
      });
 
      setDragStarted(true);
      e.preventDefault();
    };
 
    const handleStopDragging = () => {
      setDragging(false);
    };
 
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleStopDragging);
    window.addEventListener("touchmove", handleMove, { passive: false });
    window.addEventListener("touchend", handleStopDragging);
 
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleStopDragging);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleStopDragging);
    };
  }, [dragging, offset]);
 
  const handleStartDragging = (e) => {
    e.preventDefault();
 
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
 
    setOffset({
      x: clientX - position.x,
      y: clientY - position.y,
    });
 
    setDragging(true);
    setDragStarted(false);
  };
 
  const handleClicks = (e) => {
  if (dragStarted) {
    e.preventDefault();
  } else {
    const token = Cookies.get("auth");

    window.open(
      `https://support.ind91.us/?token=${token}`,
      "_blank"
    );
  }
};
 
  // ─── Disable scroll while dragging ───────────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = dragging ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [dragging]);
 
  // ─── Prevent pinch zoom ───────────────────────────────────────────────────
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content =
      "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no";
    document.head.appendChild(meta);
 
    const handleTouch = (e) => {
      if (e.touches.length > 1) e.preventDefault();
    };
    const handleWheel = (e) => {
      if (e.ctrlKey || e.metaKey) e.preventDefault();
    };
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === "+" || e.key === "-")
      )
        e.preventDefault();
    };
 
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouch, { passive: false });
 
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouch);
    };
  }, []);
 
  // ─── Active route tracking ────────────────────────────────────────────────
  const location = useLocation();
 
  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);
 
  const handleClick = (item) => {
    setActiveItem(`/${item}`);
    naviaget(`/${item}`);
  };
 
  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── Bottom Navbar ── */}
      <div className="navbar-section rounded-t-xl">
        <div className="flex relative justify-between items-center w-full px-5">
 
          {/* Home */}
          <div
            className={`gray-100 flex justify-center items-center flex-col p-2 z-40 ${
              activeItem === "/" ? "active" : ""
            }`}
            onClick={() => handleClick("")}
          >
            <img
              src={activeItem === "/" ? HomeActive : HomeNav}
              alt="home"
              className={`transition-all duration-200 h-[30px] w-[30px] ${
                activeItem === "/" ? "scale-110" : "opacity-60"
              }`}
            />
            <span
              className={`text-[11px] font-medium ${
                activeItem === "/" ? "text-[#EFB767]" : "text-white"
              }`}
            >
              Home
            </span>
          </div>
 
          {/* Activity */}
          <div
            className={`gray-100 flex justify-center items-center flex-col z-40 p-2 ${
              activeItem === "/activity" ? "active" : ""
            }`}
            onClick={() => handleClick("activity")}
          >
            <img
              src={activeItem === "/activity" ? ActivityActive : ActivityNav}
              alt="activity"
              className={`transition-all duration-200 h-[30px] w-[30px] ${
                activeItem === "/activity" ? "scale-110" : "opacity-60"
              }`}
            />
            <span
              className={`text-[11px] font-medium ${
                activeItem === "/activity" ? "text-[#EFB767]" : "text-white"
              }`}
            >
              Activity
            </span>
          </div>
 
          {/* ── Promotion (FIXED) ── */}
          <div
            onClick={() => handleClick("promotion")}
            className={`relative flex justify-center items-center flex-col p-2 ${
              activeItem === "/promotion" ? "promotion" : "gray-100"
            }`}
          >
            <div className="py-1 mb-7 relative">
              <img
                src={Promotion}
                alt=""
                className="h-full w-[121px] ml-[5px] mb-0 z-10"
              />
              <img
                src={PromotionBaner}
                alt=""
                className="h-[40%] w-[100% ]pr-4 absolute top-[72px] left-[8%]"
              />
              <img
                src={PromotionBG}
                alt=""
                className="h-[72%] w-[100%] absolute top-[19%] left-[1%] -z-50"
              />
            </div>
 
            {/* ✅ FIX: left-1/2 -translate-x-1/2 replaces broken left-[38%] */}
            <span className="absolute text-[16px] left-1/2 -translate-x-1/2 top-[84px] font-bold text-white z-50 whitespace-nowrap">
              Promotion
            </span>
          </div>
 
          {/* Wallet */}
          <div
            className={`gray-100 flex justify-center items-center flex-col z-40 p-2 ${
              activeItem === "/wallet" ? "active" : ""
            }`}
            onClick={() => handleClick("wallet")}
          >
            <img
              src={activeItem === "/wallet" ? WalletActive : Wallet}
              alt="wallet"
              className={`transition-all duration-200 h-[30px] w-[30px] ${
                activeItem === "/wallet" ? "scale-110" : "opacity-60"
              }`}
            />
            <span
              className={`text-[11px] font-medium ${
                activeItem === "/wallet" ? "text-[#EFB767]" : "text-white"
              }`}
            >
              Wallet
            </span>
          </div>
 
          {/* Account */}
          <div
            className={`gray-100 flex justify-center items-center flex-col z-40 p-2 ${
              activeItem === "/main" ? "active" : ""
            }`}
            onClick={() => handleClick("main")}
          >
            <img
              src={activeItem === "/main" ? AccountActive : AccountNav}
              alt="account"
              className={`transition-all duration-200 h-[30px] w-[30px] ${
                activeItem === "/main" ? "scale-110" : "opacity-60"
              }`}
            />
            <span
              className={`text-[11px] font-medium ${
                activeItem === "/main" ? "text-[#EFB767]" : "text-white"
              }`}
            >
              Account
            </span>
          </div>
 
        </div>
      </div>
 
      {/* ── Draggable Service Button (resize-safe) ── */}
      <div
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          zIndex: 500,
          cursor: dragging ? "grabbing" : "pointer",
          transition: dragging ? "none" : "all 0.2s ease-out",
        }}
        onMouseDown={handleStartDragging}
        onTouchStart={handleStartDragging}
        onMouseMove={(e) => e.preventDefault()}
      >
        <div onClick={handleClicks} style={{ display: "inline-block" }}>
          <img src={ContactRobo} alt="Service" className="w-14" />
        </div>
      </div>
    </>
  );
};
 
export default Navbar;