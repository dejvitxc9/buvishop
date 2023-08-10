import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

function Strona(props) {
  return (
    <div className="App">
      <header>
        <h1>Buvi</h1>
        <Link to={"/logowanie"}>
          <div className="userStatus">
            <span>{props.status}</span>
            <img src="/images/konto.png" alt="konto"></img>
          </div>
        </Link>
        {props.menu}
        <Link to={"/sklep"}>
          <div className="menuButton">
            <p>Sklep</p>
          </div>
        </Link>
        <Link to={"/"}>
          <div className="menuButton">
            <p>Strona główna</p>
          </div>
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Strona;
