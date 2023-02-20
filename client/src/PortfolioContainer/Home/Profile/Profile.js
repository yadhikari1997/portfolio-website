import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../Utilites/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://stackoverflow.com/questions/45558193/how-to-make-vs-code-change-language-to-javascript-react-when-open-a-jsx-file"
                target="_blank"
              >
                <i className="fa fa-facebook-square"></i>
              </a>
              <a
                href="https://github.com/yadhikari1997/portfolio-website"
                target="_blank"
              >
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="gighlighted-text">Yakeen</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 😎",
                    1000,
                    "Full stack Developer 💻",
                    1000,
                    "Mern stack Dev 📱",
                    1000,
                    "Cross Platform Dev 🔴",
                    1000,
                    "React/React Native 🌐",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of Building application with front and back end
              operations.
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}> Hire Me </button>
            <a href="resume.pdf" download="Yakeen resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>

  );
}
