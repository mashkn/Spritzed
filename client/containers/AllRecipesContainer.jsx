import React, { useEffect, useState } from 'react';



const AllRecipesContainer = props => {
  //useState
  const [allCocktails, setAllCocktails] = useState([]);
  //result array
  //useEffect
  useEffect(() => {
    getRecipesAPI();
  }, []);

  //getting the recipes from the api
  const getRecipesAPI = async () => {

    //storing the cocktails in local storage instead of grabbing them from the api each time
    const check = localStorage.getItem('allCocktails');
    if (check) {
      setAllCocktails(JSON.parse(check))
    } else {
      const allRecipesAPI = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`);
      const data = await allRecipesAPI.json();
      data.drinks.shift();
      // console.log(allCocktailsArr);
      localStorage.setItem('allCocktails', JSON.stringify(data.drinks))
      setAllCocktails(data.drinks);
    };
  };



  return (
    <div className="allRecipesContainer">
      <h2 >All Cocktails by Name</h2>
      

        {allCocktails.map((cocktail) => {
          return (
            
            //   <RecipeBox cocktail={cocktail.strDrink} image={cocktail.strDrinkThumb} key={cocktail.idDrink} />
            <div className="recipe">
              <a href={`http://localhost:8080/recipes/view/?recipeId=${cocktail.idDrink}`}>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}></img>
              <p><span>{cocktail.strDrink}</span></p>
              </a>
            </div>
          );
        })}
    </div>
  )
};




export default AllRecipesContainer;