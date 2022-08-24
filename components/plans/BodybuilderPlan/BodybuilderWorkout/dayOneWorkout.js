import React from "react";

function dayOneWorkout(props) {
  return (
    <div className="max-w-6xl mx-auto center-this">
      <div className=" flex flex-col mt-20 sm:flex-row w-10/12 sm:w-10/12 md:w-10/12 lg:w-9/12 p-3 sm:p-10 border-gray-200 border-2 rounded-2xl">
        <div className="flex flex-col sm:pr-5">
          <h2 className="pt-5 text-center sm:text-left font-bold text-2xl sm:text-3xl md:text-4xl">
            {props.name}
          </h2>
          <p className="max-w-xl text-sm text-center sm:text-left md:text-md text-gray-400 mt-5">
            {props.description}
          </p>

          <div className="mt-2 text-center sm:text-left">
            <p className="text-pink py-2">{props.sets}</p>
          </div>
        </div>
        <img className="sm:w-3/6 mt-6 sm:mt-0" src={props.image} />
      </div>
    </div>
  );
}

export default dayOneWorkout;
