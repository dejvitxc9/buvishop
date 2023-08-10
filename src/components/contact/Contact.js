import './Contact.css';
import GMap from './GMap';

function Contact() {

    return (
        <div className='contakt-container'>
            <h1>Kontakt</h1>
            <h3>Telefon: +48 793 070 996</h3>
            <h3>E-mail: dawid.uniowski@gmail.com</h3>
            <h4>Znajdź nas: </h4>
            {<GMap/>}
        </div>
    );
}
export default Contact;