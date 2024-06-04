import React from "react";
import { range, uuid } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ status, children }) {
  const className = status ? `cell ${status}` : "cell";

  return <span className={className}>{children}</span>;
}

function Guess({ value, answer }) {
  return (
    <p className="guess">
      {value &&
        checkGuess(value, answer).map(({ letter, status }) => {
          return (
            <Cell key={uuid(letter)} status={status}>
              {letter}
            </Cell>
          );
        })}
      {!value &&
        range(5).map((num) => {
          return <Cell key={num}></Cell>;
        })}
    </p>
  );
}

export default Guess;
