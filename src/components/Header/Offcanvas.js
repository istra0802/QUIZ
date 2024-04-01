import React, { useState } from "react";
import "../../scss/HomePage.scss";
import "../../scss/Offcanvas.scss";
import "../../scss/ReportIssue.scss";
import male from "../../images/male-user-avatar.jpg";
import "@fortawesome/fontawesome-free/css/all.css";
import { useNavigate } from "react-router-dom";

const CustomOffcanvas = () => {

  const [showReport, setShowReport] = useState(false);
  const [ mainModal, setMainModal] = useState(false);

  const toggleReport = () => {
    setShowReport(!showReport);
  };

  const handleModalClose = () => {
    setMainModal(false);
  }

  const handleReportClose = () => {
    setShowReport(false);
  };

  const reportData = [
    { id: 1, label: "It's not responding" },
    { id: 2, label: "Another issue" },
    
  ]; 
  const navigate = useNavigate(); // Get the navigate function

  const handleLogin = () => {
    navigate("/login")
  }
  const handleContestRuleClick = () => {
    navigate("/rules"); // Navigate to the Contest Rule page
  };

  return (
    <div
      className="offcanvas offcanvas-Header text-white "
      tabIndex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
      style={{ top: "0px", width: "370px" }}
      data-bs-scroll="true"
      data-bs-backdrop="false"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">
          <img src={male} alt="/" />
        </h5>
        <div className=" text-white user">
          <h3>
            <span className=" header_userDetails">Guest</span>
          </h3>
          <div className="header_contenteditable">
            <span>Play Quiz & earn coins</span>
          </div>
          <button className="header_btn header_b" onClick={handleLogin}>
            SIGN IN
          </button>
        </div>
        <button
          type="button"
          className="btn-close ms-auto btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          style={{ marginTop: "-80px" }}
        ></button>
      </div>

      <div
        className="offcanvas-body bg "
        style={{ borderTop: "1px solid #4248b2", margin: "0px", paddingTop: "0px" }}
      >
        <div className="menu_items ">
          <div
            className="nav_item my-2 "
            style={{ display: "flex", alignItems: "center" }}
            onClick={handleContestRuleClick}
          >
            <div className="nav_icon ">
              <i
                className="bi bi-bar-chart-line-fill"
                style={{ height: "21px", width: "23px" }}
              ></i>
            </div>
            <div style={{ fontWeight: "500", color: "#ffffffba" }}>
              {" "}
              Contest Rules
            </div>
          </div>

        </div>
        <div className="menu_items ">
          <div
            className="nav_item my-2 "
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="nav_icon text-white">
              <i
                className="bi bi-database"
                style={{ height: "21px", width: "23px" }}
              ></i>
            </div>
            <div style={{ fontWeight: "500", color: "#ffffffba" }}>
              {" "}
              Coin History
            </div>
          </div>
        </div>
        <div className="menu_items ">
          <div
            className="nav_item my-2 "
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="nav_icon text-white">
              <i
                className="bi bi-chat-square-text"
                style={{ height: "21px", width: "23px" }}
              ></i>
            </div>
            <div style={{ fontWeight: "500", color: "#ffffffba" }}>
              Blogs
            </div>
          </div>
        </div>
        <div className="menu_items ">
          <div
            className="nav_item my-2 "
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="nav_icon text-white">
              <i
                className="bi bi-person"
                style={{ height: "21px", width: "23px" }}
              ></i>
            </div>
            <div style={{ fontWeight: "500", color: "#ffffffba" }}>
              About Us
            </div>
          </div>
        </div>
        <div className="menu_items ">
          <div
            className="nav_item my-2 "
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="nav_icon text-white">
              <i
                className="bi-chat-left"
                style={{ height: "21px", width: "23px" }}
              ></i>
            </div>
            <div style={{ fontWeight: "500", color: "#ffffffba" }}>
              Contact Us
            </div>
          </div>
        </div>
        <div className="menu_items">
          <div
            className="nav_item my-2 "
            style={{ display: "flex", alignItems: "center" }}
            type="button"
            onClick={toggleReport}
          >
            <div className="nav_icon text-white">
              <i
                className="bi bi-flag"
                style={{ height: "21px", width: "23px" }}
              ></i>
            </div>
            <div style={{ fontWeight: "500", color: "#ffffffba" }}>
              {" "}
              Report an Issue{" "}
            </div>
          </div>
        </div>

        <div className="offcanvas_connect">
          <div className="contact_text text-white">
            <span> Connect with us </span>
          </div>
          <div className="contact_wrap text-white">
            <div className="contact_icon_cover">
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div className="contact_icon_cover">
              <i className="fa-brands fa-twitter" style={{ width: "12px", height: "23px" }}></i>
            </div>
            <div className="contact_icon_cover">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="contact_icon_cover">
              <i className="fa-brands fa-pinterest-p"></i>
            </div>
          </div>
        </div>
      </div>

      {showReport && (
        <div className="report_inner">
          <div className="report_wrapper">
            <div className="report_close" onClick={handleReportClose}></div>
            <h1 style={{ fontSize: "18px", color: "#fff" }}>Report an Issue</h1>
            <p style={{ color: "hsla(0,0%,100%,.64", fontSize: "14px" }}>
              What kind of problem have you encountered?
            </p>
            <div className="report_list">
              {reportData.map((item) => (
                <div className="repost_listCheck" key={item.id}>
                  <div className="listt1">
                    <div>
                      <input
                        id={item.id}
                        className="custmCheck"
                        type="radio"
                        value={item.id}
                        name="issue"
                      ></input>
                      <label
                        htmlFor={item.id}
                        className="custmcheck1"
                        style={{ color: "#fff" }}
                      >
                        {item.label}
                      </label>
                    </div>
                  </div>
                </div>
              ))}
              <div className="report_btn" style={{marginTop:"16px"}}><button className="rep_btn">Send Feedback</button></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomOffcanvas;
