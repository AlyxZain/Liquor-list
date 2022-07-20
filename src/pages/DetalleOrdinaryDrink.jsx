import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

export const DetalleordinaryDrink = () => {
  const ingredientes = [];

  const [searchParams] = useSearchParams();

  const id = searchParams.get('ID');

  const [ordinaryDrink, setOrdinaryDrink] = useState(null);
  const [ingredientesordinaryDrink, setingredientesordinaryDrink] = useState(
    []
  );

  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        setOrdinaryDrink(res.data.drinks[0]);
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
        setingredientesordinaryDrink(ingredientes);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  //obtener imagen de los ingredientes

  return (
    <>
      {ordinaryDrink && (
        <>
          <h1>{ordinaryDrink.strDrink}</h1>
          {/* <img src={ordinaryDrink.strDrinkThumb} alt={ordinaryDrink.strDrink} /> */}

          <div className='row'>
            <div className='col-4'>
              {ordinaryDrink.strDrinkThumb && (
                <img
                  src={ordinaryDrink.strDrinkThumb}
                  alt={ordinaryDrink.strDrink}
                  className='img-fluid'
                />
              )}
            </div>
            <div className='col-8'>
              <p>{ordinaryDrink.strInstructions}</p>
              <p>{ordinaryDrink.strCategory}</p>
              <p>{ordinaryDrink.strAlcoholic}</p>
              <p>{ordinaryDrink.strGlass}</p>

              <h2>Ingredientes</h2>
              {ingredientesordinaryDrink.map((ingrediente) => (
                <div key={ingrediente.i}>
                  <p>{ingrediente.i}</p>
                  <p>{ingrediente.cant}</p>
                  <img
                    src={`https://www.thecocktaildb.com/images/ingredients/${ingrediente.i}-Small.png`}
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
