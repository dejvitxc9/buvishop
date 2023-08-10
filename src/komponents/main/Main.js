import "./Main.css";

function Main(props){
    let dlugosc = props.length;

    return(
        <div className="main-container">
            <h1>Strona główna</h1>
            <h3>W bazie danych znaleziono {dlugosc} butów</h3>
            <h3>W bazie danych znaleziono {props.lengthUSER} użytkowników</h3>
        </div>
    );
}

export default Main;