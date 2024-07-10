import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { CiMenuBurger } from "react-icons/ci";

function Navbar() {
  const [showlinks, setshowlinks] = useState(false);
  const toggleShow = () => {
    setshowlinks(!showlinks);
  };
  return (
    <nav>
      <button onClick={toggleShow} className="btn">
        {showlinks ? <VscChromeClose size={32} /> : <CiMenuBurger size={32} />}
      </button>
      <div className="leftside">
        <ul id={showlinks ? "hidden" : ""}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Gallery</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      <div className="rightside">
        <input
          type="text"
          className="search"
          name=""
          id=""
          placeholder="search..."
        />
      </div>
    </nav>
  );
}

export default Navbar;
