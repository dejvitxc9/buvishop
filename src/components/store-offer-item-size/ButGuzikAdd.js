import "./ButGuzikAdd.css";

function ButGuzikAdd(props) {
  function add() {
    props.onAddTreButDoKoszyka(props.zamowienie);
  }

  return (
    <button className="rozmiar" onClick={add}>
      <h5 className="m-0">{props.zamowienie[1]}</h5>
    </button>
  );
}
export default ButGuzikAdd;
