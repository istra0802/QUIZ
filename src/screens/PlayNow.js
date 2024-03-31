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
        <a type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" className="ani shine btn" href="/" alt="">
          {" "}
          Play Now{" "}
        </a>
      </div>
      <GoogleAd />
      <ListSection />

      <div className="play">
        <div class="modal "  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-body">
              <img alt="Get More Coins" fetchpriority="high" width="70" height="74" decoding="async" data-nimg="1" src="https://images.atmequiz.com/img/wrong_coinsBox.svg" style={{color: "transparent"}}/>
              <h2 className="heading" style={{fontSize:"34px", color:"#ff5050" , paddingTop:"0px" }} > Oops! </h2>
              <p className="pa"> You don't have enough coins to play this contest.</p>
              <div><div class="bonusModal_listCheck"><button class="bonusModal_reportBtn"><img alt="Get More Coins" fetchpriority="high" width="30" height="30" decoding="async" data-nimg="1" src="https://images.atmequiz.com/img/videoIcon.svg" style={{color: "transparent"}}/>Continue</button></div><p style={{marginTop:"8px", lineHeight:"18px"}}>Click on video ad to get 100 reward coins.</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
