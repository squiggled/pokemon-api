import React from "react";
import NavBar from "../components/NavBar";
import Button from "../components/Button";

import { NavLink } from "react-router-dom";

function Favourites({
  favourites,
  setFavourites,
  addFavsHandler,
  stringFormatter,
}) {
  return (
    <>
      <NavBar />
      {/* {favourites} */}
      <h1 className="text-center mt-2 font-bold text-5xl">Favourites</h1>
      <div
        className="md:ml-[260px] grid lg:grid-cols-4 gap-2 md:grid-cols-2 bg-white"
        id="favsList"
      >
        {favourites.map((x) =>
          favourites.length > 0 ? (
            <div
              className="text-center p-2 border-2 border-gray-200 border-dashed rounded-lg m-3 "
              id="pokemonCard"
            >
              {/* <NavLink 
                    to={`/${x.id}`} 
                    state={{stateParam: pokemon}}
                    key={x.id}> */}
              <img
                key={x}
                src={x.sprites.other["official-artwork"]["front_default"]}
                alt={x.name}
              />
              {/* </NavLink> */}
              <span className="font-bold text-xl mb-5">
                {/* <NavLink 
                    to={`/${x.id}`} 
                    state={{stateParam: pokemon}}
                    key={x.id}
                    >  */}
                #{x.id} {stringFormatter(x.species.name)}
                {/* </NavLink>  */}
              </span>
              <br></br>

              <Button
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                id={x.id}
                favourites={favourites}
                addFavsHandler={addFavsHandler}
              />
            </div>
          ) : (
            <p>No Favourites added!</p>
          )
        )}
      </div>
    </>
  );
}

export default Favourites;
