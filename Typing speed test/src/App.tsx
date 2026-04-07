import Header from "./Components/Layout/Header";
import SettingsandStats from "./Components/Layout/SettingsandStats";
import TypingArea from "./Components/Layout/Typingarea";
import Restart from "./Components/Restart";
import { useAppContext } from "./Contexts/AppContextProvider";

function App() {
  const {
    gameState,
    handleStart,
    handleRestart,
    time,
    setDifficulty,
    difficulty,
    bestWpm,
    mode,
    setMode,
    accuracy,
    wpm,
  } = useAppContext();

  return (
    <>
      <Header bestWpm={bestWpm} />
      <SettingsandStats
        time={time}
        setDifficulty={setDifficulty}
        difficulty={difficulty}
        mode={mode}
        setMode={setMode}
        accuracy={accuracy}
        wpm={wpm}
      />
      <div className="typing-area-wrapper">
        {gameState === "idle" && (
          <div className="start-test">
            <button onClick={handleStart} className="start-overlay-button">
              Start Typing Test
            </button>
            <p>Or Click the space bar to start the test</p>
          </div>
        )}
        <TypingArea />
      </div>
      {gameState !== "idle" && <Restart handleRestart={handleRestart} />}
    </>
  );
}

export default App;
