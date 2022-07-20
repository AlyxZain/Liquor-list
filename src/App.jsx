import { Routes, Route } from 'react-router-dom';
import { About, Home, Cocktail, OrdinaryDrink } from './pages';
import { Navbar } from './navBar';
import './styles/App.css';
import { DetalleCocktail } from './pages/DetalleCocktail';
import { DetalleordinaryDrink } from './pages/DetalleOrdinaryDrink';

function App() {
  return (
    <>
      <Navbar />
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='Cocktail' element={<Cocktail />} />
          <Route path='Cocktail/info/' element={<DetalleCocktail />} />
          <Route path='OrdinaryDrink' element={<OrdinaryDrink />} />
          <Route
            path='OrdinaryDrink/info/'
            element={<DetalleordinaryDrink />}
          />
          <Route path='about' element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
