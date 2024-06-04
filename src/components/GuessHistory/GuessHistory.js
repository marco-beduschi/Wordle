import React from "react";
import Guess from "../Guess";
import { range, uuid } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessHistory({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        return <Guess key={uuid(num)} value={guesses[num]} />;
      })}
    </div>
  );
}

export default GuessHistory;
