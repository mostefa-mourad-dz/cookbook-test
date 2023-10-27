import React from "react";

const RecipeDetail = ({ selectedRecipe }) => {
  return (
    <div className="recipe-details">
      <h2>Recipe Details</h2>
      {selectedRecipe ? (
        <div>
          <h3>{selectedRecipe.name}</h3>
          <p>Author: {selectedRecipe.author}</p>
          <p>Description: {selectedRecipe.description}</p>
        </div>
      ) : (
        <p>Select a recipe from the list to view details.</p>
      )}
    </div>
  );
};

export default RecipeDetail;
