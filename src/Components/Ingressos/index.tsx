import "../../styles/ingressos.scss";

const Ingressos = () => {
  return (
    <section id="ingresso">
        <div className="tittle">
            <h1>Confirme a sua presença</h1>
            <p>Não perca a festa mais assustadora do ano! Confirme já sua presença.</p>
        </div>
      <form>
        <div>
          <label htmlFor="">Nome completo *</label>
          <input type="text" placeholder="Seu nome assombrado..." />
        </div>

        <div>
          <label htmlFor="">Email *</label>
          <input type="email" placeholder="seu@email.com" />
        </div>

        <div>
          <label htmlFor="">Número de convidados</label>
          <select name="" id="">
            <option value="" selected disabled>Escolha...</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
        </div>

        <div>
          <label htmlFor="">Sua fantasia</label>
          <input type="text" placeholder="Vampriro, Bruxa, Zumbi" />
        </div>

        <div>
          <label htmlFor="">Mensagem (Opcional)</label>
          <textarea name="" id=""></textarea>
        </div>

        <button type="submit">Confirmar presença agora!</button>
      </form>
    </section>
  );
};

export default Ingressos;
