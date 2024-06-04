import React from "react";
import Guess from "../Guess";

function GuessHistory({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess) => {
        return <Guess key={`${guess}-${Math.random}`} value={guess} />;
      })}
    </div>
  );
}

export default GuessHistory;
