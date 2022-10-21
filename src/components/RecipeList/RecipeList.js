import { Link } from "react-router-dom";

import { useTheme } from "../../hooks/useTheme";

import React from "react";

import "./RecipeListStyles.css";

const RecipeList = ({ recipes }) => {
  const { color, mode } = useTheme();

  if (recipes.length === 0) {
    return <div className="error">No recipes found...</div>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className={`card ${mode}`}
          style={{ background: color }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
