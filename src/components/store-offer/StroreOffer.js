import "./StroreOffer.css";
import But from "../store-offer-item/StoreItem";

function Oferta({oferta, onAddButDoKoszyka}) {
  // const obuwie = props.oferta;

  const ofertaObuwia = oferta.map((infoButa, index) => {
    return (
      <But
        key={index}
        infoButa={infoButa}
        onAddButDoKoszyka={onAddButDoKoszyka}
      />
    );
  });

  return <div className="ofertaobuwia row no-margin-no-padding">{ofertaObuwia}</div>;
}
export default Oferta;
