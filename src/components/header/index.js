import { useEffect, useRef } from 'react';
import { TimelineLite } from 'gsap';
import {ReactComponent as SVG} from "../../images/home1.svg"

function Header() {
  const wrapper = useRef(null);

  useEffect(() => {
    const elements = wrapper.current.children;

    const tl = new TimelineLite({defaults: {ease: "power3.inOut"}});
  })

  return (
    <div ref={wrapper} className="header">
        <SVG className="logo"/>
      <div className="header__text">
        Witaj, <br/>na stronie zespołu <br/><span className="primary logo-text">TinX!</span>
      </div>
    </div>
  );
}

export default Header;