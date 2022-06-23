import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeData from "./RecipeData";
import RecipeList from "./RecipeList";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const deleteRecipe = (id) => { setRecipes(recipes.filter((recipe, index) => index !== id)); }

  const submitRecipe = (recipe) => setRecipes([...recipes, recipe]);

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate submitRecipe={submitRecipe} />
    </div>
  );
}

export default App;
