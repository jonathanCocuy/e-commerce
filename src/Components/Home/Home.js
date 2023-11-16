import React from "react";
import "./styleHome.css";
import CupcakePrincipal from "../../images/cupcake-principal.png";

const Home = () => {
  return (
    <div className="body-home">
      <div class="title-container">
        <h1 class="title-principal">
          Bienvenidos a <span class="color-delicius">Delicius</span>
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
          <img className="img-cupcake" src={CupcakePrincipal}></img>
        </div>
      </section>
      <section className="text-information-2">
        <p className="paragraph-welcome">
          ¡Disfruta de nuestros postres increibles!
        </p>
      </section>
    </div>
  );
};

export default Home;
