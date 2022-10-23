import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Searchbar from "../../components/Searchbar/Searchbar";
import "./HomePage.css";

import UofT from "../../components/img/UofT.png";

export default function HomePage() {
  return (
    <div className="home-page-bg">
      <div className="home-page">
        <h1>Walnut</h1>
        <h2>University of Toronto’s Course Database and Comparison Tool</h2>
        <div style={{ height: "25px" }} />
        <SearchbarHome />
        <div style={{ height: "15px" }} />
        <Button
          label={"Search"}
          isSecondary
          style={{ boxShadow: "0px 0px 6px 2px #2e2e2e6a" }}
        />
        <div className="footer-logo">
          <img src={UofT} alt="UofT Logo" />
        </div>
      </div>
    </div>
  );
}

const SearchbarHome = () => {
  const placeholders = ["course code", "course name", "description", "keyword"];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [placeholderSwitch, setPlaceholderSwitch] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderSwitch(true);
      setTimeout(() => {
        setPlaceholderSwitch(false);
        setPlaceholderIndex(
          (prevPlaceholderIndex) => (prevPlaceholderIndex + 1) % 4
        );
      }, 350);
    }, 3100);
    return () => clearInterval(interval);
  }, []);
  return (
    <Searchbar
      style={{ width: "80%", maxWidth: "650px" }}
      placeholder={"Search by " + placeholders[placeholderIndex] + "..."}
      className={
        placeholderSwitch ? "text-input-search-placeholder-transition" : ""
      }
    ></Searchbar>
  );
};
