import "./ButGuzikAdd.css";

function ButGuzikAdd({ onAddButDoKoszyka, zamowienie}) {
  function add() {
    onAddButDoKoszyka(zamowienie);
    // console.log(zamowienie);
  }

  return (
    <button className="rozmiar" onClick={add}>
      <h5 className="m-0">{zamowienie[1]}</h5>
    </button>
  );
}
export default ButGuzikAdd;
