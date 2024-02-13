import "./bootstrap.css";
import "./App.css";

import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import StoreOffer from "./components/store-offer/StroreOffer";
import Layout from "./components/layout/Layout";
import Main from "./components/main/Main";
import LoginPage from "./components/login-page/LoginPage";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import AddShoe from "./components/add-shoe/AddShoe";

function App() {
  const accesCode = "1234";

  const shoesData = [
    {
      id: 0,
      brand: "Adidas",
      model: "Ultraboost 21",
      size: [40, 41, 43, 44, 45],
      fabric: "tekstylia",
      price: 349.99,
      quantity: 20,
    },
    {
      id: 1,
      brand: "Nike",
      model: "Air Force 1",
      size: [39, 40, 41, 42, 46],
      fabric: "skóra naturalna",
      price: 449.99,
      quantity: 15,
    },
    {
      id: 2,
      brand: "New Balance",
      model: "990v5",
      size: [40, 41, 42, 43, 44],
      fabric: "skóra naturalna",
      price: 259.99,
      quantity: 8,
    },
    {
      id: 3,
      brand: "Reebok",
      model: "Classic Leather",
      size: [39, 41, 42, 43],
      fabric: "skóra syntetyczna",
      price: 249.99,
      quantity: 13,
    },
    {
      id: 4,
      brand: "Puma",
      model: "RS-X",
      size: [42, 43, 44, 45],
      fabric: "tekstylia",
      price: 349.99,
      quantity: 12,
    },
    {
      id: 5,
      brand: "Adidas",
      model: "NMD_R1",
      size: [39, 40, 42, 43, 44],
      fabric: "tekstylia",
      price: 549.99,
      quantity: 18,
    },
    {
      id: 6,
      brand: "Nike",
      model: "Air Max 270",
      size: [39, 41, 42, 43, 44],
      fabric: "tekstylia",
      price: 219.99,
      quantity: 10,
    },
    {
      id: 7,
      brand: "New Balance",
      model: "327",
      size: [39, 40, 42, 43],
      fabric: "tekstylia",
      price: 349.99,
      quantity: 15,
    },
    {
      id: 8,
      brand: "Reebok",
      model: "Club C 85",
      size: [39, 40, 42, 43],
      fabric: "skóra naturalna",
      price: 299.99,
      quantity: 20,
    },
    {
      id: 9,
      brand: "Puma",
      model: "Cali",
      size: [41, 42, 43, 44],
      fabric: "skóra syntetyczna",
      price: 329.99,
      quantity: 7,
    },
    {
      id: 10,
      brand: "Adidas",
      model: "Superstar",
      size: [39, 41, 42, 43, 44],
      fabric: "skóra syntetyczna",
      price: 299.99,
      quantity: 15,
    },
    {
      id: 11,
      brand: "Nike",
      model: "Blazer Vintage",
      size: [39, 41, 42, 43],
      fabric: "skóra naturalna",
      price: 499.99,
      quantity: 8,
    },
    {
      id: 12,
      brand: "New Balance",
      model: "991",
      size: [39, 40, 42, 43],
      fabric: "skóra naturalna",
      price: 919.99,
      quantity: 12,
    },
    {
      id: 13,
      brand: "Reebok",
      model: "Aztrek",
      size: [41, 42, 43],
      fabric: "tekstylia",
      price: 249.99,
      quantity: 20,
    },
    {
      id: 14,
      brand: "Puma",
      model: "Future Rider",
      size: [39, 40, 41, 43],
      fabric: "tekstylia",
      price: 299.99,
      quantity: 6,
    },
    {
      id: 15,
      brand: "Adidas",
      model: "Stan Smith",
      size: [42, 43, 44, 45, 46],
      fabric: "skóra naturalna",
      price: 349.99,
      quantity: 18,
    },
    {
      id: 16,
      brand: "Nike",
      model: "Air Max 97",
      size: [40, 41, 42, 43],
      fabric: "tekstylia",
      price: 549.99,
      quantity: 10,
    },
    {
      id: 17,
      brand: "New Balance",
      model: "574",
      size: [40, 42, 43, 45, 46],
      fabric: "tekstylia",
      price: 399.99,
      quantity: 5,
    },
    {
      id: 18,
      brand: "Reebok",
      model: "Instapump Fury",
      size: [40, 41, 42],
      fabric: "tekstylia",
      price: 499.99,
      quantity: 3,
    },
    {
      id: 19,
      brand: "Puma",
      model: "Thunder Spectra",
      size: [40, 41, 42, 43],
      fabric: "tekstylia",
      price: 449.99,
      quantity: 7,
    },
    {
      id: 20,
      brand: "Vans",
      model: "Authentic",
      size: [38, 39, 40, 41, 42],
      fabric: "tkanina",
      price: 79.99,
      quantity: 20,
    },
    {
      id: 21,
      brand: "Converse",
      model: "Chuck Taylor Star",
      size: [36, 37, 38, 39, 40],
      fabric: "tkanina",
      price: 99.99,
      quantity: 15,
    },
    {
      id: 22,
      brand: "Puma",
      model: "Suede Classic",
      size: [38, 39, 40, 41, 42],
      fabric: "zamsz",
      price: 129.99,
      quantity: 8,
    },
    {
      id: 23,
      brand: "Adidas",
      model: "Superstar",
      size: [37, 38, 39, 40, 41],
      fabric: "skóra naturalna",
      price: 199.99,
      quantity: 13,
    },
    {
      id: 24,
      brand: "Reebok",
      model: "Club C 85",
      size: [36, 37, 38, 39, 40],
      fabric: "skóra naturalna",
      price: 149.99,
      quantity: 12,
    },
    {
      id: 25,
      brand: "New Balance",
      model: "574",
      size: [38, 39, 40, 41, 42],
      fabric: "tekstylia",
      price: 109.99,
      quantity: 18,
    },
    {
      id: 26,
      brand: "Nike",
      model: "Blazer Mid '77",
      size: [37, 38, 39, 40, 41],
      fabric: "skóra syntetyczna",
      price: 169.99,
      quantity: 10,
    },
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
  const [menu, setMenu] = useState("");
  const [welcomeText, setWelcomeText] = useState("");

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
          setWelcomeText(
            "Witaj " + users[i].firstName + " " + users[i].lastName
          );
          updateStatus(users[i]);
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
      setMenu(
        <li className="nav-item">
          <Link to={"/dodawanie"}>
            <p>Dodawanie do oferty</p>
          </Link>
        </li>
      );
    } else if (currentUser.ranga == "Klient") {
      setMenu(
        <>
          <li className="nav-item">
            <Link to={"/koszyk"}>
              <p>Koszyk: {currentUser.koszykZakupow.length}</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/kontakt"}>
              <p>Kontakt</p>
            </Link>
          </li>
        </>
      );
    } else {
      setUserStatus("Błąd");
      setMenu(<></>);
    }
    updateUsersList();
  }

  function wyloguj() {
    updateUsersList();
    setCurrentUser();
    setUserStatus("");
    setWelcomeText("");
    setMenu(<></>);
  }

  function updateUsersList() {
    if (currentUser != null) {
      const propozycjaUsers = users.map((sprawdzanyUser) => {
        if (sprawdzanyUser.id != currentUser.id) {
          return sprawdzanyUser;
        } else {
          return currentUser;
        }
      });
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

  function edycjaProduktuWKoszyku(newCartItemData) {
    console.log(newCartItemData);
    const index = currentUser.koszykZakupow.findIndex((item) => {
      return (
        item[0] === newCartItemData.id &&
        item[1] === newCartItemData.selectedSize &&
        item[2] === newCartItemData.selectedQuantity
      );
    });

    if (index !== -1) {
      currentUser.koszykZakupow[index][2] = newCartItemData.newSelectedQuantity;
    }
    updateStatus(currentUser);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout status={userStatus} menu={menu} />}>
          <Route
            index
            element={
              <Main length={bazaDanychButy.length} lengthUSER={users.length} />
            }
          ></Route>
          <Route
            path="sklep"
            element={
              <StoreOffer
                oferta={bazaDanychButy}
                onAddButDoKoszyka={updateCurrnetUserKoszyk}
              />
            }
          ></Route>
          <Route
            path="dodawanie"
            element={
              <AddShoe onAddShoe={updateButy} length={bazaDanychButy.length} />
            }
          ></Route>
          <Route path="kontakt" element={<Contact />}></Route>
          <Route
            path="koszyk"
            element={
              <Cart
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
              <LoginPage
                users={users}
                onZaloguj={prosbaZalogowania}
                bypas={wyloguj}
                accesCode={accesCode}
                onUserAdd={updateUsers}
                showWelocomeScreen={welcomeText}
                test={setWelcomeText}
              />
            }
          ></Route>
          <Route
            path="*"
            element={<StoreOffer oferta={bazaDanychButy} />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
