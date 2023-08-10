import "./But.css";
import ButGuzikAdd from "./ButGuzikAdd";

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
    <div className="ofertaButa" key={props.infoButa.id.toString()}>
      <div className="infoBut">
        <h1>{props.infoButa.model} </h1>
        <h5 className="modeltext">{props.infoButa.brand}</h5>
        <h4>Materiał: {props.infoButa.material}</h4>
        <h5 className="rozmiar-holder">Rozmiar: {listaRozmiarow}</h5>
      </div>
      <div className="imgButa">
        <img src={imgsrc} alt={props.infoButa.brand}></img>
        <p className="price">{props.infoButa.price}</p>
      </div>
    </div>
  );
}

export default But;
