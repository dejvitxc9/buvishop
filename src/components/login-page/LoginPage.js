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
        <>
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
        </>
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

      const letters = Array.from(props.showWelocomeScreen);

      props.test("");

      if (true) {
        setWelcomeEditedDiv(
          <div id="welcomeDiv" key={animationKey}>
            <h1 className="h1Welcome">
              {letters.map((letter, index) => (
                <span className="spanWelcome" key={index}>
                  {letter}
                </span>
              ))}
            </h1>
          </div>
        );
      }
    }
  }, [props.showWelocomeScreen]);

  return (
    <div className="logowaniePage">
      {welcomeEditedDiv}
      <div className="logowanienastrone">
        <h1>Zaloguj się do konta</h1>
        <form id="logowanie" name="logowanie" onSubmit={zaloguj}>
          <label htmlFor="login">Login</label>
          <input
            type="text"
            name="lologin"
            id="lologin"
            className="form-control"
            placeholder="adres@email.com"
            required
          ></input>

          <label htmlFor="pass">Hasło</label>
          <input
            type="password"
            name="lopass"
            id="lopass"
            className="form-control"
            placeholder="********"
            required
          ></input>

          <input type="submit" value={"Zaloguj"} className="btn btn-primary" />
        </form>
        <h1>Nie masz konta? Zarejestruj się</h1>
        <form
          id="rejestracja"
          name="rejestracja"
          onSubmit={zarejestruj}
          method="POST"
        >
          {/* <input type="hidden" name="form-name" value="rejestracja" /> */}

          <section className="partLog">
            <label htmlFor="login">Login</label>
            <input
              type="text"
              name="login"
              id="login"
              className="form-control"
              placeholder="adres@email.com"
              required
            ></input>

            <label htmlFor="pass">Hasło</label>
            <input
              type="password"
              name="pass"
              id="pass"
              className="form-control"
              placeholder="********"
              required
            ></input>

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
          </section>
          <section className="partLog">
            <label htmlFor="imie">Imie</label>
            <input
              type="text"
              name="imie"
              id="imie"
              className="form-control"
              placeholder="Imie użytkownika"
              required
            ></input>

            <label htmlFor="nazwisko">Nazwisko</label>
            <input
              type="text"
              name="nazwisko"
              id="nazwisko"
              className="form-control"
              placeholder="Nazwisko użytkownika"
              required
            ></input>

            {pytanieOVerify}
          </section>

          <button type="submit" className="btn btn-success btn-custom">
            Zarejestruj
          </button>
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
