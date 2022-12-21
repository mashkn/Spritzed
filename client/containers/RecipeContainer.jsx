import React, { useEffect, useState } from 'react';
import RecipeBox from '../components/RecipeBox.jsx';
import { Splide, SplideSlide } from "@splidejs/react-splide";


const RecipeContainer = props => {
  //useState
  const [cocktails, setCocktails] = useState([]);
  //result array
  const cocktailArr = [];
  //useEffect
  useEffect(() => {
    getRecipesAPI();
  }, []);

  //getting the recipes from the api
  const getRecipesAPI = async () => {

    //storing the cocktails in local storage instead of grabbing them from the api each time
    const check = localStorage.getItem('cocktails');
    if (check) {
      setCocktails(JSON.parse(check))
    } else {
      const recipesAPI1 = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=negroni`);
      const data1 = await recipesAPI1.json();
      const recipesAPI2 = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=raspberry julep`);
      const data2 = await recipesAPI2.json();
      const recipesAPI3 = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=vodka tonic`);
      const data3 = await recipesAPI3.json();
      const recipesAPI4 = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=mojito`);
      const data4 = await recipesAPI4.json();
      const recipesAPI5 = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=mimosa`);
      const data5 = await recipesAPI5.json();
      const recipesAPI6 = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=whiskey sour`);
      const data6 = await recipesAPI6.json();
      const recipesAPI7 = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=spice 75`);
      const data7 = await recipesAPI7.json();
      const recipesAPI8 = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=homemade kahlua`);
      const data8 = await recipesAPI8.json();
      const recipesAPI9 = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=balmoral`);
      const data9 = await recipesAPI9.json();
      const recipesAPI10 = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=cosmopolitan`);
      const data10 = await recipesAPI10.json();
      cocktailArr.push(data1.drinks[0],
        data2.drinks[0],
        data3.drinks[0],
        data4.drinks[0],
        data5.drinks[0],
        data6.drinks[0],
        data7.drinks[0],
        data8.drinks[0],
        data9.drinks[0],
        data10.drinks[0]);
      // console.log(cocktailArr);
      localStorage.setItem('cocktails', JSON.stringify(cocktailArr))
      setCocktails(cocktailArr);
    };
  };

  return (
    <div className="RecipeContainer">
      <h1 id="header">Random recipes from the api</h1>
      <Splide options={{
        perPage:4,
        arrows: false,
        pagination: false,
        drag: "free",
        gap: "1rem"
      }}>

        {cocktails.map((cocktail) => {
          return (
            <SplideSlide>
              <RecipeBox cocktail={cocktail.strDrink} image={cocktail.strDrinkThumb} key={cocktail.idDrink} />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  )
};




export default RecipeContainer;