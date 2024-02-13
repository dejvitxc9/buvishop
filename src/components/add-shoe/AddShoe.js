import "./AddShoe.css";

function AddShoe(props) {
  const shoeID = props.length;

  function addNewShoe(event) {
    event.preventDefault();

    const sizesForm = document.shoeAddForm.rozmiar;
    const availableSize = [];
    sizesForm.forEach((sizeIsChecked) => {
      if (sizeIsChecked.checked) {
        availableSize.push(Number(sizeIsChecked.value));
      }
    });

    const newShoe = {
      id: shoeID,
      brand: document.shoeAddForm.brand.value,
      model: document.shoeAddForm.model.value,
      size: availableSize,
      fabric: document.shoeAddForm.fabric.value,
      price: document.shoeAddForm.price.value,
      quantity: 10,
    };

    props.onAddShoe(newShoe);


    document.shoeAddForm.brand.value = "";
    document.shoeAddForm.model.value = "";
    document.shoeAddForm.fabric.value = "";
    document.shoeAddForm.price.value = "";
    sizesForm.forEach((chek) => {
      chek.checked = false;
    });
  }

  const allSizes = [39, 40, 41, 42, 43, 44, 45, 46];

  const allSizesForm = allSizes.map((possibleSize) => {
    return (
      <div key={possibleSize} className="possible-size">
        <input
          className="form-check-input"
          type="checkbox"
          value={possibleSize}
          name="rozmiar"
          id={`rozmiar${possibleSize}`}
        ></input>
        <label className="form-check-label" htmlFor={`rozmiar${possibleSize}`}>
          {possibleSize}
        </label>
      </div>
    );
  });

  return (
    <div className="adding-shoe-container">
      <h3>Dodaj ofertę buta ID: {shoeID}</h3>
      <form id="shoeAddForm" name="shoeAddForm" onSubmit={addNewShoe}>
        <div className="grid-section">
          <div>
            <label htmlFor="brand">Producent</label>
            <input
              type="text"
              name="brand"
              id="brand"
              className="form-control"
              placeholder="Producent"
              required
            ></input>
          </div>
          <div>
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
        </div>
        <label htmlFor="fabric">Materiał</label>
        <input
          type="text"
          name="fabric"
          id="fabric"
          className="form-control"
          placeholder="Materiał"
          required
        ></input>
        <label htmlFor="price">Cena</label>
        <input
          type="text"
          name="price"
          id="price"
          className="form-control"
          placeholder="Cena"
          pattern="[0-9]+([.,][0-9]+)?"
          required
        ></input>
        <label>Rozmiar</label>
        {allSizesForm}

        <input type="submit" value={"Dodaj"} className="btn btn-primary" />
      </form>
    </div>
  );
}

export default AddShoe;
