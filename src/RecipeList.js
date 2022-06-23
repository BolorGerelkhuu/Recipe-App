import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes, deleteRecipe }) {
  const recipeList = recipes.map((recipe, index) => {
    return (
      <Recipe
        recipe={recipe}
        deleteRecipe={() => deleteRecipe(index)}
        key={index}
      />
    );
  });

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{recipeList}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
