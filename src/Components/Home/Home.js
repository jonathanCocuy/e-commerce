/* React */
import React from "react";

/* CSS */
import "./styleHome.css";

/* Images */
import CupcakePrincipal from "../../images/cupcake-principal.png";
import IconMouse from "../../images/icon-mouse.png";
import Pastel from "../../images/pastel.png";
import Cupcakes from "../../images/cupcakes.png";
import Chocolate from "../../images/chocolate.png";
import Waffle from "../../images/waffle.png";
import Gateaux from "../../images/pastel-bw.png";
import PastelBD from "../../images/pastel-bd-bw.png";
import Croisant from "../../images/croisant-bw.png";
import CupcakeBW from "../../images/cupcake-bw.png";
import DonutBW from "../../images/donut-bw.png";
import FrutasBW from "../../images/frutas-bw.png";

const Home = () => {
  return (
    <div className="body-home">
      <div className="body-1">
        <div class="title-container">
          <h1 class="title-principal">
            Bienvenido a <span class="color-delicius">Delicius</span>
          </h1>
        </div>
        <section className="text-information">
          <p className="paragraph-welcome">
            Sumérgete en un mundo dulce y delicioso, donde cada bocado es una
            experiencia única. En nuestra página de postres, te invitamos a
            explorar una variedad de creaciones irresistibles que deleitarán tu
            paladar y despertarán tus sentidos.
          </p>
          <div className="font-image">
            <img
              className="img-cupcake"
              src={CupcakePrincipal}
              alt="CupCake"
            ></img>
          </div>
        </section>
        <section className="icon-mouse">
          <img src={IconMouse} width={30} alt="Icon Mouse"></img>
        </section>
      </div>

      <div className="body-2">
        <h1 className="title-body-2">Nuestros productos destacados</h1>
        <section className="text-information-body-2">
          <p className="paragraph-body-2">
            Desde exquisitos pasteles hasta tentadores postres individuales,
            cada delicia está cuidadosamente preparada con ingredientes frescos
            y amor auténtico por la repostería. Ya sea que estés celebrando una
            ocasión especial o simplemente disfrutando de un capricho cotidiano,
            nuestros postres están diseñados para satisfacer tus antojos más
            dulces.
          </p>
        </section>
        <section className="products-featured">
          <div className="container-text-image">
            <div className="image-product">
              <img src={Pastel} width={200} alt="Cake"></img>
            </div>
            <h2>Pasteles</h2>
          </div>
          <div className="container-text-image">
            <div className="image-product">
              <img src={Cupcakes} width={200} alt="Cupcake"></img>
            </div>
            <h2>CupCakes</h2>
          </div>
          <div className="container-text-image">
            <div className="image-product">
              <img src={Chocolate} width={200} alt="Chocolate"></img>
            </div>
            <h2>Chocolates</h2>
          </div>
          <div className="container-text-image">
            <div className="image-product">
              <img src={Waffle} width={200} alt="Waffle"></img>
            </div>
            <h2>Waffles</h2>
          </div>
        </section>
        <section className="icon-mouse">
          <img src={IconMouse} width={30} alt="Icon Mouse"></img>
        </section>
      </div>

      <div className="body-3">
        <h1 className="title-body-3">Más Variedad de Productos</h1>
        <section className="text-information-body-2">
          <p className="paragraph-body-2">
            Encuentra el placer en cada bocado con nuestra amplia selección de
            delicias para satisfacer todos los gustos. ¡Bienvenido a un mundo de
            opciones deliciosas que te dejarán con ganas de más!
            <br /> <br /> 
            ¿Quieres ver todos los productos que tenemos disponibles? <br />
            Da clic en la pestaña de <strong>Productos</strong>
          </p>
        </section>
        <section className="diferent-products">
          <div className="container-image-text-pdts">
            <img
              className="images-diferent-products"
              src={Gateaux}
              width={80}
              alt="Pedazo de pastel"
            ></img>
            <h3>Tortas</h3>
          </div>
          <div className="container-image-text-pdts">
            <img
              className="images-diferent-products"
              src={PastelBD}
              width={80}
              alt="Pastel"
            ></img>
            <h3>Pasteles</h3>
          </div>
          <div className="container-image-text-pdts">
            <img
              className="images-diferent-products"
              src={Croisant}
              width={80}
              alt="Croisant"
            ></img>
            <h3>Croisants</h3>
          </div>
          <div className="container-image-text-pdts">
            <img
              className="images-diferent-products"
              src={CupcakeBW}
              width={80}
              alt="Cupcake"
            ></img>
            <h3>Cupcakes</h3>
          </div>
          <div className="container-image-text-pdts">
            <img
              className="images-diferent-products"
              src={DonutBW}
              width={80}
              alt="Donut"
            ></img>
            <h3>Donas</h3>
          </div>
          <div className="container-image-text-pdts">
            <img
              className="images-diferent-products"
              src={FrutasBW}
              width={80}
              alt="Bakery"
            ></img>
            <h3>Frutas</h3>
          </div>
        </section>
        <section className="icon-mouse">
          <img src={IconMouse} width={30} alt="Icon Mouse"></img>
        </section>
      </div>
    </div>
  );
};

export default Home;
