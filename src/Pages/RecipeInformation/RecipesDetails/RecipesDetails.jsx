import React from "react";
import Recipes from "../Recipes/Recipes";

const RecipesDetails = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe, index) => (
        <Recipes key={index} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipesDetails;
