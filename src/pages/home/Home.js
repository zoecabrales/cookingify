import React from "react";

//hooks
import { useFetch } from "../../hooks/useFetch";
//components
import RecipeList from "../../components/RecipeList/RecipeList";

import "./HomeStyles.css";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes");

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Home;
