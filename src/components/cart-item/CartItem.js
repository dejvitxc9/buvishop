import "./CartItem.css";
import { useState } from "react";

function KoszykItem(props) {
  const id = props.shoeData.id;
  const brand = props.shoeData.brand;
  const model = props.shoeData.model;
  const fabric = props.shoeData.fabric;
  const price = props.shoeData.price;

  const selectedSize = props.shoeData.selectedSize;
  const selectedQuantity = props.shoeData.selectedQuantity;
  let x;

  const kompaktoweDanePrzedmiotu = {
    id: id,
    selectedSize: selectedSize,
    selectedQuantity: selectedQuantity,
  };

  const imgsrc = "/images/img (" + id + ").png";
  const quantityInputID = "quantityInput" + id;

  const [currentPrice, setCurrentPrice] = useState(selectedQuantity * price);

  function changeShoeData() {
    x = document.getElementById(quantityInputID).value;
    const nowa = Math.round(price * x * 100) / 100;
    setCurrentPrice(nowa);
    update();
  }

  function update() {
    props.onChange({ ...kompaktoweDanePrzedmiotu, newSelectedQuantity: x });
  }

  function deleteShoe() {
    props.onDelete(kompaktoweDanePrzedmiotu);
  }

  return (
    <div className="item" key={id}>
      <div className="row">
        <div className="col-12 col-md-3">
          <img className="img-shoe" src={imgsrc} alt={brand}></img>
        </div>
        <div className="col-6 col-md-3">
          <h1>{model}</h1>
          <h3>{brand}</h3>
        </div>
        <div className="col-6 col-md-3">
          <h4>Wybrany rozmiar: {selectedSize}</h4>
          <h4>Materiał: {fabric}</h4>
        </div>
        <div className="col-6 col-md-3">
          <h3>
            Ilość:
            <div className="iloscZamowienia-container">
              <input
                type="number"
                onChange={changeShoeData}
                className="form-control"
                id={quantityInputID}
                defaultValue={selectedQuantity}
                min={1}
                max={props.shoeData.quantity}
              ></input>
            </div>
            <img
              className="usuwacz"
              src="/images/delete.png"
              alt="Usuń produkt"
              onClick={deleteShoe}
            />
          </h3>
          <h3 className="cartPrice">{Math.round(currentPrice * 100) / 100}</h3>
          <br></br>
          <p className="cartPrice">cena za sztuke: {price}</p>
        </div>
      </div>
    </div>
  );
}

export default KoszykItem;
