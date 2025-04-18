import React, { useState } from "react";
import { assets } from "../../assets/assets";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false); 

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
      setMenuOpen(false); 
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={assets.Logo} alt="Logo" />
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`navbar__links ${menuOpen ? "open" : ""}`}>
        <a
          href="#"
          className={active === "home" ? "active" : ""}
          onClick={() => scrollToSection("home")}
        >
          Home
        </a>
        <a
          href="#"
          className={active === "tickets" ? "active" : ""}
          onClick={() => scrollToSection("tickets")}
        >
          Tickets
        </a>
      </div>
    </nav>
  );
}
