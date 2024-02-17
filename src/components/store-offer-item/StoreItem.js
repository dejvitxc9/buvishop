import "./StoreItem.css";
import ButGuzikAdd from "../store-offer-item-size/ButGuzikAdd";

function But({infoButa, onAddButDoKoszyka}) {

  const listaRozmiarow = infoButa.size.map((rozm, index) => {
    if (rozm != null) {
      const zamowienie = [infoButa.id, rozm, 1];
      return (
        <ButGuzikAdd
          key={index}
          zamowienie={zamowienie}
          onAddButDoKoszyka={onAddButDoKoszyka}
        />
      );
    } else {
      return "Brak w magazynie";
    }
  });

  const imgsrc = "/images/img (" + infoButa.id + ").png";
  return (
    <div className="col-12 col-sm-6 col-md-4 col-xl-3"
      key={infoButa.id.toString()}>
      <div className="ofertaButa">
        <div className="imgButaContainer">
          <img className="imgButa" src={imgsrc} alt={infoButa.brand}></img>
        </div>
        <div className="infoBut">
          <p className="price">{infoButa.price}</p>
          <h1>{infoButa.model} </h1>
          <h5 className="modeltext">{infoButa.brand}</h5>
          <h4>Materiał: {infoButa.fabric}</h4>
          <h5 className="rozmiar-holder">Rozmiar:</h5>
          {listaRozmiarow}
        </div>
      </div>
    </div>
  );
}

export default But;
