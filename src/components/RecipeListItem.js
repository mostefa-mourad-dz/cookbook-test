import React, { useState } from "react";

function RecipeListItem({ recipe, onSelectRecipe }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    onSelectRecipe(recipe);
  };

  return (
    <div
      className={`recipe-list-item ${isHovered ? "hovered" : ""}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3>{recipe.name}</h3>
      <p>Author: {recipe.author}</p>
    </div>
  );
}

export default RecipeListItem;
