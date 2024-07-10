import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function BlankCell({ row, col }) {
  const animOffset = (row - 1) * 5 + col;

  return (
    <span
      className="cell"
      style={{ animationDelay: 25 * animOffset + "ms" }}
    ></span>
  );
}

function Cell({ status, children }) {
  const className = status ? `cell ${status}` : "cell";

  return <span className={className}>{children}</span>;
}

function Guess({ value, row, answer }) {
  return (
    <p className="guess">
      {value &&
        checkGuess(value, answer).map(({ letter, status }, index) => {
          return (
            <Cell key={index} status={status} row={row} col={index + 1}>
              {letter}
            </Cell>
          );
        })}
      {!value &&
        range(5).map((num) => {
          return <BlankCell key={num} row={row} col={num + 1}></BlankCell>;
        })}
    </p>
  );
}

export default Guess;
