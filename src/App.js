import React, { useState } from "react";
import Home from "./pages/Home";
import PokeDetails from "./pages/PokeDetails";
import Favourites from "./pages/Favourites";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const BASE_URL = "https://pokeapi.co/api/v2/";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [input, setInput] = useState("");
  const [results, setResults] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const [favouritesCount, setFavouritesCount] = useState(0);
  const [offSet, setOffSet] = useState(20);

  function fetchPokemonData(pokemon) {
    let url = pokemon.url; // <--- save pokemon url to a variable
    fetch(url)
      .then((response) => response.json())
      .then(function (pokeData) {
        setPokemon((prevState) => [...prevState, pokeData]);
      });
  }

  function fetchInitialPokemon() {
    fetch(`${BASE_URL}pokemon?limit=20&offset=${0}`)
      .then((response) => response.json())
      .then(function (allpokemon) {
        allpokemon.results.forEach(function (pokemon) {
          fetchPokemonData(pokemon);
        });
      });
  }

  function fetchLoadMore() {
    fetch(`${BASE_URL}pokemon?limit=20&offset=${offSet}`)
      .then((response) => response.json())
      .then(function (allpokemon) {
        setOffSet((prevState) => prevState + 20);
        allpokemon.results.forEach(function (pokemon) {
          fetchPokemonData(pokemon);
        });
      });
  }

  const addFavsHandler = (id) => {
    const pokeFav = pokemon.find((item) => item.id === Number(id));
    if (!favourites.includes(pokeFav)) {
      setFavourites((prevState) => [...prevState, pokeFav]);
      setFavouritesCount((prevState) => prevState + 1);
      console.log("list of favs:", favourites);
    } else {
      setFavourites(favourites.filter((item) => item.id !== id));
      setFavouritesCount((prevState) => prevState - 1);
    }
  };


  async function handleSearch(input) {
    const response = await fetch(`${BASE_URL}pokemon?limit=1008`); //get all pokemon
    const allPokemon = await response.json(); //convert to json
    console.log("list of all pokemon", allPokemon);
    const pokeToShow = allPokemon.results.filter((e) => e.name.toLowerCase().includes(input.toLowerCase()));
    console.log("list of found pokemon in search", pokeToShow);
    pokeToShow.forEach(function(pokemon) {
      console.log("pokeid", pokemon);
      const jsonData = pokemon;
      setPokemon([]);
      fetchPokemonData(jsonData);
    });
  }

  const submitSearch = () => {
    handleSearch(input);
  };

  const stringFormatter = (str) => {
    const newStr = str.replace(/-/g, " ");
    const finalSentence = newStr.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
      letter.toUpperCase()
    );
    return finalSentence;
  };

 

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              pokemon={pokemon}
              setPokemon={setPokemon}
              handleSearch={handleSearch}
              input={input}
              setInput={setInput}
              results={results}
              setResults={setResults}
              submitSearch={submitSearch}
              favourites={favourites}
              setFavourites={setFavourites}
              addFavsHandler={addFavsHandler}
              favouritesCount={favouritesCount}
              setFavouritesCount={setFavouritesCount}
              fetchInitialPokemon={fetchInitialPokemon}
              fetchLoadMore={fetchLoadMore}
              stringFormatter={stringFormatter}
            />
          }
        />
        <Route
          exact
          path="/pokemon/:id"
          element={
            <PokeDetails
              pokemon={pokemon}
              favourites={favourites}
              setFavourites={setFavourites}
              addFavsHandler={addFavsHandler}
              stringFormatter={stringFormatter}
            />
          }
        />
        <Route
          exact
          path="/favourites"
          element={
            <Favourites
              pokemon={pokemon}
              favourites={favourites}
              setFavourites={setFavourites}
              addFavsHandler={addFavsHandler}
              stringFormatter={stringFormatter}
            />
          }
        />
        <Route exact path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
