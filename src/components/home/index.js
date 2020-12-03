import { useEffect, useRef } from 'react';
import { ReactComponent as Logo } from '../../images/aboutus.svg';
import gsap from 'gsap';

function Home() {
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;

    const rocket = elements.getElementById('Rocket');
    const hand = elements.getElementById('Vector_73');
    const button = elements.getElementById('Vector_72');

    const tl = gsap.timeline({defaults: {ease: "power3.inOut"}});

    tl.to(hand, {duration: 1, x: '-=6.5'})
    .to(button, {duration: 0.4, fill: 'red'}, '-=0.3')
    .to(button, {duration: 0.4, fill: '#61AFDA'})
    .to(hand, {duration: 1, x: '+=6.5'}, '-=0.9')
    .to(rocket, {duration: 2, y: '-=1000'})
    .to(rocket, {duration: 3, y: '+=1000'})
    .delay(2)
    .repeat(-1)
  })

  return (
    <div className="home">
      <div ref={wrapper} className="svg-anim">
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
