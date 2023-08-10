import "./ButGuzikAdd.css";
import { useState } from "react";

function ButGuzikAdd(props) {
  function add() {
    props.onAddTreButDoKoszyka(props.zamowienie);
  }

  return (
    <button className="rozmiar" onClick={add} >
      {props.zamowienie[1]}
    </button>
  );
}
export default ButGuzikAdd;
