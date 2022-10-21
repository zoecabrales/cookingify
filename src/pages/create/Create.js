import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useTheme } from "../../hooks/useTheme";

import "./CreateStyles.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);
  const navigate = useNavigate();

  const { color, mode } = useTheme();

  const { postData, data, error } = useFetch(
    "http://localhost:3000/recipes",
    "POST"
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    postData({
      title,
      ingredients,
      method,
      cookingTime: cookingTime + " minutes ",
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();

    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }
    setNewIngredient("");
    ingredientInput.current.focus();
  };

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data]);

  return (
    <div className={`create ${mode}`}>
      <h2 className="page-title">Add a new recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title</span>
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe Ingredients: </span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button
              className="btn"
              onClick={handleAdd}
              style={{ background: color }}
            >
              Add
            </button>
          </div>
        </label>

        <p>
          Current Ingredients:{" "}
          {ingredients.map((i) => (
            <em key={i}>{i},</em>
          ))}
        </p>

        <label>
          <span>Recipe Method</span>
          <textarea
            onChange={(e) => {
              setMethod(e.target.value);
            }}
            value={method}
            required
          />
        </label>
        <label>
          <span>Cooking Time (minutes):</span>
          <input
            type="number"
            onChange={(e) => {
              setCookingTime(e.target.value);
            }}
            value={cookingTime}
            required
          ></input>
        </label>
        <button className="btn" type="submit" style={{ background: color }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
