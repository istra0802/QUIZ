import React from "react";
import "../scss/PlayNow.scss";
import CoinStack from "../components/PlayNow/CoinStack";
import GoogleAd from "../components/GoogleAd";
import ListSection from "../components/Login/ListSection";

export default function PlayNow() {
  return (
    <div className="play-container">
      <div className="play-box">
        <CoinStack />
        <h1 className="play-heading">You have got 0 coins</h1>
        <p className="play-text">
          {" "}
          Check out more quizzes to test your skills and keeps grabbing more
          coins!
        </p>
        <a className="ani shine btn" href="/" alt="">
          {" "}
          Play Now{" "}
        </a>
      </div>
      <GoogleAd />
      <ListSection />
    </div>
  );
}
