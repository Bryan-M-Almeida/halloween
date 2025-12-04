import "../../styles/hero.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../lib/icons";

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="icons">
          <FontAwesomeIcon icon={icons.ghost} />
          <FontAwesomeIcon icon={icons.skull} />
        </div>
        <div className="cta-container">
          <div className="cta">
            <h1>Halloween</h1>
            <h2>PARTY 2025</h2>
            <p>Prepare-se para a noite mais assombrada do ano!</p>
          </div>

          <div className="cta-btns">
            <a href="">CONFIRMAR PRESENÇA</a>
            <a href="">VER DETALHES</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
