import React from "react";
import "../Main/Main.css";
import { assets } from "../../assets/assets.js";

function Main() {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Dev</span>
          </p>
          <p>How can i help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Give me code of snake game build in python</p>
            <img src={assets.code_icon} alt="" />
          </div>
          <div className="card">
            <p>suggest me to make a healthy diet plan for me</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>
              suggest me some best books on productivity and also give summaries
            </p>
            <img src={assets.message_icon} alt="" />
          </div>
        </div>

        <div className="main-bottom">
            <div className="search-box">
                <input type="text" placeholder="Enter a prompt here"/>
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img src={assets.send_icon} alt="" />
                </div>
            </div>
            <p className="bottom-info">
                Gemini can display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
            </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
