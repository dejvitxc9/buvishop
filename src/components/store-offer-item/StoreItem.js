import "./StoreItem.css";
import ButGuzikAdd from "../store-offer-item-size/ButGuzikAdd";

function But(props) {
  const listaRozmiarow = props.infoButa.size.map((rozm, index) => {
    if (rozm != null) {
      const zamowienie = [props.infoButa.id, rozm, 1];
      return (
        <ButGuzikAdd
          key={index}
          zamowienie={zamowienie}
          onAddTreButDoKoszyka={props.onAddSecButDoKoszyka}
        />
      );
    } else {
      return "Brak w magazynie";
    }
  });

  const imgsrc = "/images/img (" + props.infoButa.id + ").png";
  return (
    <div className="col-12 col-sm-6 col-md-4 col-xl-3"
      key={props.infoButa.id.toString()}>
      <div className="ofertaButa">
        <div className="imgButaContainer">
          <img className="imgButa" src={imgsrc} alt={props.infoButa.brand}></img>
        </div>
        <div className="infoBut">
          <p className="price">{props.infoButa.price}</p>
          <h1>{props.infoButa.model} </h1>
          <h5 className="modeltext">{props.infoButa.brand}</h5>
          <h4>Materiał: {props.infoButa.fabric}</h4>
          <h5 className="rozmiar-holder">Rozmiar:</h5>
          {listaRozmiarow}
        </div>
      </div>
    </div>
  );
}

export default But;
