import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import MoveTable from "../components/MoveTable";
import Button from "../components/Button";
import Chart from "react-apexcharts";

function PokeDetails({ pokemon, favourites, addFavsHandler, stringFormatter }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const pokeItem = pokemon.find((item) => item.id === Number(id));

  if (!pokeItem) {
    navigate("/");
  }

  console.log("pokeitem in details pg", pokeItem);

  console.log(favourites);

  const data = {
    options: {
      colors: [
        "#F8B4B4",
        "#fdba74",
        "#FCE96A",
        "#84E1BC",
        "#76A9FA",
        "#AC94FA",
      ],
      fontFamily: ["sans", "system-ui"],
      chart: {
        id: "stats-chart",
      },
      plotOptions: {
        bar: {
          distributed: true,
          horizontal: true,
        },
      },
      xaxis: {
        categories: [
          "HP",
          "Attack",
          "Defence",
          "Special Attack",
          "Special Defence",
          "Speed",
        ],
      },
    },
    series: [
      {
        name: "pokemon-stats",
        data: [
          pokeItem.stats[0]["base_stat"],
          pokeItem.stats[1]["base_stat"],
          pokeItem.stats[2]["base_stat"],
          pokeItem.stats[3]["base_stat"],
          pokeItem.stats[4]["base_stat"],
          pokeItem.stats[5]["base_stat"],
        ],
      },
    ],
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="sm:ml-[260px]">
        <h1 className=" mt-4 font-bold text-5xl mb-5 text-center">
          {stringFormatter(pokeItem.name)} #{pokeItem.id}
          <Button
            className="inline-flex items-center px-3 py-2 ml-6 -mt-2 text-sm font-medium text-center text-white  bg-blue-700 rounded-lg hover:bg-blue-800  0 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-yellow-500"
            id={pokeItem.id}
            favourites={favourites}
            addFavsHandler={addFavsHandler}
          />
        </h1>
        <div className="grid lg:grid-cols-2 md:grid-cols-1">
          <div className="grid ">
            <img
              className="mt-3 p-2 border-2 max-w-sm border-gray-200 border-dashed rounded-lg m-3"
              src={pokeItem.sprites.other["official-artwork"]["front_default"]}
              alt={pokeItem.name}
            ></img>
            </div>
            <div className="grid ">
            <Chart
              options={data.options}
              series={data.series}
              type="bar"
              width={500}
            />
          </div>
        </div>
        <MoveTable pokeItem={pokeItem} stringFormatter={stringFormatter} />
      </div>
    </>
  );
}
export default PokeDetails;
