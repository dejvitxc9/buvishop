import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

function Strona(props) {
  return (
    <div className="App">
      <header>
        <h1>Buvi</h1>
        <nav>
          <Link to={"/"} className="link"> 
            <div className="menuButton">
              <p>Strona główna</p>
            </div>
          </Link>
          <Link to={"/sklep"} className="link">
            <div className="menuButton">
              <p>Sklep</p>
            </div>
          </Link>
          {props.menu}
          <Link to={"/logowanie"} className="link">
            <div className="userStatus">
              <span className="userStatusSpan">{props.status}</span>
              <img src="/images/konto.png" alt="konto"></img>
            </div>
          </Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Strona;
