import React, { useState } from "react";
import "./style.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">Dressify</h1>

      <div
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>Home</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>About</li>
      </ul>
    </nav>
  );
}
