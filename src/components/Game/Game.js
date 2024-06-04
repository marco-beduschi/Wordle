import React from "react";
import GuessInput from "../GuessInput";
import GuessHistory from "../GuessHistory";
import GameOverBanner from "../GameOverBanner";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameState, setGameState] = React.useState("running"); // 'running' | 'won' | 'lost'
  const [guesses, setGuesses] = React.useState([]);

  function handleGuess(guess) {
    const newGuesses = [...guesses, guess];

    setGuesses(newGuesses);

    if (guess === answer) {
      setGameState("won");
    }

    if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState("lost");
    }
  }

  return (
    <>
      <GuessHistory guesses={guesses} answer={answer} />
      <GuessInput onGuess={handleGuess} disabled={gameState !== "running"} />
      {gameState !== "running" && (
        <GameOverBanner
          hasWon={gameState === "won"}
          numOfGuesses={guesses.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
