import React from "react";

function Guess({ value }) {
  return (
    <p className="guess">
      {value.split("").map((letter) => {
        return (
          <span key={`${letter}-${Math.random()}`} className="cell">
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
