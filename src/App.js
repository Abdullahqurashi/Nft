import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import About from './component/About';
import Roadmap from './component/Roadmap';
import Features from './component/Features';
import Faq from './component/Faq';
import Footer from './component/Footer';



function App() {
  return (
    <>
   <Nav/>
   
   <About/>
   <Roadmap/>
  <Features/>
  <Faq/>
    <Footer/> 
    </>
  );
}

export default App;
