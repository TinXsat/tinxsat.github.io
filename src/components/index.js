import Header from "./header";
import Home from "./home";
import About from "./about";
import Partnership from "./partnership";
import Documentation from "./documentation";
import Footer from "./footer";

import logo from '../images/logo.png';

function App() {
  return (
    <div className="App">
        <link
        rel="icon"
        type="image/png"
        href={logo}
        />
        <Header />
        <Home />
        <About />
        <Partnership />
        <Documentation />
        <Footer />
    </div>
  );
}

export default App;
