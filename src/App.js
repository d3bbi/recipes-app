import React, { useEffect, useState } from "react";
import './App.css';
import Recipe from "./Components/Recipe/Recipe";
import Form from "./Components/Form/Form";
import ResultBar from "./Components/ResultBar/ResultBar";
import Header from "./Components/Header/Header";

const App = () => {

  const APP_ID = "ce40a271";
  const APP_KEY = "6a572bfc190f5a5010daf4e65137c97f	";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('pasta');

  useEffect(() => {
    getRecipes();
  }, [query]) //by adding the array the effect runs only when the app mounts

  const getRecipes = async () => {
    //await needed as is an external response
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    //we wait the response fetched and then we get the data
    const data = await response.json();
    setRecipes([]);
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault(); //stop refresh
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <Header/>
      
      <Form
        getSearch={getSearch}
        search={search}
        updateSearch={updateSearch}
      />
      <ResultBar 
        search = {query}/>
      <div className="recipes-container">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            dietLabels={recipe.recipe.dietLabels}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />

        ))}
      </div>
    </div>
  );
}

export default App;
