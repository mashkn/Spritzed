import React, { useState, useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';

const RecipeView = props => {

    const [searchParams] = useSearchParams();
    const [recipe, setRecipe] = useState([]);
    // console.log(searchParams.get("recipeId"));
    // console.log(this.props.match.params.cocktailId)
    // console.log(recipeId);

    const recipeId = searchParams.get("recipeId");

    useEffect(() => {
        getRecipeDetails();
      }, []);
    
      //getting the recipes from the api
      const getRecipeDetails = async () => {
    
        //storing the cocktails in local storage instead of grabbing them from the api each time
            if(recipeId){
                //   console.log('Im getting here??? - BEFORE FETCH');
          const recipeAPI = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
          const data = await recipeAPI.json();
        //   console.log(data.json());
          setRecipe(data.drinks[0]);
          // data.drinks.shift();
        //   console.log('Im getting here??? - AFTER FETCH');
        //   setCommCocktails(data);
            } else {
                const recipeAPI2 = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
          const data2 = await recipeAPI2.json();
        //   console.log(data.json());
          setRecipe(data2.drinks[0]);
            }
        
    
      };
    
        return (
            <div className="RecipeForm">
                
            <div className="MainForm">
            <img src={recipe.strDrinkThumb} alt="cocktail image"/><h2>{recipe.strDrink}</h2>
            <hr/>
            <h3>Ingredients</h3>
            <ul>
                {Object.keys(recipe).map(key => {
                    if((key.includes("Ingredient")) && recipe[key]){
                        return <li>{recipe[`strMeasure${key.slice(-1)}`]}{recipe[key]}</li>
                    }
                })}
            </ul>
            <br/>
            <h3>Instructions</h3>
            <hr/>
            <p>{recipe.strInstructions}</p>
            </div>
            {/* <button type="submit" onClick={createRecipe}>Create Recipe</button> */}
        </div>
        )
    };

export default RecipeView;