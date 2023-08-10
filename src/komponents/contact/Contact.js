import './Contact.css';
import Mapa from './GMap';

function Kontakt() {

    return (
        <div className='kontakt-container'>
            <h1>Kontakt</h1>
            <h3>Telefon: +48 793 070 996</h3>
            <h3>E-mail: dawid.uniowski@gmail.com</h3>
            <h4>Znajdź nas: </h4>
            {<Mapa/>}
        </div>
    );
}
export default Kontakt;