import React from "react";
import { checkLetters } from "../../game-helpers";
import { uuid } from "../../utils";

function Key({ letter, className }) {
  return (
    <button
      className={className ? `keyboard-key ${className}` : "keyboard-key"}
      disabled
    >
      {letter}
    </button>
  );
}

function Keyboard({ guesses, answer }) {
  const keyboardKeys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  const checkedLetters = checkLetters(guesses, answer);

  return (
    <div className="keyboard">
      {keyboardKeys.map((row) => {
        return (
          <div key={uuid()} className="keyboard-row">
            {row.map((key) => (
              <Key
                key={key}
                letter={key}
                className={
                  checkedLetters.find(({ letter }) => letter === key)?.status
                }
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Keyboard;
