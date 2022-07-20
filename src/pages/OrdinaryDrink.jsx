import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/card.css';
import { Link } from 'react-router-dom';

export const OrdinaryDrink = () => {
  //https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11001
  const [ordinaryList, setordinaryList] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink'
      )
      .then((res) => {
        setordinaryList(res.data.drinks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Ordinary Drink</h1>
      <main className='page-content'>
        {ordinaryList.map((ordinary) => (
          <div
            className='card'
            key={ordinary.idDrink}
            style={{
              backgroundImage: `url(${ordinary.strDrinkThumb})`,
              backgroundRepeat: 'no-repeat',
              backgroundattachment: 'fixed',
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
            }}>
            <div className='content'>
              <h2 className='title'>{ordinary.strDrink}</h2>
              <p className='copy'>{ordinary.strInstructions}</p>
              <Link
                to={`/OrdinaryDrink/info?ID=${ordinary.idDrink}`}
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
