import Game from "../Game";
import Header from "../Header";
import ThemeSelector from "../ThemeSelector";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />

        <div className="game-wrapper">
          <Game />
        </div>
      </div>
      <ThemeSelector />
    </>
  );
}

export default App;
