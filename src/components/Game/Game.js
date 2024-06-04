import React from "react";
import GuessInput from "../GuessInput";
import GuessHistory from "../GuessHistory";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  return (
    <>
      <GuessHistory guesses={guesses} answer={answer} />
      <GuessInput onGuess={(guess) => setGuesses([...guesses, guess])} />
    </>
  );
}

export default Game;
