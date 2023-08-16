import "../App.css";
import logo from "../img/logo.png";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import Search from "../components/Search";
import LoadButton from "../components/LoadButton";

function Home({
  pokemon,
  setPokemon,
  input,
  setInput,
  results,
  favourites,
  setFavourites,
  addFavsHandler,
  handleSearch,
  submitSearch,
  fetchLoadMore,
  fetchInitialPokemon,
  stringFormatter,
}) {
  let initialLoad = true;

  useEffect(() => {
    if (initialLoad) {
      fetchInitialPokemon();
      initialLoad = false;
    }
  }, []);

  return (
    <div className="" id="App">
      {/* NavBar */}
      <NavBar
        favourites={favourites}
        addFavsHandler={addFavsHandler}
        setFavourites={setFavourites}
      />

      {/* Logo and header */}
      <div className="w-fit" id="main">
        <NavLink to="/">
          <img id="logo" src={logo} alt="logo"></img>
        </NavLink>
        <h1 className="text-center font-bold text-xl">Team Builder</h1>
        {pokemon.length === 0 ? (
          <h4 className="text-center">no pokemon loaded </h4>
        ) : (
          <h4 className="text-center"> {pokemon.length} wild Pokémon found</h4>
        )}
        {results > 1 && <p>About {results} results found</p>}

        <div id="main">
          {/* Search */}
          <Search
            pokemon={pokemon}
            setPokemon={setPokemon}
            handleSearch={handleSearch}
            input={input}
            setInput={setInput}
            submitSearch={submitSearch}
          />

          {/* Main */}
          <div
            className="sm:ml-[260px] grid lg:grid-cols-4 gap-2 md:grid-cols-2 bg-white"
            id="pokemonList"
          >
            {/* {(pokemon.length === 0)  && <p>No Pokemon Found!</p>} */}
            {pokemon.map((x) => (
              <div
                className="text-center p-2 border-2 border-gray-200 border-dashed rounded-lg m-3 "
                id="pokemonCard"
              >
                <NavLink
                  to={`pokemon/${x.id}`}
                  state={{ stateParam: pokemon }}
                  key={x.id}
                >
                  <img
                    key={x}
                    alt={x.name}
                    src={x.sprites.other["official-artwork"]["front_default"]}
                  />
                </NavLink>
                <span className="font-bold text-xl mb-5">
                  <NavLink
                    to={`pokemon/${x.id}`}
                    state={{ stateParam: pokemon }}
                    key={x.id}
                  >
                    {stringFormatter(x.species.name)} 
                  </NavLink>
                </span>
                <br></br>

                <Button
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700"
                  id={x.id}
                  addFavsHandler={addFavsHandler}
                  favourites={favourites}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <LoadButton
              className="px-3 py-2 lg:ml-[260px] mb-6 text-xl font-bold text-center text-black rounded-lg focus:outline-none bg-white border border-gray-800 focus:ring-2  focus:ring-blue-300 "
              fetchLoadMore={fetchLoadMore}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
