import "../../styles/detalhes.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../lib/icons";
const Detalhes = () => {
  return (
    <>
      <section id="detalhes">
        <h2>Detalhes do evento</h2>

        <div className="cards-container">
          <div className="card">
            <span className="icon">
                <FontAwesomeIcon icon={icons.date}/>
            </span>
            <div className="info">
              <p>Data</p>
              <h3>31 de outubro</h3>
              <p>Quinta-feira</p>
            </div>
          </div>

          <div className="card">
            <span className="icon">
                <FontAwesomeIcon icon={icons.time}/>
            </span>
            <div className="info">
              <p>Horário</p>
              <h3>20:00 - 02-00</h3>
              <p>6 horas de terror</p>
            </div>
          </div>

          <div className="card">
            <span className="icon">
                <FontAwesomeIcon icon={icons.location}/>
            </span>
            <div className="info">
              <p>Local</p>
              <h3>Casa assombrada</h3>
              <p>Rua do medo, 666</p>
            </div>
          </div>

          <div className="card">
            <span className="icon">
                <FontAwesomeIcon icon={icons.dress}/>
            </span>
            <div className="info">
              <p>Dress code</p>
              <h3>Fantasias</h3>
              <p>Obrigatório!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detalhes;
