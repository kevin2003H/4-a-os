
function Envelope({ onOpen, isOpening }) {
  return (
    <section className="envelope-container">

      <p className="subtitle">
        PARA ALGUIEN MUY ESPECIAL ❤️
      </p>

      <h1>Tengo algo para ti...</h1>

      <button
        className={`envelope ${isOpening ? "opening" : ""}`}
        onClick={onOpen}
        disabled={isOpening}
        aria-label="Abrir carta de amor"
      >
        <div className="envelope-back"></div>

        <div className="letter-preview">
          <span>Con mucho amor ❤️</span>
        </div>

        <div className="envelope-front"></div>

        <div className="envelope-flap"></div>

        <div className="envelope-heart">♥</div>
      </button>

      <p className="click-text">
        {isOpening
          ? "Preparé algo muy especial para ti... ❤️"
          : "Toca el sobre para descubrir tu sorpresa"}
      </p>

    </section>
  );
}

export default Envelope;
