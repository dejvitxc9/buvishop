import { useState } from "react";
import "./Cart.css";
import CartItem from "../cart-item/CartItem";

function Cart(props) {
  const userCart = props.user.koszykZakupow;

  const userItems =
    userCart.length === 0 ? (
      <p>Brak produktów w koszyku.</p>
    ) : (
      userCart.map(([id, selectedSize, selectedQuantity], index) => (
        <CartItem
          key={index}
          shoeData={{ ...props.buty[id], selectedSize, selectedQuantity }}
          onChange={props.edycjaProduktuWKoszyku}
          onDelete={props.usuniecieProduktu}
        />
      ))
    );
  const podsumowanie = props.user.koszykZakupow.reduce(
    (acc, [id, selectedSize, selectedQuantity]) => acc + selectedQuantity * props.buty[id].price,
    0
  );

  function startowykoszyktylko() {
    let koszt = 0;

    for (let i = 0; i < userCart.length; i++) {
      let butX = props.buty.find((b) => b.id === userCart[i][0]);
      if (butX) {
        koszt += userCart[i][2] * butX.price;
      }
    }
    return koszt;
  }

  const [cenyDoPodsumowania, setCenyDoPodsumowania] =
    useState(startowykoszyktylko);

  const [cenaDostawy, setCenaDostawy] = useState(9.9);
  function changecenaDostawy() {
    let x = document.getElementById("dostawa").value;
    setCenaDostawy(x);
  }

  return (
    <>
      <div className="koszyk-container">{userItems}</div>
      <div className="podsumowanie-container">
        <h1> Podsumowanie:</h1>
        <h3>Wartość produktów: {Math.round(podsumowanie * 100) / 100}</h3>
        <h5>Dostawa: {parseFloat(cenaDostawy).toFixed(2)} PLN</h5>
        <select
          id="dostawa"
          name="dostawa"
          className="form-select"
          onChange={changecenaDostawy}
        >
          <option defaultChecked value={9.9}>
            InPost Paczkomat - 9.90 PLN
          </option>
          <option value={15.9}>InPost Wysyłka - 15.90 PLN</option>
          <option value={4.9}>Poczta Polska - 4.90 PLN</option>
          <option value={9.99}>ŻabPost - 9.99 PLN</option>
          <option value={12.9}>Orlen Paczka - 12.90 PLN</option>
        </select>
        <br />
        <h3>
          Razem z dostawą:{" "}
          {Math.round((Number(podsumowanie) + Number(cenaDostawy)) * 100) / 100}{" "}
          PLN
        </h3>
        <p>
          VAT-23%: {((cenyDoPodsumowania + cenaDostawy) * 0.23).toFixed(2)} PLN
        </p>

        <hr></hr>
        <button
          className="btn-lg btn-success"
          onClick={() => {
            alert("Ten guzik będzie przekierowywał do strony z płatnościami");
          }}
        >
          Przejdź do płatności
        </button>
        <button
          className="btn-lg btn-warning"
          onClick={() => {
            alert(
              "Ten guzik będzie przekierowywał do strony, która pomoże rozdzieleniu zakupu na raty"
            );
          }}
        >
          Rozłóż na raty
        </button>
      </div>
    </>
  );
}

export default Cart;
