import "./bootstrap.css";
import "./App.css";

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Oferta from "./komponents/wyswietlanie/Oferta";
import Strona from "./komponents/Strona";
import Glowna from "./komponents/glowna/Glowna";
import Dodajbuta from "./komponents/dodawanie/Dodajbuta";
import Logowanie from "./komponents/logowanie/Logowanie";
import Kontakt from "./komponents/kontakt/Kontakt";
import Koszyk from "./komponents/koszyk/Koszyk";

function App() {
  const accesCode = "1234";

  const shoesData = [
    {
      id: 0,
      brand: "Adidas",
      model: "Ultraboost 21",
      size: [40, 41, 43, 44, 45],
      material: "tekstylia",
      price: 349.99,
      quantity: 20,
    },
    {
      id: 1,
      brand: "Nike",
      model: "Air Force 1",
      size: [39, 40, 41, 42, 46],
      material: "skóra naturalna",
      price: 449.99,
      quantity: 15,
    },
    {
      id: 2,
      brand: "New Balance",
      model: "990v5",
      size: [40, 41, 42, 43, 44],
      material: "skóra naturalna",
      price: 259.99,
      quantity: 8,
    },
    {
      id: 3,
      brand: "Reebok",
      model: "Classic Leather",
      size: [39, 41, 42, 43],
      material: "skóra syntetyczna",
      price: 249.99,
      quantity: 13,
    },
    {
      id: 4,
      brand: "Puma",
      model: "RS-X",
      size: [42, 43, 44, 45],
      material: "tekstylia",
      price: 349.99,
      quantity: 12,
    },
    {
      id: 5,
      brand: "Adidas",
      model: "NMD_R1",
      size: [39, 40, 42, 43, 44],
      material: "tekstylia",
      price: 549.99,
      quantity: 18,
    },
    {
      id: 6,
      brand: "Nike",
      model: "Air Max 270",
      size: [39, 41, 42, 43, 44],
      material: "tekstylia",
      price: 219.99,
      quantity: 10,
    },
    {
      id: 7,
      brand: "New Balance",
      model: "327",
      size: [39, 40, 42, 43],
      material: "tekstylia",
      price: 349.99,
      quantity: 15,
    },
    {
      id: 8,
      brand: "Reebok",
      model: "Club C 85",
      size: [39, 40, 42, 43],
      material: "skóra naturalna",
      price: 299.99,
      quantity: 20,
    },
    {
      id: 9,
      brand: "Puma",
      model: "Cali",
      size: [41, 42, 43, 44],
      material: "skóra syntetyczna",
      price: 329.99,
      quantity: 7,
    },
    {
      id: 10,
      brand: "Adidas",
      model: "Superstar",
      size: [39, 41, 42, 43, 44],
      material: "skóra syntetyczna",
      price: 299.99,
      quantity: 15,
    },
    {
      id: 11,
      brand: "Nike",
      model: "Blazer Mid '77 Vintage",
      size: [39, 41, 42, 43],
      material: "skóra naturalna",
      price: 499.99,
      quantity: 8,
    },
    {
      id: 12,
      brand: "New Balance",
      model: "991",
      size: [39, 40, 42, 43],
      material: "skóra naturalna",
      price: 919.99,
      quantity: 12,
    },
    {
      id: 13,
      brand: "Reebok",
      model: "Aztrek",
      size: [41, 42, 43],
      material: "tekstylia",
      price: 249.99,
      quantity: 20,
    },
    {
      id: 14,
      brand: "Puma",
      model: "Future Rider",
      size: [39, 40, 41, 43],
      material: "tekstylia",
      price: 299.99,
      quantity: 6,
    },
    {
      id: 15,
      brand: "Adidas",
      model: "Stan Smith",
      size: [42, 43, 44, 45, 46],
      material: "skóra naturalna",
      price: 349.99,
      quantity: 18,
    },
    {
      id: 16,
      brand: "Nike",
      model: "Air Max 97",
      size: [40, 41, 42, 43],
      material: "tekstylia",
      price: 549.99,
      quantity: 10,
    },
    {
      id: 17,
      brand: "New Balance",
      model: "574",
      size: [40, 42, 43, 45, 46],
      material: "tekstylia",
      price: 399.99,
      quantity: 5,
    },
    {
      id: 18,
      brand: "Reebok",
      model: "Instapump Fury",
      size: [40, 41, 42],
      material: "tekstylia",
      price: 499.99,
      quantity: 3,
    },
    {
      id: 19,
      brand: "Puma",
      model: "Thunder Spectra",
      size: [40, 41, 42, 43],
      material: "tekstylia",
      price: 449.99,
      quantity: 7,
    },
    {
      id: 20,
      brand: "Vans",
      model: "Authentic",
      size: [38, 39, 40, 41, 42],
      material: "tkanina",
      price: 79.99,
      quantity: 20
      },
      {
      id: 21,
      brand: "Converse",
      model: "Chuck Taylor All Star",
      size: [36, 37, 38, 39, 40],
      material: "tkanina",
      price: 99.99,
      quantity: 15
      },
      {
      id: 22,
      brand: "Puma",
      model: "Suede Classic",
      size: [38, 39, 40, 41, 42],
      material: "zamsz",
      price: 129.99,
      quantity: 8
      },
      {
      id: 23,
      brand: "Adidas",
      model: "Superstar",
      size: [37, 38, 39, 40, 41],
      material: "skóra naturalna",
      price: 199.99,
      quantity: 13
      },
      {
      id: 24,
      brand: "Reebok",
      model: "Club C 85",
      size: [36, 37, 38, 39, 40],
      material: "skóra naturalna",
      price: 149.99,
      quantity: 12
      },
      {
      id: 25,
      brand: "New Balance",
      model: "574",
      size: [38, 39, 40, 41, 42],
      material: "tekstylia",
      price: 109.99,
      quantity: 18
      },
      {
      id: 26,
      brand: "Nike",
      model: "Blazer Mid '77",
      size: [37, 38, 39, 40, 41],
      material: "skóra syntetyczna",
      price: 169.99,
      quantity: 10
      }
  ];
  const usersStarter = [
    {
      id: 0,
      login: "admin@buvi.com",
      password: "admin123#",
      firstName: "ROOT",
      lastName: "ADMIN",
      ranga: "Administrator",
      koszykZakupow: [],
    },
    {
      id: 1,
      login: "user1@gmail.com",
      password: "qwerty12#",
      firstName: "Anna",
      lastName: "Kowalska",
      ranga: "Klient",
      koszykZakupow: [
        [3, 43, 2],
        [13, 42, 1],
        [18, 40, 3],
      ],
    },
    {
      id: 2,
      login: "user2@gmail.com",
      password: "jnh@s21331sSA",
      firstName: "Bartosz",
      lastName: "Nowak",
      ranga: "Klient",
      koszykZakupow: [
        [1, 43, 2],
        [5, 42, 1],
        [10, 42, 2],
        [12, 41, 3],
      ],
    },
    {
      id: 3,
      login: "user3@gmail.com",
      password: "pONdfjkjcz#@!",
      firstName: "Cezary",
      lastName: "Wójcik",
      ranga: "Klient",
      koszykZakupow: [],
    },
  ];

  const [userStatus, setUserStatus] = useState("");
  const [users, addUser] = useState(usersStarter);
  const [currentUser, setCurrentUser] = useState();
  const [bazaDanychButy, setBazaDanychButy] = useState(shoesData);
  const [akcja, setAkcja] = useState("");

  function updateUsers(newUser) {
    addUser([...users, newUser]);
  }
  function updateButy(newBut) {
    setBazaDanychButy([...bazaDanychButy, newBut]);
  }
  function updateCurrnetUserKoszyk(dodacDoKoszyka) {
    if (currentUser != null) {
      const zaktualizowanyUser = {
        id: currentUser.id,
        login: currentUser.login,
        password: currentUser.password,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        ranga: currentUser.ranga,
        koszykZakupow: [...currentUser.koszykZakupow, dodacDoKoszyka],
      };
      setCurrentUser(zaktualizowanyUser);
      updateStatus(zaktualizowanyUser);
    }
  }
  function prosbaZalogowania(prosba) {
    let prLogin = prosba.prosbaLogin;
    let prPass = prosba.prosbaPass;

    let i = 0;

    for (; i < users.length; i++) {
      if (users[i].login == prLogin) {
        if (users[i].password == prPass) {
          setCurrentUser(users.at(i));
          updateStatus(
            users[i]
            // users[i].ranga + ": " + users[i].firstName + " " + users[i].lastName
          );
        } else {
          alert("Złe hasło lub login");
          setCurrentUser();
        }
      }
    }

    if (i == users.length - 1) {
      setCurrentUser();
    }
  }

  function updateStatus(currentUser) {
    let status =
      currentUser.ranga +
      ": " +
      currentUser.firstName +
      " " +
      currentUser.lastName;
    setUserStatus(status);

    if (currentUser.ranga == "Administrator") {
      setAkcja(
        <Link to={"/dodawanie"}>
          <div className="guzikMenu">
            <p>Dodawanie do oferty</p>
          </div>
        </Link>
      );
    } else if (currentUser.ranga == "Klient") {
      // console.log(currentLiczbaItemow+" : "+currentUserID)
      setAkcja(
        <>
          <Link to={"/kontakt"}>
            <div className="guzikMenu">
              <p>Kontakt</p>
            </div>
          </Link>
          <Link to={"/koszyk"}>
            <div className="guzikMenu">
              <p>Koszyk: {currentUser.koszykZakupow.length}</p>
            </div>
          </Link>
        </>
      );
    } else {
      setUserStatus("s");
      setAkcja(<></>);
    }
    updateUsersList();
  }

  function wyloguj() {
    updateUsersList();
    setCurrentUser();
    setUserStatus("");
    setAkcja(<></>);
  }

  function updateUsersList() {
    if(currentUser!=null){
      const propozycjaUsers = users.map((sprawdzanyUser)=>{
        if(sprawdzanyUser.id != currentUser.id){
          return(sprawdzanyUser);
        }else{
          return(currentUser);
        }
      })
      console.log(propozycjaUsers);
      addUser(propozycjaUsers);
    }
  }

  function usuwanieProduktuZKoszyka(daneButa) {
    let index = currentUser.koszykZakupow.findIndex((item) => {
      return (
        item[0] === daneButa.id &&
        item[1] === daneButa.rozmiar &&
        item[2] === daneButa.ilosc
      );
    });
    currentUser.koszykZakupow.splice(index, 1);
    updateStatus(currentUser);
  }

  function edycjaProduktuWKoszyku(noweDane) {
    console.log(noweDane);
    const index = currentUser.koszykZakupow.findIndex((item) => {
      return (
        item[0] === noweDane.id &&
        item[1] === noweDane.rozmiar &&
        item[2] === noweDane.ilosc
      );
    });
  
    if (index !== -1) {
      currentUser.koszykZakupow[index][2] = noweDane.nowaIlosc;
    }  
    updateStatus(currentUser);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Strona status={userStatus} akcja={akcja} />}>
          <Route
            index
            element={
              <Glowna
                length={bazaDanychButy.length}
                lengthUSER={users.length}
              />
            }
          ></Route>
          <Route
            path="oferta"
            element={
              <Oferta
                oferta={bazaDanychButy}
                onAddButDoKoszyka={updateCurrnetUserKoszyk}
              />
            }
          ></Route>
          <Route
            path="dodawanie"
            element={
              <Dodajbuta onButAdd={updateButy} length={bazaDanychButy.length} />
            }
          ></Route>
          <Route path="kontakt" element={<Kontakt />}></Route>
          <Route
            path="koszyk"
            element={
              <Koszyk
                user={currentUser}
                buty={bazaDanychButy}
                usuniecieProduktu={usuwanieProduktuZKoszyka}
                edycjaProduktuWKoszyku={edycjaProduktuWKoszyku}
              />
            }
          ></Route>
          <Route
            path="logowanie"
            element={
              <Logowanie
                users={users}
                onZaloguj={prosbaZalogowania}
                bypas={wyloguj}
                accesCode={accesCode}
                onUserAdd={updateUsers}
              />
            }
          ></Route>
          <Route path="*" element={<Oferta oferta={bazaDanychButy} />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
