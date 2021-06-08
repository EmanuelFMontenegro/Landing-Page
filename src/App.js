import './App.scss';
import Header from "./components/Header/header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/about";
import Producto from "./components/Producto/producto";
import Servicios from "./components/Servicios/Services";
import Contacto from "./containers/Contactos/contactos";
import Footer from "./components/Footer/footer";


const App =() => {
  return (
        <div ClassName="App">
          <Header/>
          <Hero/>
          <About/>
          <Producto/>
          <Servicios/>
          <Contacto/>
          <Footer/>
        </div>
  );
}

export default App;
