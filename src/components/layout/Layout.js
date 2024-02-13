import { Link, Outlet } from "react-router-dom";
import "./Layout.css";
import { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

function Strona({ status, currentUser }) {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMenu = () => {
    setClick(false);
  };
  const [menu, setMenu] = useState(<></>);

  useEffect(() => {
    if (currentUser != null) {
      if (currentUser.ranga == "Administrator") {
        setMenu(
          <li className="nav-item">
            <Link to={"/dodawanie"} onClick={closeMenu}>
              <p>Dodawanie do oferty</p>
            </Link>
          </li>
        );
      } else if (currentUser.ranga == "Klient") {
        setMenu(
          <>
            <li className="nav-item">
              <Link to={"/koszyk"} onClick={closeMenu}>
                <p>Koszyk: {currentUser.koszykZakupow.length}</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/kontakt"} onClick={closeMenu}>
                <p>Kontakt</p>
              </Link>
            </li>
          </>
        );
      }
    }
  }, [currentUser]);
  

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
          <li>
            <Link to={"/sklep"} onClick={closeMenu}>
              <p className="nav-item">Sklep</p>
            </Link>
          </li>
          {menu}
          <li className="nav-item-user">
            <Link to={"/logowanie"} onClick={closeMenu}>
              <div className="userStatus">
                <span className="userStatusSpan">{status}</span>
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
