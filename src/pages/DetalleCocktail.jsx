import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

export const DetalleCocktail = () => {
  const ingredientes = [];

  const [searchParams] = useSearchParams();

  const id = searchParams.get('ID');

  const [cocktail, setCocktail] = useState(null);
  const [ingredientesCocktail, setIngredientesCocktail] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        setCocktail(res.data.drinks[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        // `strIngredient${i}`
        for (let i = 1; i <= 15; i++) {
          if (res.data.drinks[0][`strIngredient${i}`]) {
            ingredientes.push({
              i: res.data.drinks[0][`strIngredient${i}`],
              cant: res.data.drinks[0][`strMeasure${i}`],
            });
          }
        }
        setIngredientesCocktail(ingredientes);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  //obtener imagen de los ingredientes

  return (
    <>
      {cocktail && (
        <>
          <h1>{cocktail.strDrink}</h1>
          {/* <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} /> */}

          <div className='row'>
            <div className='col-4'>
              {cocktail.strDrinkThumb && (
                <img
                  src={cocktail.strDrinkThumb}
                  alt={cocktail.strDrink}
                  className='img-fluid'
                />
              )}
            </div>
            <div className='col-8'>
              <p>{cocktail.strInstructions}</p>
              <p>{cocktail.strCategory}</p>
              <p>{cocktail.strAlcoholic}</p>
              <p>{cocktail.strGlass}</p>

              <h2>Ingredientes</h2>
              {ingredientesCocktail.map((ingrediente) => (
                <div key={ingrediente.i}>
                  <p>{ingrediente.i}</p>
                  <p>{ingrediente.cant}</p>
                  <img
                    src={`https://www.thecocktaildb.com/images/ingredients/${ingrediente.i}-medium.png`}
                    alt={ingrediente.i}
                    className='img-fluid'
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};
