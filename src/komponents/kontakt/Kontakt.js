import './Kontakt.css';
import Mapa from './Mapa';

function Kontakt() {

    return (
        <div className='kontakt-container'>
            <h1>Kontakt</h1>
            <h3>Telefon: +48 288 533 882</h3>
            <h3>Mail: kontakt@buwi.pl</h3>
            <h4>Znajdź nas: </h4>
            {<Mapa/>}
        </div>
    );
}
export default Kontakt;