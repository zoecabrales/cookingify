import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useTheme } from "../../hooks/useTheme";

import "./RecipeStyles.css";

import React from "react";

const Recipe = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { error, isPending, data: recipe } = useFetch(url);

  const { color, mode } = useTheme();

  return (
    <div className={`recipe ${mode}`} style={{ background: color }}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <div>
          <h2 className="page-title">
            {recipe.title}
            <p
              style={{ fontSize: "0.8em", fontWeight: 500, marginTop: "50px" }}
            >
              Takes {recipe.cookingTime} to cook
            </p>
            <ul>
              {recipe.ingredients.map((ing) => (
                <li key={ing} className="body">
                  {ing}
                </li>
              ))}
            </ul>
            <p
              className="method"
              style={{ fontSize: "0.8em", fontWeight: 500, marginTop: "50px" }}
            >
              {recipe.method}
            </p>
          </h2>
        </div>
      )}
    </div>
  );
};

export default Recipe;
