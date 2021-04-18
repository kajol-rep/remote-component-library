import "./styles.css";

import {
  HiLightningBolt,
  HiOutlineLightningBolt,
  HiMenu
} from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { ComponentRouter } from "./Router";
const listOfComponents = [
  "Alert",
  "Avatar",
  "Badge",
  "Button",
  "Card",
  "Modal",
  "Input box"
];

export default function App() {
  const [component, setComponent] = useState("HOME");
  const [darkMode, setDarkMode] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const handleClick = (evt) => {
    setComponent(evt.target.innerText);
  };
  const handleDropdown = () => {
    setDropDown(!dropDown);
  };
  return (
    <div className="App">
      <nav className="adjust-nav padding-one">
        <div className="nav-content position-relative">
          <div className="menu">
            <HiMenu size="2rem" onClick={() => handleDropdown()} />
          </div>
          <div className="nav-header">
            <div className="arrow-down1-sm arrow-down1-left top position-absolute"></div>
            <div className="arrow-down2-sm arrow-down2-left top position-absolute"></div>
            <div className="arrow-down3-sm arrow-down3-left top position-absolute"></div>
          </div>
          <div className="medium-text pointer nav-item" onClick={handleClick}>
            HOME
          </div>

          <div
            onClick={() => setDarkMode(!darkMode)}
            className="medium-text pointer"
          >
            {darkMode ? <HiLightningBolt /> : <HiOutlineLightningBolt />}
          </div>
          <a
            style={{ color: "white" }}
            href="https://github.com/kajol-rep/Component-Library"
            className="medium-text"
          >
            <FaGithub />
          </a>
        </div>
      </nav>
      <div style={{ display: dropDown ? "block" : "none" }}>
        <div className="dropdown ">
          <div
            className="medium-text padding-one pointer"
            onClick={handleClick}
          >
            Home
          </div>
          <div className="medium-text padding-one">Components</div>

          <div className="dropdown-content">
            <ul className="spaced-list list-style padding-one">
              {listOfComponents.map((i) => (
                <li className="pointer" onClick={handleClick} key={i}>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={darkMode ? "sidebar-dark-mode" : "sidebar"}>
        <div
          style={{ color: darkMode ? "white" : "black" }}
          className="medium-text padding-one"
        >
          Components
        </div>
        <ul className="spaced-list list-style padding-one">
          {listOfComponents.map((i) => (
            <li className="pointer" onClick={handleClick} key={i}>
              {i}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={
          darkMode ? "content padding-sides dark-mode" : "content padding-sides"
        }
      >
        <ComponentRouter comp={component} />
      </div>
    </div>
  );
}
