import React from "react";
import "./App.css";
import navpic from "./img/earth-africa-solid.svg";
export default function Navbar() {
  return (
    <div className="navbar">
      <img src={navpic} alt="navpic" className="navpic" />
      <h1 className="navtext">my travel journal.</h1>
    </div>
  );
}
