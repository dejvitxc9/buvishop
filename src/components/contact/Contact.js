import "./Contact.css";
import GMap from "./GMap";

function Contact() {
  return (
    <div className="contakt-container col-10 col-md-8 col-lg-6">
      <h1>Kontakt</h1>
      <h3>Telefon: +48 793 070 996</h3>
      <h3>E-mail: dawid.uniowski@gmail.com</h3>
      <h4>Znajdź nas: </h4>
      <div class="col-12 ">{<GMap />}</div>
    </div>
  );
}
export default Contact;
