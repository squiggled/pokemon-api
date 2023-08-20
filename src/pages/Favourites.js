import React from "react";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import FavsChart from "../components/FavsChart";
import { NavLink } from "react-router-dom";

function Favourites({ favourites, addFavsHandler, stringFormatter }) {
  return (
    <>
      <NavBar />
      {/* {favourites} */}
      <h1 className="sm:ml-[180px] text-center mt-2 font-bold text-5xl">
        Favourites
      </h1>
      <div
        className="sm:ml-[260px] grid gap-2 w-3/4 items-center bg-white"
        id="favsList"
      >
        {favourites.map((x) =>
          favourites.length > 0 ? (
            <div
              className="text-center p-2 border-2 border-gray-200 border-dashed rounded-lg m-3 "
              id="pokemonCard"
            >
              <div className="grid grid-cols-1 ">
                <h1 className="mt-1 font-bold text-2xl text-center">
                  <NavLink to={`/pokemon/${x.id}`} key={x.id}>
                    #{x.id} {stringFormatter(x.species.name)}
                  </NavLink>
                  <Button
                    className="inline-flex items-center ml-3 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    id={x.id}
                    favourites={favourites}
                    addFavsHandler={addFavsHandler}
                  />
                </h1>
              </div>
              <div className="grid grid-cols-2">
                <div>
                  <NavLink to={`/pokemon/${x.id}`} key={x.id}>
                    <img
                      className="max-h-[300px] ml-6"
                      key={x}
                      src={x.sprites.other["official-artwork"]["front_default"]}
                      alt={x.name}
                    />
                  </NavLink>
                </div>

                <div>
                  <FavsChart stats={x.stats} />
                </div>
              </div>
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
