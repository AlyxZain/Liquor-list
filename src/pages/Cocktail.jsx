import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/card.css';
import { Link } from 'react-router-dom';
{
  /* <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} /> */
}

export const Cocktail = () => {
  //https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11001
  const [cocktailsList, setCocktailsList] = useState([]);

  useEffect(() => {
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then((res) => {
        setCocktailsList(res.data.drinks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cocktailsList]);

  return (
    <>
      <h1>Cocktail</h1>
      <main className='page-content'>
        {cocktailsList.map((cocktail) => (
          <div
            className='card'
            key={cocktail.idDrink}
            style={{
              backgroundImage: `url(${cocktail.strDrinkThumb})`,
              backgroundRepeat: 'no-repeat',
              backgroundattachment: 'fixed',
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
            }}>
            <div className='content'>
              <h2 className='title'>{cocktail.strDrink}</h2>
              <p className='copy'>{cocktail.strInstructions}</p>
              <Link
                to={`/Cocktail/info?ID=${cocktail.idDrink}`}
                className='btn'>
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </main>
    </>
  );
};
