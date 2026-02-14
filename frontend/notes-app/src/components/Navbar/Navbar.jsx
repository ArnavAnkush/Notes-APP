import React from "react";
import "./Navbar.scss";
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate;

  const onLogout = () => {
    navigate("/login");
  };
  return (
    <div className="nav-container">
      <h2>Notes</h2>

      <ProfileInfo onLogout={onLogout} />
    </div>
  );
};

export default Navbar;
