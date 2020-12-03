import {ReactComponent as SVG} from "../../images/home1.svg"
import {ReactComponent as Arrow} from "../../images/arrow.svg"

function Header() {
  return (
    <div className="header">
      <div className="container">
        <SVG className="logo"/>
        <div className="header__text">
          Witaj, <br/>na stronie zespołu <br/><span className="primary logo-text">TinX!</span>
        </div>
      </div>

      <a id="arrow" href="#h"><Arrow className="arrow" /></a>
    </div>
  );
}

export default Header;