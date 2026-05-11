import React, { useCallback, useEffect, useState } from "react";
import { HashRouter as Router } from "react-router-dom";
import "./App.css";
import AppComponent from "./AppComponent";
import changeFavicon from "./changeFavicon";
import { useDispatch, useSelector } from "react-redux";
import { bannerGet } from "./store/reducer/authReducer";
import { FaTools } from "react-icons/fa";

const MaintenancePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <FaTools className="text-6xl text-yellow-500 animate-spin mb-4" />
      <h1 className="text-4xl font-bold">We're Under Maintenance</h1>
      <p className="mt-2 text-lg text-gray-400">
        Our website is currently undergoing scheduled maintenance.
      </p>
      <p className="text-lg text-gray-400">We'll be back at 5:00 AM.</p>
      <div className="mt-6 px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg shadow-md">
        Thank you for your patience!
      </div>
    </div>
  );
};

function App() {
  const { bannergetData } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const getData = useCallback(() => {
    dispatch(bannerGet());
  }, [dispatch]);
  useEffect(() => {
    getData();
  }, [dispatch, getData]);

  useEffect(() => {
    if (bannergetData?.gameall?.name) {
      document.title = bannergetData.gameall.name;
      changeFavicon(bannergetData?.gameall?.favicon);

      // Optionally revert to default on unmount
      return () => {
        changeFavicon(bannergetData?.gameall?.favicon);
      };
    }
  }, [bannergetData]);

  const [showMaintenance, setShowMaintenance] = useState(false);

  useEffect(() => {
    // Get user's timezone
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Convert current time to IST (India Time)
    const now = new Date();
    const indiaTime = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      hour12: false,
    }).format(now);

    console.log(
      "object",
      showMaintenance,
      indiaTime >= 1 && indiaTime < 5,
      indiaTime,
      userTimezone
    );
    // Check if user is in India and time is between 1 AM - 5 AM IST
    if (userTimezone === "Asia/Calcutta" && indiaTime >= 1 && indiaTime < 5) {
      setShowMaintenance(true);
    }
  }, [showMaintenance]);

  return (
    <>
      <Router>
        <AppComponent />
      </Router>
    </>
  );
}

export default App;
