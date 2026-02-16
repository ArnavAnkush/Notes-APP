import React, { useState } from "react";
import "./Navbar.scss";
import ProfileInfo from "../Cards/ProfileInfo/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Input/SearchBar/SearchBar";
import logo from "../../../public/Untitled.svg";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate;

  const onLogout = () => {
    navigate("/login");
  };

  const handleSearch = () => {};
  const onClearSearch = () => {
    setSearchQuery("");
  };
  return (
    <div className="nav-container">
      <img src={logo} alt="" onClick={() => navigate("/dashboard")} />

      <SearchBar
        value={searchQuery}
        onChange={({ target }) => {
          setSearchQuery(target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />
      <ProfileInfo onLogout={onLogout} />
    </div>
  );
};

export default Navbar;
