import React, { useState } from 'react';
import Axios from 'axios';

const RecipeForm = props => {

    const [ recipeName, setRecipeName ] = useState('');

    //button click handler
    const createRecipe = () => {
        const recipe = { name: 'test' };
        axios.post('/recipe/create', recipe)
    }
    console.log('recipe form hello')

    return (
        <div className="RecipeForm">
            Create Recipe
            <form>
                <input name="name" type="text" placeholder="Recipe Name"></input>
                <input name="image" type="file"></input>
                <input name="ingredient1" type="text" placeholder="Ingredient"></input><input name="measure1" type="text" placeholder="Volume"></input>
                <button type="submit" value="create recipe" onClick={createRecipe}>Create Recipe</button>
            </form>
        </div>
    )
};

export default RecipeForm;