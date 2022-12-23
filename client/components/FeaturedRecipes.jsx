import React, { useEffect, useState } from 'react';
import RecipeBox from '../components/RecipeBox.jsx';
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';


const FeaturedRecipes = props => {
  //useState
  const [featuredCocktails, setFeaturedCocktails] = useState([]);
  //result array
  const cocktailArr = [];
  //useEffect
  useEffect(() => {
    getFeaturedRecipesAPI();
  }, []);

  //getting the recipes from the api
  const getFeaturedRecipesAPI = async () => {

    //storing the cocktails in local storage instead of grabbing them from the api each time
    const check = localStorage.getItem('featuredCocktails');
    if (check) {
      setFeaturedCocktails(JSON.parse(check))
    } else {
      const recipesAPI1 = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=sherry eggnog`);
      const data1 = await recipesAPI1.json();
      const recipesAPI2 = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=French Negroni`);
      const data2 = await recipesAPI2.json();
      const recipesAPI3 = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=Chocolate Black Russian`);
      const data3 = await recipesAPI3.json();
      const recipesAPI4 = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=747`);
      const data4 = await recipesAPI4.json();
      const recipesAPI5 = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=applejack`);
      const data5 = await recipesAPI5.json();
      const recipesAPI6 = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=dark and stormy`);
      const data6 = await recipesAPI6.json();
      cocktailArr.push(data1.drinks[0],
        data2.drinks[0],
        data3.drinks[0],
        data4.drinks[0],
        data5.drinks[0],
        data6.drinks[0]);
      // console.log(cocktailArr);
      localStorage.setItem('featuredCocktails', JSON.stringify(cocktailArr))
      setFeaturedCocktails(cocktailArr);
    };
  };

  return (
    <div className="RecipeContainer">
      <h2 id="header">Featured</h2>
      <Splide options={{
        perPage: 3,
        arrows: false,
        pagination: false,
        drag: "free",
        gap: "1.5rem"
      }}>

        {featuredCocktails.map((cocktail) => {
          return (
            <SplideSlide>
              <a href={`http://localhost:8080/recipes/view/?recipeId=${cocktail.idDrink}`}><RecipeBox cocktail={cocktail.strDrink} image={cocktail.strDrinkThumb} key={cocktail.idDrink} /></a>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  )
};

export default FeaturedRecipes;