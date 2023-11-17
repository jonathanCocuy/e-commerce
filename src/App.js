/* React */
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

/* CSS */
import "./App.css";

/* Images */
import ImageMap from "./images/maps.png";
import IconPrincipal from "./images/icon-principal.png";

/* Components */
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Products from "./Components/Products/Products";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";

function App() {
  const adressHours = "Carrera 47 #130-62 (Barrio - El Prado)";

  return (
    <div>
      <Router>
        <section className="section-adress">
          <p>
            <img src={ImageMap} width={16} alt="Location"></img>{" "}
            <a
              href="https://www.google.com/maps/place/Edificio+Raudal+Del+Prado/@4.7171566,-74.0548678,21z/data=!4m6!3m5!1s0x8e3f853815baacdb:0x62bc6a8b2e3c78e!8m2!3d4.7171967!4d-74.0547861!16s%2Fg%2F11gy7z01t4?entry=ttu"
              className="link-adress"
              rel="noreferrer"
              target="_blank"
            >
              {adressHours}
            </a>{" "}
            | Todos los días: 8:00am - 8:00pm
          </p>
        </section>
        <section className="section-nav">
          <ul className="section-list">
            <div>
              <img src={IconPrincipal} width={70} alt="Icono"></img>
            </div>
            <li>
              <NavLink to="/" className="items-list">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="items-list">
                Productos
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="items-list">
                ¿Quienes somos?
              </NavLink>
            </li>
            <li>
              <NavLink to="/shoppingcart" className="items-list">
                Carrito de compras
              </NavLink>
            </li>
          </ul>
        </section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
