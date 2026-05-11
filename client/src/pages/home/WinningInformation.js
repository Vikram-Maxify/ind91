// src/Slider.js
import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Avatar1 from "../../assets/avatar1.png";
import Avatar2 from "../../assets/avatar2.png";
import Avatar3 from "../../assets/avatar3.png";
import Avatar4 from "../../assets/avatar4.png";
import Avatar5 from "../../assets/avatar5.png";

import WinImg1 from "../../assets/jaiclub/5d.png";
import WinImg2 from "../../assets/jaiclub/pg-game.png";
import WinImg3 from "../../assets/jaiclub/poker.png";
import WinImg4 from "../../assets/jaiclub/snoop-dog.png";
import WinImg5 from "../../assets/jaiclub/trx.png";
import WinImg6 from "../../assets/jaiclub/topbet.png";
import WinImg7 from "../../assets/jaiclub/pirate-jilli.png";
import WinImg8 from "../../assets/jaiclub/naginn.png";
import WinImg9 from "../../assets/jaiclub/evo.png";
import WinImg10 from "../../assets/jaiclub/wingo.png";
import bannerMain from "../../assets/jaiclub/titleBgLeft.png";
import bannerarrow from "../../assets/jaiclub/banner-bg-right.svg";


import icon from "../../assets/winningicon.svg";

// Random text and number generators
const generateRandomText = () => {
  const prefix = "MEM***";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = prefix;
  for (let i = 0; i < 3; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

const getRandomINumber = () => {
  return (Math.random() * 1000).toFixed(2);
};

// Data for the avatars and winning images
const data = [
  {
    text: generateRandomText(),
    image: Avatar1,
    img: WinImg1,
    number: getRandomINumber(),
  },
  {
    text: generateRandomText(),
    image: Avatar2,
    img: WinImg2,
    number: getRandomINumber(),
  },
  {
    text: generateRandomText(),
    image: Avatar3,
    img: WinImg3,
    number: getRandomINumber(),
  },
  {
    text: generateRandomText(),
    image: Avatar4,
    img: WinImg4,
    number: getRandomINumber(),
  },
  {
    text: generateRandomText(),
    image: Avatar5,
    img: WinImg5,
    number: getRandomINumber(),
  },
  {
    text: generateRandomText(),
    image: Avatar5,
    img: WinImg6,
    number: getRandomINumber(),
  },
  {
    text: generateRandomText(),
    image: Avatar5,
    img: WinImg7,
    number: getRandomINumber(),
  },
  {
    text: generateRandomText(),
    image: Avatar5,
    img: WinImg8,
    number: getRandomINumber(),
  },
  {
    text: generateRandomText(),
    image: Avatar5,
    img: WinImg9,
    number: getRandomINumber(),
  },
  {
    text: generateRandomText(),
    image: Avatar5,
    img: WinImg10,
    number: getRandomINumber(),
  },
];

// Function to pick a random item from the data array
const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

// Component for showing winning information
const WinningInformation = () => {
  const [slides, setSlides] = useState(data.slice(0, 5));
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomItem = getRandomItem(data);
      const newSlide = { ...randomItem, id: uuidv4() };

      setSlides((prevSlides) => {
        const updated = [...prevSlides, ...prevSlides, ...prevSlides, newSlide]; // add at end
        return updated.slice(-30); // keep smooth buffer
      });

      // 👇 Smooth scroll left
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 120, // adjust based on card width
          behavior: "smooth",
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      {/* HEADER */}
      <div className="bg-[#32264B] rounded-xl">

      
      <div className="flex items-center h-[47.8px] relativesection-linear">

        {/* LEFT MAIN BG */}
        <div
          className="relative flex items-center h-full px-6 min-w-[120px] shadow-2xl"
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
            WinningInformation
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

      {/* CARD SLIDER */}
      <div className="winning-card-container">
        <div className="winning-scroll" ref={scrollRef}>
          {slides.map((slide, index) => (
            <div
              key={slide.id || index}
              className={`winning-card ${index === slides.length - 1 ? "active" : ""
                }`}
            >
              <img src={slide.img} className="winning-img" alt="" />

              <p className="user">{slide.text}</p>
              <p className="receive">Receive</p>
              <p className="amount">₹{slide.number}</p>
            </div>
          ))}
        </div>
      </div>

      </div>

    </>
  );
};


export default WinningInformation;
