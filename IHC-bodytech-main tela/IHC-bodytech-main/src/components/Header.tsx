import React from "react";
import logo from '../noBgWhite.png';


const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo BodyTech" />
      </div>
      <div className="profile-pic">KL</div>
    </header>
  );
};

export default Header;
