import {ReactComponent as SVG} from "../../images/home1.svg"

function Header() {
  return (
    <div className="header">
        <SVG className="logo"/>
      
      <div className="header__text">
        Witaj, <br/>na stronie zespołu <br/><span className="header__text--primary">TinX!</span>
      </div>
    </div>
  );
}

export default Header;
 