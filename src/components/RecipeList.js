import React from "react";
import RecipeListItem from "./RecipeListItem";

const RecipeList = ({ recipes, onRecipeClick }) => {
  return (
    <div className="recipe-list">
      <h2>Recipe List</h2>
      <ul>
      {recipes.map((recipe, index) => (
          <RecipeListItem
            key={index}
            recipe={recipe}
            onSelectRecipe={onRecipeClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
