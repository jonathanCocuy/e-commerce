/* React */
import React, {useEffect} from "react";

/* CSS  */
import "./styleFooter.css";

/* Images */
import IconPrincipal from "../../images/icon-principal.png";
const  Footer = () =>{

  useEffect(()=> {
    document.getElementById("Year").textContent = new Date().getFullYear();
  }, []);
  
  return (
    <div className="footer">
      <img src={IconPrincipal} width={50} alt="Icon Principal" />
      <footer class="footer-section">
        <h3>Derechos de autor</h3>
        <p>&copy; <span id="Year"/></p>
      </footer>
    </div>
  );
  
}

export default Footer;
