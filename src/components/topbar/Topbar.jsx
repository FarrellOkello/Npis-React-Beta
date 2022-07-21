import React from "react";
import "./Topbar.css";
import { NotificationsNone, Settings, Language } from "@material-ui/icons";
import coatOfArms from "../../assets/img/Coat_of_arms.png";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            <img
              src={coatOfArms}
              // src={"../../assets/CoatOfArms.jpg"}
              alt=""
              className="topLogo"
            />
          </span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
