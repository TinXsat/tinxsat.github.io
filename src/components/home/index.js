function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="home__section">
          <div className="home__header">Kim jesteśmy?</div>
          <div className="home__text">
            TinX to grupa uczniów. Połączona wspólnym 
            celem stworzenia misji na konkurs <span className="primary">CanSat.</span>
          </div>
        </div>

        <div className="home__section buged">
          <div className="home__header">Współpracuj z nami!</div>
          <div className="home__text">
            Chcesz nam <span className="primary">pomóc</span> lub chcesz zorganiować 
            <span className="primary"> warsztaty?</span> To dobrze trafiłeś!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
