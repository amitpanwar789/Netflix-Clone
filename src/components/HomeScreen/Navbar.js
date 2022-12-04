import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
      onClick={()=>history.push("/")}
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img
        onClick={()=>history.push("/profile")}
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Smile"
      />
    </div>
  );
}
