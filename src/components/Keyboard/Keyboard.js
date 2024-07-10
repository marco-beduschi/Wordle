import React from "react";
import { checkLetters } from "../../game-helpers";

function Key({ letter, className, isPressed }) {
  return (
    <button
      className={className ? `keyboard-key ${className}` : "keyboard-key"}
      style={{ animation: isPressed ? "shrinkToNormal 200ms" : undefined }}
      disabled
    >
      {letter}
    </button>
  );
}

function Keyboard({ guesses, answer }) {
  const [keyPressed, setKeyPressed] = React.useState("");
  const keyboardKeys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  const checkedLetters = checkLetters(guesses, answer);

  React.useEffect(() => {
    function handleKeyUp(e) {
      setKeyPressed(e.key.toUpperCase());
    }

    window.addEventListener("keydown", handleKeyUp);

    return () => window.removeEventListener("keydown", handleKeyUp);
  }, []);

  return (
    <div className="keyboard">
      {keyboardKeys.map((row) => {
        return (
          <div key={row} className="keyboard-row">
            {row.map((key) => (
              <Key
                key={key}
                letter={key}
                isPressed={keyPressed === key}
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
