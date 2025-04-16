import React, { useState } from "react";
import { assets } from "../assets/assets";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo"><img src={assets.Logo}></img></div>
      <div className="navbar__links">
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
