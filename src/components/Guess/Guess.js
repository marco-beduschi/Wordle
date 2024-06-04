import React from "react";
import { range, uuid } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  // const verifiedGuess = checkGuess(value);
  // console.log(verifiedGuess);

  return (
    <p className="guess">
      {value &&
        checkGuess(value, answer).map(({ letter, status }) => {
          return (
            <span key={uuid(letter)} className={`cell ${status}`}>
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
