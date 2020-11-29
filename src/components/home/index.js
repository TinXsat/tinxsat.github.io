import { ReactComponent as Logo } from '../../images/aboutus.svg';

function Home() {
  return (
    <div className="home">
      <div className="svg-anim">
          <Logo/>
      </div>
      <div className="container">
        <div className="cont">
          <div className="home__section">
            <div className="home__header title">Kim jesteśmy?</div>
            <div className="home__text">
              TinX to grupa uczniów. Połączona wspólnym 
              celem stworzenia misji na konkurs <span className="primary">CanSat.</span>
            </div>
          </div>
        </div>

        <div className="cont">
          <div className="home__section">
            <div className="home__header title">Współpracuj z nami!</div>
            <div className="home__text">
              Chcesz nam <span className="primary">pomóc</span> lub chcesz zorganiować 
              <span className="primary"> warsztaty?</span> To dobrze trafiłeś!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
