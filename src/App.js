
import './App.css';
import Cards from './components/Card';
import Carousel1 from './components/Carousel';
import NavBar from './components/NavBar';
import Toasts1 from './components/Toasts';


function App() {
  return (

    <div className="App">
    <NavBar />
    <Toasts1 />
    <br />
    <Cards/>
    <br /> <br />
    <Carousel1 />
    
    
      
    </div>
  );
}

export default App;
