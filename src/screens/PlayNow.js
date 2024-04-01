import React, { useState } from "react";
import "../scss/PlayNow.scss";
import CoinStack from "../components/PlayNow/CoinStack";
import GoogleAd from "../components/GoogleAd";
import ListSection from "../components/Login/ListSection";
import { useNavigate } from "react-router";

export default function PlayNow() {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();


  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleQuiz = () => {
    navigate("/Quiz")
  }

  return (
    <div className="play-container">
      <div className="play-box">
        <CoinStack />
        <h1 className="play-heading">You have got 0 coins</h1>
        <p className="play-text">
          Check out more quizzes to test your skills and keep grabbing more
          coins!
        </p>
        <button
          type="button"
          className="btn btn-primary ani shine"
          // onClick={openModal}
          onClick={handleQuiz}
        >
          Play Now
        </button>
      </div>
      <GoogleAd />
      <ListSection />

      {/* {modalOpen && (
        <div
          className="modal"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          data-bs-backdrop="false"
          data-bs-scroll="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <button
                onClick={closeModal}
                type="button"
                className="btn-close me-auto"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

              <div className="modal-body">
                <img
                  alt="Get More Coins"
                  fetchpriority="high"
                  width="70"
                  height="74"
                  decoding="async"
                  data-nimg="1"
                  src="https://images.atmequiz.com/img/wrong_coinsBox.svg"
                  style={{ color: "transparent" }}
                />
                <h2
                  className="heading"
                  style={{
                    fontSize: "34px",
                    color: "#ff5050",
                    paddingTop: "0px",
                  }}
                >
                  Oops!
                </h2>
                <p className="pa">
                  You don't have enough coins to play this contest.
                </p>
                <div className="bonusModal_listCheck">
                  <button className="bonusModal_reportBtn">
                    <img
                      alt="Get More Coins"
                      fetchpriority="high"
                      width="30"
                      height="30"
                      decoding="async"
                      data-nimg="1"
                      src="https://images.atmequiz.com/img/videoIcon.svg"
                      style={{ color: "transparent" }}
                    />
                    Continue
                  </button>
                </div>
                <p style={{ marginTop: "8px", lineHeight: "18px" }}>
                  Click on video ad to get 100 reward coins.
                </p>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}
