import React, { useState } from "react";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import "./App.css";

const recipes = [
  {
    author: "Jim",
    name: "Chicken Curry",
    description: "Delicious spicy chicken curry",
  },
  {
    author: "Aravind",
    name: "Hamburger",
    description: "Juicy burger with toppings and a soft bun",
  },
];

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="App">
      <RecipeList recipes={recipes} onRecipeClick={handleRecipeClick} />
      <RecipeDetail selectedRecipe={selectedRecipe} />
    </div>
  );
}

export default App;
