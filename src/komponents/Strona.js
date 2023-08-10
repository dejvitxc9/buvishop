import { Link, Outlet } from "react-router-dom";
import "./Strona.css";

function Strona(props) {
  let status = props.status;
  let akcja = props.akcja;

  return (
    <div className="App">
      <header>
        <h1>Buvi</h1>
        <Link to={"/logowanie"}>
          <div className="rankUser">
            <span>{status}</span>
            <img src="/images/konto.png" alt="konto"></img>
          </div>
        </Link>
        {akcja}
        <Link to={"/oferta"}>
          <div className="guzikMenu">
            <p>Oferta</p>
          </div>
        </Link>
        <Link to={"/"}>
          <div className="guzikMenu">
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
