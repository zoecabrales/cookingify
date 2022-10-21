import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Navbar from "./components/navbar/Navbar";
import Home from "../src/pages/home/Home";
import Create from "../src/pages/create/Create";
import Recipe from "../src/pages/recipe/Recipe";
import Search from "../src/pages/search/Search";
import ThemeSelector from "./components/ThemeSelector/ThemeSelector";

//styles
import "./App.css";
import { useTheme } from "./hooks/useTheme";

const App = () => {
  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/recipes/:id" element={<Recipe />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
