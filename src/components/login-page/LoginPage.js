import "./LoginPage.css";
import { useEffect, useState } from "react";

function Logowanie(props) {
  const accesCode = props.accesCode;

  function zaloguj(event) {
    event.preventDefault();

    let login = document.logowanie.lologin.value;
    let pass = document.logowanie.lopass.value;

    const prosbaLogowania = {
      prosbaLogin: login,
      prosbaPass: pass,
    };

    props.onZaloguj(prosbaLogowania);
  }

  const zalogujJako = (autoLogin, autoPassword) => {
    document.logowanie.lologin.value = autoLogin;
    document.logowanie.lopass.value = autoPassword;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const [pytanieOVerify, setPytanieVerify] = useState("");

  const mozeVerify = () => {
    let nowaRanga = document.rejestracja.selectranga.value;
    if (nowaRanga === "Administrator") {
      alert(
        "Kod dostępu np: wysłany na pocztę pracowniczą, lub SMS:\n" + accesCode
      );
      setPytanieVerify(
        <div className="form-group col-6">
          <label htmlFor="koddostepu">Kod dostępu</label>
          <input
            type="password"
            name="koddostepu"
            id="koddostepu"
            className="form-control"
            placeholder="****"
            pattern="[0-9]{4}"
            min={1000}
            max={9999}
          ></input>
        </div>
      );
    } else {
      setPytanieVerify("");
    }
  };

  function zarejestruj(event) {
    event.preventDefault();

    let nowyLogin = document.rejestracja.login.value;
    let noweHaslo = document.rejestracja.pass.value;
    let nowaRanga = document.rejestracja.selectranga.value;
    let noweImie = document.rejestracja.imie.value;
    let noweNaziwsko = document.rejestracja.nazwisko.value;
    let kodDostepuVerify = "0";

    if (nowaRanga === "Administrator") {
      kodDostepuVerify = document.rejestracja.koddostepu.value;
    }

    let mozliwoscDodawania = false;

    if (kodDostepuVerify !== "0") {
      if (kodDostepuVerify === accesCode) {
        mozliwoscDodawania = true;
      } else {
        alert("Błędny kod dostępu");
        mozliwoscDodawania = false;
        document.rejestracja.selectranga.value = "Klient";
        setPytanieVerify("");
      }
    } else {
      mozliwoscDodawania = true;
    }

    if (mozliwoscDodawania) {
      const nowyUzytkownik = {
        login: nowyLogin,
        password: noweHaslo,
        firstName: noweImie,
        lastName: noweNaziwsko,
        ranga: nowaRanga,
        koszykZakupow: [],
      };

      document.rejestracja.login.value = "";
      document.rejestracja.pass.value = "";
      document.rejestracja.selectranga.value = "Klient";
      document.rejestracja.imie.value = "";
      document.rejestracja.nazwisko.value = "";
      setPytanieVerify("");

      props.onUserAdd(nowyUzytkownik);
    }
  }

  const [welcomeEditedDiv, setWelcomeEditedDiv] = useState("");
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (props.showWelocomeScreen !== "") {
      setWelcomeEditedDiv(<></>);
      setAnimationKey(animationKey + 1);

      // const letters = Array.from(props.showWelocomeScreen);

      props.test("");

      const letters = props.showWelocomeScreen
        .split(" ")
        .map((word) => word.split(""));

      if (true) {
        setWelcomeEditedDiv(
          <div id="welcomeDiv" key={animationKey}>
            {letters.map((word, index) => (
              <div className="testerowski">
                <h1 className="h1Welcome">
                  {word.map((letter, index) => (
                    <span className="spanWelcome" key={index}>
                      {letter}
                    </span>
                  ))}
                </h1>
              </div>
            ))}
          </div>
        );
      }
    }
  }, [props.showWelocomeScreen]);

  return (
    <div className="logowaniePage">
      {welcomeEditedDiv}
      <div className="logowanienastrone">
        <h2>Zaloguj się do konta</h2>
        <form
          id="logowanie"
          name="logowanie"
          onSubmit={zaloguj}
          className="container"
        >
          <div className="row">
            <div className="form-group col-12">
              <label htmlFor="login">Login</label>
              <input
                type="email"
                name="lologin"
                id="lologin"
                className="form-control"
                placeholder="adres@przyklad.pl"
                required
              ></input>
            </div>
            <div className="form-group col-12">
              <label htmlFor="pass">Hasło</label>
              <input
                type="password"
                name="lopass"
                id="lopass"
                className="form-control"
                placeholder="********"
                required
              ></input>
            </div>
          </div>

          <input
            type="submit"
            value={"Zaloguj"}
            className="btn btn-primary login-button"
          />
        </form>
        <h2>Nie masz konta? Zarejestruj się</h2>
        <form
          id="rejestracja"
          name="rejestracja"
          onSubmit={zarejestruj}
          method="POST"
          className="container"
        >
          <div className="row">
            {/* <input type="hidden" name="form-name" value="rejestracja" /> */}
            <div className="form-group col-sm-12 col-md-6">
              <label htmlFor="imie">Imie</label>
              <input
                type="text"
                name="imie"
                id="imie"
                className="form-control"
                placeholder="Imię"
                required
              ></input>
            </div>
            <div className="form-group col-sm-12 col-md-6">
              <label htmlFor="nazwisko">Nazwisko</label>
              <input
                type="text"
                name="nazwisko"
                id="nazwisko"
                className="form-control"
                placeholder="Nazwisko"
                required
              ></input>
            </div>
            <div className="form-group col-sm-12 col-md-6">
              <label htmlFor="login">Login</label>
              <input
                type="email"
                name="login"
                id="login"
                className="form-control"
                placeholder="adres@przyklad.pl"
                required
              ></input>
            </div>
            <div className="form-group col-sm-12 col-md-6">
              <label htmlFor="pass">Hasło</label>
              <input
                type="password"
                name="pass"
                id="pass"
                className="form-control"
                placeholder="********"
                required
              ></input>
            </div>
            <div className="form-group col-sm-12 col-md-6">
              <label htmlFor="selectranga">Typ konta:</label>
              <br />
              <select
                id="selectranga"
                name="selectranga"
                className="form-select"
                onChange={mozeVerify}
              >
                <option value={"Klient"} defaultChecked>
                  Klient
                </option>
                <option value={"Administrator"}>Administrator</option>
              </select>
            </div>
          </div>

          {pytanieOVerify}

          <input
            type="submit"
            value={"Zarejestruj"}
            className="btn btn-success login-button"
          />
        </form>
      </div>

      <div className="opcjeLogowania">
        <section className="przykladKonto" onClick={() => props.bypas()}>
          Wyloguj
        </section>
        <h1>Konta DEMO:</h1>
        <section
          className="przykladKonto"
          onClick={() => zalogujJako("admin@buvi.com", "admin123#")}
        >
          Administrator
        </section>
        <section
          className="przykladKonto"
          onClick={() => zalogujJako("user1@gmail.com", "qwerty12#")}
        >
          Uzytkownik1
        </section>
        <section
          className="przykladKonto"
          onClick={() => zalogujJako("user2@gmail.com", "jnh@s21331sSA")}
        >
          Uzytkownik2
        </section>
        <section
          className="przykladKonto"
          onClick={() => zalogujJako("user3@gmail.com", "pONdfjkjcz#@!")}
        >
          Uzytkownik3
        </section>
      </div>
    </div>
  );
}
export default Logowanie;
