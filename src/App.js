
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import NavBar from './Components/NavBar';
// import Footer from './Components/Footer';
import Accueil from './Pages/Accueil/Accueil';
import Customer from './Pages/Customer/Customer';
import Pricing from './Pages/Pricing/Pricing';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path='/' Component={Accueil}/>
          <Route path='/customer' Component={Customer}/>
          <Route path='/pricing' Component={Pricing}/>

        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
