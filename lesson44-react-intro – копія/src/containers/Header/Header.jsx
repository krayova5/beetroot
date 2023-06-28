// assets

import "../../assets/styles/containers/header.scss";


function Header() {
  return (
    <header className="my-header">
      <span className="logo"></span>
      <h2 className="my-title">Blog name</h2>
      <nav className="my-nav">
        <span className="my-nav-item"></span>
        <span className="my-nav-item"></span>
        <span className="my-nav-item"></span>
        <span className="my-nav-item"></span>
        <span className="my-nav-item"></span>
      </nav>
    </header>
  );
}

export default Header;
