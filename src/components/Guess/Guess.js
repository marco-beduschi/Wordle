import React from "react";
import { range, uuid } from "../../utils";

function Guess({ value }) {
  return (
    <p className="guess">
      {value &&
        value.split("").map((letter) => {
          return (
            <span key={uuid(letter)} className="cell">
              {letter}
            </span>
          );
        })}
      {!value &&
        range(5).map((num) => {
          return <span key={num} className="cell"></span>;
        })}
    </p>
  );
}

export default Guess;
