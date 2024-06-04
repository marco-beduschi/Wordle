import React from "react";

function GuessHistory({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess) => {
        return (
          <p key={`${guess}-${Math.random()}`} className="guess">
            {guess}
          </p>
        );
      })}
    </div>
  );
}

export default GuessHistory;
