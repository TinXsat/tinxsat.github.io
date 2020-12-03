import {ReactComponent as BD} from '../../images/bluedot.svg'; 
import {ReactComponent as UR} from '../../images/ur.svg'; 
import {ReactComponent as K} from '../../images/kosmonauta.svg'; 
import {ReactComponent as N} from '../../images/nettigo.svg'; 

function Partnership() {
    return (
      <div className="partnership">
        <div className="container">
          <div className="partnership__section">
            <div className="cont auto">
              <div className="partnership__header title">Chciałbyś nam pomóc?</div>
              <div className="partnership__text">
              Przyda nam się każda <span className="primary">pomoc.</span> Chcesz napisać o naszym projekcie? Wspomóc nas finansowo? Dać dobrą radę? Skontaktuj się z nami!
              <br/>
              <span className="primary">E-mail:</span> tinxcasat@gmail.com
              <br/>
              <span className="primary">Telefon:</span> 533 900 794
              </div>
            </div>
            <div className="partnership__baners">
              <figure>
                <BD />
                <UR />
                <N className="nettigo" />
                <K />
              </figure>
            </div>
          </div>
        </div>
      </div>
    );
}
  
export default Partnership;
  