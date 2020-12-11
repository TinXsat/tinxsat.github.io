import { ReactComponent as Logo } from '../../images/moon.svg';

function About() {
    return (
      <div className="about"> 
        <div className="container">
          <div className="cont">
            <div className="about__section">
              <div className="about__header title">O Nas</div>
              <div className="about__text">
              <span className="primary">TinX</span> to zespół składający się z pięciu uczniów oraz opiekuna z Zespołu Szkół Elektronicznych w Rzeszowie.
              Drużyna została postawiona przed zadaniem wykonania <span className="primary">CanSata</span>, czyli małego satelity, który zostanie wystrzelony 
              w ramach konkursu organizowanego przez <span className="primary">Europejskie Biuro Edukacji Kosmicznej (ESERO).</span>
              </div>
            </div>
          </div>

          <div className="cont">
            <div className="about__section buged">
              <div className="about__header title">Nasz projekt</div>
              <div className="about__text">
              Ludzkość staje przed coraz to nowymi <span className="primary">problemami.</span> Jednym z takich problemów są <span className="primary">klęski żywiołowe,</span> 
              które z powodu zmian klimatycznych będą powtarzać się coraz częściej. Dlatego zespół <span className="primary">TinX</span> chce opracować 
              tani i niezawodny system, który <span className="primary">pomoże</span> ratować ludzkie zdrowie i życie w trakcie takich zdarzeń.
              </div>
            </div>
          </div>
        </div>

        <div className="svg-anim">
          <Logo/>
        </div>
      </div>
    );
  }
  
  export default About;
  