import React from "react";
import NavBar from "../components/NavBar";
import snorlax from "../img/snorlax.png";

function NotFound() {
  return (
    <>
      <NavBar />
      <div className="md:ml-[260px]">
          <img
            className="md:ml-[390px] mt-8 flex flex-col items-center max-w-xs"
            src={snorlax}
            alt="404-error"
          />
        <h1 className=" mr-10 mt-8 font-bold text-5xl mb-5 text-center">
          There's nothing here...
        </h1>
      </div>
    </>
  );
}

export default NotFound;
