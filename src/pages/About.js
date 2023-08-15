import React from "react";
import NavBar from "../components/NavBar";
import githublogo from "../img/githublogo.jpeg";

function About() {
  return (
    <>
      <NavBar />
      <div className=" sm:ml-[260px] items-center  bg-white border border-gray-200 rounded-lg">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-32 h-32 mb-3 mt-5 rounded-full lg-shadow"
            src={githublogo}
            alt="git-hub-logo"
          />

          <span className="text-md text-gray-500 dark:text-gray-400">
            PokeDex built by squiggled using PokeAPI and React.
          </span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <button
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              textButtonLabel="github"
              onClick={() =>
                window.open("http://github.com/squiggled", "_blank")
              }
            >
              Github
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
