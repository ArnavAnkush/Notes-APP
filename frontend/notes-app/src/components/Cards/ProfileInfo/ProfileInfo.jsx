import React from "react";
import "./ProfileInfo.scss";
import { getInitials } from "../../../utils/helper";

const ProfileInfo = ({ onLogout }) => {
  return (
    <div className="profile-container">
      <div className="profile-pic">{getInitials("Arnav Ankush")}</div>

      <div>
        <p>Arnav Ankush</p>
        <button className="" onClick={onLogout}>
          LogOut
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
