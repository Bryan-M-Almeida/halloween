import "./styles/style.scss";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Detalhes from "./Components/Detalhes";
import Fantasias from "./Components/Fantasias";
import Footer from "./Components/Footer";
import Ingressos from "./Components/Ingressos";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Detalhes />
      <Fantasias />
      <Ingressos />
      <Footer />
    </>
  );
}

export default App;
