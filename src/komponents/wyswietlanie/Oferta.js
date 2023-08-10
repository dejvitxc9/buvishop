import "./Oferta.css";
import But from "./But";

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

  return <div className="ofertaobuwia">{ofertaObuwia}</div>;
}
export default Oferta;
