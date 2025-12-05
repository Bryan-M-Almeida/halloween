import "../../styles/fantasias.scss";

const Fantasias = () => {
  return (
    <>
      <section id="fantasias">
        <h2>Inspirações de fantasias</h2>
        <p>
          Solte sua criatividade e venha caracterizado! Aqui estão algumas
          <br />
          ideias para você arrasar na festa.
        </p>

        <div className="cards-container">
          <div className="card">
            <span>&#x1F9DB;</span>

            <div className="info">
              <h3>Vampiro</h3>
              <p>Clássico e elegante</p>
            </div>
          </div>

          <div className="card">
            <span>&#129497;</span>

            <div className="info">
              <h3>Bruxo</h3>
              <p>Misterioso e poderoso</p>
            </div>
          </div>

          <div className="card">
            <span>&#x1F47B;</span>

            <div className="info">
              <h3>Fantasma</h3>
              <p>Assustador e simples</p>
            </div>
          </div>

          <div className="card">
            <span>&#129503;</span>

            <div className="info">
              <h3>Zumbi</h3>
              <p>Morto-vivo faminto</p>
            </div>
          </div>

          <div className="card">
            <span>&#x1F921;</span>

            <div className="info">
              <h3>Palhaço</h3>
              <p>Terrível e divertido</p>
            </div>
          </div>

          <div className="card">
            <span>&#x1F43A;</span>

            <div className="info">
              <h3>Lobisomem</h3>
              <p>Selvagem e feroz</p>
            </div>
          </div>
        </div>

        <div className="concurso-container">
          <h4>Concurso de fantasias</h4>

          <p>
            Melhor fantasia ganha um prêmio especial! Prepare-se para competir.
          </p>

          <button>Enviar fantasia</button>
        </div>
      </section>
    </>
  );
};

export default Fantasias;
