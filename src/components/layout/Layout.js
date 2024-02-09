import { Link, Outlet } from "react-router-dom";
import "./Layout.css";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

function Strona(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMenu = () => {
    setClick(false);
  };

  return (
    <div className="App">
      <nav className="navigationbar">
        <h1>BUVI</h1>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} className="primary-font-color" />
          ) : (
            <FaBars size={30} className="primary-font-color" />
          )}
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to={"/"} onClick={closeMenu} className="primary-font-color">
              <p>Strona główna</p>
            </Link>
          </li>
          <li >
            <Link to={"/sklep"} onClick={closeMenu}>
              <p className="nav-item">Sklep</p>
            </Link>
          </li>
          {props.menu}
          <li className="nav-item-user">
            <Link to={"/logowanie"} onClick={closeMenu}>
              <div className="userStatus">
                <span className="userStatusSpan">{props.status}</span>
                <img src="/images/konto.png" alt="konto" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Strona;
