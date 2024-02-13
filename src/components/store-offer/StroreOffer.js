import "./StroreOffer.css";
import But from "../store-offer-item/StoreItem";

function Oferta(props) {
  const obuwie = props.oferta;

  const ofertaObuwia = obuwie.map((infoButa, index) => {
    return (
      <But
        key={index}
        infoButa={infoButa}
        onAddSecButDoKoszyka={props.onAddButDoKoszyka}
      />
    );
  });

  return <div className="ofertaobuwia row">{ofertaObuwia}</div>;
}
export default Oferta;
