// assets

import "../../assets/styles/header.scss";
import myImage from "../../assets/images/search.png";
import myImage1 from "../../assets/images/Vector.png";
import myImage2 from "../../assets/images/header.png";

function Header() {
  return (
    <header className="my-header">
      <h2 className="my-header__title">Overview</h2>
      <div className="my-header__icons">
        <img src={myImage} alt="" />
        <img src={myImage1} alt="" />
      </div>
      <span className="my-header__name">Jones Ferdinand</span>
      <img src={myImage2} alt="" />
    </header>
  );
}

export default Header;
