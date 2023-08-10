import "./Dodajbuta.css";

function Dodajbuta(props) {
  let nrButa = props.length;

  function dodajbuta(event) {
    event.preventDefault();

    let marka = document.formularz.marka.value;
    let model = document.formularz.model.value;
    let material = document.formularz.material.value;
    let cena = document.formularz.cena.value;
    const tablicaCheckboxow = document.formularz.rozmiar;

    const dostepneRozmiary = [];
    tablicaCheckboxow.forEach((cheBox) => {
      if (cheBox.checked) {
        dostepneRozmiary.push(Number(cheBox.value));
      }
    });

    const nowyBut = {
      id: nrButa,
      brand: marka,
      model: model,
      size: dostepneRozmiary,
      material: material,
      price: cena,
      quantity: 10,
    };

    props.onButAdd(nowyBut);
    document.formularz.marka.value = "";
    document.formularz.model.value = "";
    document.formularz.material.value = "";
    document.formularz.cena.value = "";
    tablicaCheckboxow.forEach((chek) => {
      chek.checked = false;
    });
  }

  const mozliweRozmiary = [39, 40, 41, 42, 43, 44, 45, 46];

  const rozmiaryWyborCheckboxy = mozliweRozmiary.map((rozm) => {
    const idCheckboxa = "rozmiar" + rozm;
    return (
      <div key={rozm} className="jedenZWielu">
        <input
          className="form-check-input"
          type="checkbox"
          value={rozm}
          name="rozmiar"
          id={idCheckboxa}
        ></input>
        <label className="form-check-label" htmlFor={idCheckboxa}>
          {rozm}
        </label>
      </div>
    );
  });

  return (
    <div className="dodaj-container">
      <h3>Dodaj buta nr: {nrButa}</h3>
      <form id="formularz" name="formularz" onSubmit={dodajbuta}>
        <div className="nazwa">
          <label htmlFor="marka">Marka</label>
          <input
            type="text"
            name="marka"
            id="marka"
            className="form-control"
            placeholder="Marka"
            required
          ></input>
        </div>
        <div className="nazwa">
          <label htmlFor="model">Model</label>
          <input
            type="text"
            name="model"
            id="model"
            className="form-control"
            placeholder="Model"
            required
          ></input>
        </div>
        <br />
        <br />
        <br />

        <label htmlFor="material">Materiał</label>
        <input
          type="text"
          name="material"
          id="material"
          className="form-control"
          placeholder="Material"
          required
        ></input>
        <label htmlFor="cena">Cena</label>
        <input
          type="text"
          name="cena"
          id="cena"
          className="form-control"
          placeholder="Cena"
          pattern="[0-9]+([.,][0-9]+)?"
          required
        ></input>
        <label htmlFor="rozmiar">Rozmiar</label>
        {rozmiaryWyborCheckboxy}

        <input type="submit" value={"Dodaj"} className="btn btn-primary" />
      </form>
    </div>
  );
}

export default Dodajbuta;
