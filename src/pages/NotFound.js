import React from "react";
import NavBar from "../components/NavBar";
import snorlax from "../img/snorlax.png";

function NotFound() {
  return (
    <>
      <NavBar />
      <div className="sm:ml-[260px]">
          <img
            className="mt-8 flex flex-col items-center mx-auto max-w-xs"
            src={snorlax}
            alt="404-error"
          />
        <h1 className="mt-8 font-bold text-5xl mb-5 text-center">
          There's nothing here...
        </h1>
      </div>
    </>
  );
}

export default NotFound;
