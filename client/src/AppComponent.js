import React, { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import "./App.css";

import Home from "./pages/home/Home";
import Lottery from "./pages/home/lottery/Lottery";
import Original from "./pages/home/lottery/Original";
import Slots from "./pages/home/lottery/Slots";
import HotGames from "./pages/home/lottery/HotGames";
import Casino from "./pages/home/lottery/Casinos";
import DailyTasks from "./pages/activity/DailyTasks";
import Activity from "./pages/activity/Activity";
import Record from "./pages/activity/Record";
import InvitaionBonus from "./pages/main/InvitaionBonus";
import Rule from "./pages/main/Rule";
import Navbar from "./layout/Navbar";
import Laundry from "./pages/activity/Laundry";
import Superjackpot from "./pages/activity/SuperJackpot";
import JackpotRule from "./pages/activity/JackpotRule";
import JackpotStar from "./pages/activity/JackpotStar";
import MemberPackage from "./pages/activity/MemberPackage";
import RedeemGift from "./pages/activity/RedeemGift";
import DailySignIn from "./pages/activity/DailySignIn";
import Promotion from "./pages/promotion/Promotion";
import TeamReport from "./pages/promotion/TeamReport";
import PromotionRule from "./pages/promotion/PromotionRule";
import Server from "./pages/promotion/Server";
import RebateRatio from "./pages/promotion/RebateRatio";
import Wallet from "./pages/wallet/Wallet";
import Recharge from "./pages/wallet/Recharge";
import Withdraw from "./pages/wallet/Withdraw";
import AddBankCard from "./pages/wallet/AddBankCard";
import Main from "./pages/main/Main";
import Register from "./pages/account/Register";
import Login from "./pages/account/Login";
import Forgot from "./pages/account/Forgot";
import CustomerService from "./pages/main/CustomerService";
import StrongBox from "./pages/main/StrongBox";
import Notification from "./pages/home/Notification";
import GameStatistics from "./pages/main/GameStatistics";
import Language from "./pages/main/Language";
import ActivityAward from "./pages/main/ActivityAward";
import SettingCenter from "./pages/main/SettingCenter";
import Feedback from "./pages/main/Feedback";
import Notifications from "./pages/main/Notifications";
import About from "./pages/main/about/About";
import ConfidentialityAgreement from "./pages/main/about/ConfidentialityAgreement";
import RiskDisclosureAgreement from "./pages/main/about/RiskDisclosureAgreement";
import ChangePassword from "./pages/account/ChangePassword";
import BindEmail from "./pages/account/BindEmail";
import Subordinate from "./pages/promotion/Subordinate";
import Wingo from "./pages/wingo/Wingo";
import K3 from "./pages/k3/K3";
import FiveD from "./pages/5D/FiveD";
import Trx from "./pages/wingo/Trx";
import BattingRecordWinGo from "./pages/wingo/BettingRecordWinGo";
import BattingRecordTrx from "./pages/wingo/BettingRecordTrx";
import CommissionDetails from "./pages/promotion/CommissionDetails";
import BetRecords from "./pages/main/BetRecords";
import TransAction from "./pages/wallet/TransAction";
import RechargeHistory from "./pages/wallet/RechargeHistory";
import WithdrawHistory from "./pages/wallet/WithdrawHistory";
import Vip from "./pages/vip/Vip";
import PaymentPage from "./pages/wallet/PaymentPage";
import { useDispatch } from "react-redux";
import { userDetail } from "./store/reducer/authReducer";
import Avatar from "./pages/main/Avatar";
import InvitaionRecord from "./pages/main/InvitaionRecord";
import AttendanceHistory from "./pages/activity/AttendanceHistory";

import PrivateRoute from "./layout/PrivateRoute";
import axios from "axios";
import Login2 from "./pages/account/Login2";
import ActivityDetail from "./pages/activity/ActivityDetail";
import GameRules from "./pages/activity/GameRules";
import FirstDeposit from "./pages/activity/FirstDeposit";
import Beginner from "./pages/main/Beginner";
import TeamSubordinate2 from "./pages/promotion/TemaSubordinate2";
import ESport from "./pages/home/lottery/ESport";
import Chess from "./pages/home/lottery/Chess";
import Fishing from "./pages/home/lottery/Fishing";
import AllOnlineGames from "./pages/home/AllOnlineGames";
import MainLoader from "./components/MainLoader";
import PromotionLink from "./pages/promotion/PromotionLink";
import Salery from "./pages/activity/pages/Salery";
import RefferalBounce from "./pages/activity/pages/RefferalBounce";
import FreeBounse from "./pages/activity/pages/FreeBounse";
import DayTask from "./pages/activity/pages/DayTask";
import DailySalery from "./pages/activity/pages/DailySalery";
import WinningStreak from "./pages/activity/pages/WinningStreak";
import DailyBetting from "./pages/activity/pages/DailyBetting";
import RadeemGift from "./pages/activity/RedeemGift";
import Youtube from "./pages/activity/pages/Youtube";
import DailyReward from "./pages/activity/pages/DailyReward";
import PaymentPageUsdt from "./pages/wallet/PaymentPageUsdt";
import PaymentPage2 from "./pages/wallet/PaymentPage2";
import PaymentPage3 from "./pages/wallet/PaymentPage3";
import PartnerRewards from "./pages/promotion/PartnerRewards";
import AddUSDT from "./pages/wallet/AddUSDT";

function AppComponent() {
  const dispatch = useDispatch();

  // zoom app
  useEffect(() => {
    // Set viewport meta tag dynamically
    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content =
      "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no";
    document.head.appendChild(meta);

    

    const handleTouch = (event) => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    };

    const handleWheel = (event) => {
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
      }
    };

    const handleKeyDown = (event) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        (event.key === "+" || event.key === "-")
      ) {
        event.preventDefault();
      }
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

  axios.defaults.withCredentials = true;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(userDetail());
  }, [dispatch]);

  

  // zoom app

  return (
    <>
      <div className={`body dashboard gamesection`}>
        <>
          <div className="root-main">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route
                path="http://h5workordersupport.trueprofit.biz/"
                element={<CustomerService />}
              />


              <Route path="/wallet/Recharge" element={<Recharge />} />

              <Route path="/home/Lottery" element={<Lottery />} />
              <Route path="/home/Original" element={<Original />} />
              <Route path="/home/Slots" element={<Slots />} />
              <Route path="/home/HotGames" element={<HotGames />} />
              <Route path="/home/Casino" element={<Casino />} />

              <Route path="/home/e" element={<ESport />} />
              <Route path="/home/Chess" element={<Chess />} />
              <Route path="/home/Fishing" element={<Fishing />} />
              <Route
                path="/wallet/Recharge/usdt"
                element={<PaymentPageUsdt />}
              />
              <Route path="wallet/Withdraw/AddUSDT" element={<AddUSDT />} />
              {/* private route */}
              <Route path="/" element={<PrivateRoute />}>
                <Route
                  path="home/AllOnlineGames"
                  element={<AllOnlineGames />}
                />

                <Route path="home/Messages" element={<Notification />} />
                {/* Other routes */}
                {/* activity */}
                <Route path="activity" element={<Activity />} />
                <Route path="activity/DailyTasks" element={<DailyTasks />} />
                <Route path="activity/DailyTasks/Record" element={<Record />} />
                <Route path="activity/DailyTasks/Record" element={<Record />} />
                <Route path="main/SuperJackpot" element={<Superjackpot />} />
                <Route
                  path="main/SuperJackpot/rule"
                  element={<JackpotRule />}
                />
                <Route
                  path="main/SuperJackpot/star"
                  element={<JackpotStar />}
                />
                <Route path="main/RedeemGift" element={<RedeemGift />} />
                <Route path="activity/DailySignIn" element={<DailySignIn />} />
                <Route
                  path="activity/MemberPackage"
                  element={<MemberPackage />}
                />
                <Route
                  path="main/InvitationBonus/record"
                  element={<InvitaionRecord />}
                />
                <Route
                  path="activity/DailySignIn/record"
                  element={<AttendanceHistory />}
                />
                <Route
                  path="activity/ActivityDetail"
                  element={<ActivityDetail />}
                />
                <Route
                  path="activity/DailySignIn/Rules"
                  element={<GameRules />}
                />
                <Route
                  path="activity/FirstDeposit"
                  element={<FirstDeposit />}
                />
                <Route path="/teamsalery" element={<Salery />} />
                <Route path="/referbounce" element={<RefferalBounce />} />
                <Route path="/freebounce" element={<FreeBounse />} />
                <Route path="/daytask" element={<DayTask />} />
                <Route path="/dailysalery" element={<DailySalery />} />
                <Route path="/winningstreak" element={<WinningStreak />} />
                <Route path="/dailybetting" element={<DailyBetting />} />
                <Route path="/radeemgift" element={<RadeemGift />} />
                <Route path="/youtube" element={<Youtube />} />
                <Route path="/dailyreward" element={<DailyReward />} />

                {/* main */}

                <Route path="main" element={<Main />} />
                <Route
                  path="main/InvitationBonus"
                  element={<InvitaionBonus />}
                />
                <Route path="main/ActivityAward" element={<ActivityAward />} />
                <Route path="main/InvitationBonus/Rule" element={<Rule />} />
                <Route path="main/Laundry" element={<Laundry />} />
                <Route path="main/StrongBox" element={<StrongBox />} />
                <Route path="main/GameStats" element={<GameStatistics />} />
                <Route path="main/Language" element={<Language />} />
                <Route path="main/SettingCenter" element={<SettingCenter />} />
                <Route path="main/Feedback" element={<Feedback />} />
                <Route path="main/Notification" element={<Notifications />} />
                <Route path="main/About" element={<About />} />
                <Route
                  path="main/About/AboutDetail"
                  element={<ConfidentialityAgreement />}
                />
                <Route
                  path="main/About/RiskDisclosure"
                  element={<RiskDisclosureAgreement />}
                />
                <Route path="main/BetRecors" element={<BetRecords />} />
                <Route path="main/avatar" element={<Avatar />} />
                <Route path="main/Guide" element={<Beginner />} />

                <Route path="wallet/TransAction" element={<TransAction />} />

                <Route path="vip" element={<Vip />} />

                {/* promotion */}
                <Route path="promotion" element={<Promotion />} />
                <Route path="promotion/TeamReport" element={<TeamReport />} />
                <Route
                  path="promotion/PromotionRule"
                  element={<PromotionRule />}
                />
                <Route path="promotion/Server" element={<Server />} />
                <Route path="promotion/RebateRatio" element={<RebateRatio />} />
                <Route path="promotion/Subordinate" element={<Subordinate />} />
                <Route
                  path="promotion/PartnerReward"
                  element={<PartnerRewards />}
                />
                <Route
                  path="promotion/MyCommission"
                  element={<CommissionDetails />}
                />
                <Route
                  path="promotion/TeamSubrodinate"
                  element={<TeamSubordinate2 />}
                />
                <Route
                  path="promotion/PromotionShare"
                  element={<PromotionLink />}
                />

                {/* wallet */}
                <Route path="wallet" element={<Wallet />} />

                <Route path="wallet/Withdraw" element={<Withdraw />} />
                <Route
                  path="wallet/Withdraw/AddBankCard"
                  element={<AddBankCard />}
                />
                <Route
                  path="wallet/RechargeHistory"
                  element={<RechargeHistory />}
                />
                <Route
                  path="wallet/WithdrawalHistory"
                  element={<WithdrawHistory />}
                />
                {/* <Route path="pay" element={<PaymentPage />} /> */}
                <Route path="wallet/Recharge/pay" element={<PaymentPage />} />
                <Route path="wallet/Recharge/pay2" element={<PaymentPage2 />} />
                <Route path="wallet/Recharge/pay3" element={<PaymentPage3 />} />

                <Route
                  path="main/SettingCenter/changePassword"
                  element={<ChangePassword />}
                />
                <Route
                  path="main/SettingCenter/BindEmail"
                  element={<BindEmail />}
                />

                {/* wingo  */}
                <Route path="WinGo" element={<Wingo />} />
                <Route
                  path="BattingRecordWinGo"
                  element={<BattingRecordWinGo />}
                />
                <Route path="k3" element={<K3 />} />
                <Route path="5d" element={<FiveD />} />
                <Route path="trx" element={<Trx />} />
                <Route path="BattingRecordTrx" element={<BattingRecordTrx />} />
              </Route>

              {/* account */}
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot" element={<Forgot />} />

              <Route path="/admin/login" element={<Login2 />} />
            </Routes>
          </div>
        </>

        {/* admin dashboard */}
      </div>
    </>
  );
}

export default AppComponent;
