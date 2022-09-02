import React from "react";

function externalLinking(props) {
  return (
    <>
      <div className="max-w-4xl mx-auto">
        <div className="mt-5 mr-7 ml-7">
          <a href={props.link}>
            <p className="transition duration-300 group transform hover:-translate-y-2 md:text-lg sm:ml-7 sm:mt-4 max-w-3xl mt-6 text-left text-pink font-extralight">
              {props.text}
            </p>
          </a>{" "}
        </div>
      </div>
    </>
  );
}

export default externalLinking;
