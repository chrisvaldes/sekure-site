
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import NavBar from './Components/NavBar';
// import Footer from './Components/Footer';
import About from './Pages/About/About';
import Accueil from './Pages/Accueil/Accueil';
import Customer from './Pages/Customer/Customer';
import Pricing from './Pages/Pricing/Pricing';
import Screening from './Pages/Screening/Screening';
import SideBar from './Components/SideBar';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path='/' Component={Accueil}/>
          <Route path='/customer' Component={Customer}/>
          <Route path='/screening' Component={Screening} />
          <Route path='/pricing' Component={Pricing}/>
          <Route path='/about' Component={About}/>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
