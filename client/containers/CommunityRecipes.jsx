import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch';



const CommunityRecipes = props => {
  //useState
  const [commCocktails, setCommCocktails] = useState([]);
  //result array
  //useEffect
  useEffect(() => {
    getRecipesMongo();
  }, []);

  //getting the recipes from the api
  const getRecipesMongo = async () => {

    //storing the cocktails in local storage instead of grabbing them from the api each time
    
      console.log('Im getting here??? - BEFORE FETCH');
      const commRecipes = await fetch(`http://localhost:3000/recipes/community`);
      const data = await commRecipes.json();
      console.log(commRecipes);
      // data.drinks.shift();
      console.log('Im getting here??? - AFTER FETCH');
      setCommCocktails(data);

  };

  return (
    <div className="allRecipesContainer">
      <h2 >Check out the latest community additons:</h2>
      

        {commCocktails.map((cocktail) => {
          return (
            
            //   <RecipeBox cocktail={cocktail.strDrink} image={cocktail.strDrinkThumb} key={cocktail.idDrink} />
            <div className="recipe">
              
              <img src={cocktail.image} alt={cocktail.name}></img>
              <p><span>{cocktail.name}</span></p>
              
            </div>
          );
        })}
    </div>
  )
};




export default CommunityRecipes;