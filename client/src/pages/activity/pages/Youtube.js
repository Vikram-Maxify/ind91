import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Youtube = () => {
  return (
    <div>
      <div className="bg-[#fe6537] p-1 py-1 sticky top-0">
        <div className="container-section flex  items-center relative py-0">
          <button className="absolute">
            <Link to={"/activity"}>
              {" "}
              <IoIosArrowBack className="text-xl text-white" />
            </Link>
          </button>
          <div className="  text-center flex justify-center items-center m-auto">
            <img src="/logo.png" alt="" className="w-28" />
          </div>
        </div>
      </div>
      <div className="bg-[#fe6537] p-5 pb-[80px] space-y-3">
        <h1 className="font-bold text-4xl text-white text-center">
          YouTube creative videos
        </h1>
        <div>
          <p className="text-[12px] font-[400] text-white text-center">
            Creative videos earn bonuses{" "}
          </p>
        </div>
      </div>

      <div class=" mx-auto p-4">
        <h2 class="text-sm text-center">Video Content</h2>
        <p class="text-center text-[12px]">
          Create video content related to games and receive bonuses
        </p>
        <table class="min-w-full mt-4 border border-border text-center">
          <thead>
            <tr class="bg-[#ff5d32] text-white">
              <th class="border border-border p-2">VIEWER</th>
              <th class="border border-border p-2">INCOME</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-card">
              <td class="border border-border p-2">1000+</td>
              <td class="border border-border p-2">₹788</td>
            </tr>
            <tr class="bg-card">
              <td class="border border-border p-2">2500+</td>
              <td class="border border-border p-2">₹1588</td>
            </tr>
            <tr class="bg-card">
              <td class="border border-border p-2">5000+</td>
              <td class="border border-border p-2">₹2088</td>
            </tr>
            <tr class="bg-card">
              <td class="border border-border p-2">10000+</td>
              <td class="border border-border p-2">₹5088</td>
            </tr>
            <tr class="bg-card">
              <td class="border border-border p-2">100000+</td>
              <td class="border border-border p-2">₹25888</td>
            </tr>
          </tbody>
        </table>

        <p class="text-center text-muted-foreground mt-4">
          Telegram{" "}
          <a href="http://t.me/Tchrjimi_Jalwa9game" class="text-primary">
            @Jalwa9game
          </a>
        </p>

        <hr class="my-4 border-muted" />

        <h3 class="text-sm font-semibold">Note</h3>
        <ol class="list-decimal list-inside text-[12px] text-gray-500">
          <li>
            You should contact your agent and provide your video link before you
            start.
          </li>
          <li>
            Each member can claim this bonus upon reaching the viewing
            requirements.
          </li>
          <li>
            Your downline should not use the same banking details and the same
            IP address. Once discovered, you will lose eligibility to claim the
            bonus.
          </li>
          <li>
            To ensure the safety of both parties, Jalwa9game has the right to
            request valid documents from members for verification and to prevent
            identity theft, regardless of whether the member is eligible or not.
          </li>
          <li>
            Participation in this activity implies your agreement to these terms
            and conditions.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Youtube;
