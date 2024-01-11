/* React */
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

/* CSS  */
import "./styleFooter.css";

/* Images */
import IconPrincipal from "../../images/icon-principal.png";

const Footer = () => {
  useEffect(() => {
    document.getElementById("Year").textContent = new Date().getFullYear();
  }, []);

  const redirectionSocial = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <div className="footer-social">
        <p>Puedes contactarme:</p>
        <div className="footer-social-icons">
          <button
            className="button-facebook"
            onClick={() => redirectionSocial("https://mail.google.com/mail/u/0/#inbox")}
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </button>
          <button
            className="button-instagram"
            onClick={() => redirectionSocial("www.instagram.com")}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </button>
          <button
            className="button-whatsapp"
            onClick={() => (redirectionSocial = "www.whatsapp.com")}
          >
            <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
          </button>
        </div>
      </div>

      <div className="footer">
        <img
          className="img-icon"
          src={IconPrincipal}
          width={40}
          alt="Icon Principal"
        />
        <footer class="footer-section">
          <p>
            &copy; <span id="Year" /> Delicius. Todos los derechos reservados.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
