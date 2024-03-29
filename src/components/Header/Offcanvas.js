import React from "react";
import "../../scss/HomePage.scss";
import "../../scss/Offcanvas.scss";
import male from "../../images/male-user-avatar.jpg";
import "@fortawesome/fontawesome-free/css/all.css";

const CustomOffcanvas = () => {
  return (
    <div
      className="offcanvas offcanvas-Header text-white "
      tabIndex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
      style={{ top: "0px", width: "370px"}}
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
          <button className="header_btn header_b" href="/">
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
        className="offcanvas-body bg"
        style={{ borderTop: "1px solid #4248b2", margin:"0px" , paddingTop:"0px"}}
      >
        <div className="menu_items ">
          <div
            className="nav_item my-2 "
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="nav_icon ">
              <i
                className="bi bi-bar-chart-line-fill"
                style={{ height: "21px", width: "23px" }}
              ></i>
            </div>
            <div  style={{ fontWeight: "500" , color: "#ffffffba" }}>
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
            <div  style={{ fontWeight: "500" , color: "#ffffffba"  }}>
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
            <div  style={{ fontWeight: "500", color: "#ffffffba"  }}>
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
            <div  style={{ fontWeight: "500", color: "#ffffffba"  }}>
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
            <div style={{ fontWeight: "500",  color: "#ffffffba"  }}>
              Contact Us
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
                className="bi bi-flag"
                style={{ height: "21px", width: "23px" }}
              ></i>
            </div>
            <div  style={{ fontWeight: "500", color: "#ffffffba" }}>
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
              <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div className="contact_icon_cover">
              <i class="fa-brands fa-twitter" style={{width:"12px", height:"23px"}}></i>
            </div>
            <div className="contact_icon_cover">
              <i class="fa-brands fa-instagram"></i>
            </div>
            <div className="contact_icon_cover">
              <i class="fa-brands fa-pinterest-p"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomOffcanvas;
