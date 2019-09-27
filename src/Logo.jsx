import React from "react";
import "./index.css";

function Logo() {
  return (
    <div clasName="Container">
      <img src="https://duckduckgo.com/assets/logo_homepage.normal.v108.svg" href={window.scrollTo(0, 250)} className="mainLogo" alt="mainLogo" />

      <span className="tag">Conocer más</span>
    </div>
  );
}

export default Logo;
