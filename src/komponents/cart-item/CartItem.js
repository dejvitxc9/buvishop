import "./CartItem.css";
import { useState } from "react";

function KoszykItem(props) {
  const id = props.infoButa.id;
  const brand = props.infoButa.brand;
  const model = props.infoButa.model;
  const size = props.infoButa.size;
  const fabric = props.infoButa.fabric;
  const price = props.infoButa.price;
  const maxButow = props.infoButa.quantity;

  const wybranyRozmiar = props.infoButa.rozmiar;
  const wybranaIlosc = props.infoButa.ilosc;
  let x;

  const kompaktoweDanePrzedmiotu = {
    id: id,
    rozmiar: wybranyRozmiar,
    ilosc: wybranaIlosc,
  };

  const imgsrc = "/images/img (" + id + ").png";
  const idinputa = "iloscZamowienia" + id;

  const [currentPrice, setCurrentPrice] = useState(wybranaIlosc * price);

  function edycja() {
    x = parseFloat(document.getElementById(idinputa).value);
    if (isNaN(x)) {
      console.log("Wartość x musi być liczbą!");
      return;
    }

    const nowa = Math.round(price * x * 100) / 100;

    setCurrentPrice(nowa);
    update();
  }

  function update() {
    props.onZmiana({...kompaktoweDanePrzedmiotu, nowaIlosc: x});
  }

  function usuwanieProduktu() {
    props.onUsun(kompaktoweDanePrzedmiotu);
  }

  return (
    <div className="item" key={id.toString()}>
      <img src={imgsrc} alt={brand}></img>
      <div className="podzialka-m">
        <h1>{model}</h1>
        <h3>{brand}</h3>
      </div>
      <div className="podzialka-l">
        <h4>Wybrany rozmiar: {wybranyRozmiar}</h4>
        <h4>Materiał: {fabric}</h4>
      </div>
      <div className="podzialka-l">
        <h3>
          Ilość:
          <div className="iloscZamowienia-container">
            <input
              type="number"
              onChange={edycja}
              className="form-control"
              id={idinputa}
              defaultValue={wybranaIlosc}
              min={1}
              max={props.infoButa.quantity}
            ></input>
          </div>
          <img
            className="usuwacz"
            src="/images/delete.png"
            alt="Usuń produkt"
            onClick={usuwanieProduktu}
          />
        </h3>
        <h3 className="price">{Math.round((currentPrice) * 100) / 100}</h3>
        <br></br>
        <p className="price">cena za sztuke: {price}</p>
      </div>
    </div>
  );
}

export default KoszykItem;
