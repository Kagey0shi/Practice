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
    isDisabled,
    isFirstTime,
    isNewHighScore,
  } = useAppContext();

  return (
    <>
      {gameState === "finished" && isNewHighScore && !isFirstTime && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>High Score Smahed!</h2>
            <p>
              <b>New High Score: {wpm} WPM</b>
            </p>
            <p>You're doing good! Keep going!</p>
            <button onClick={handleRestart} className="start-overlay-button">
              Start a new Test
            </button>
          </div>
        </div>
      )}

      {gameState === "finished" && !isNewHighScore && !isFirstTime && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Test Over!</h2>
            <p>
              <b>Your WPM: {wpm}</b>
            </p>
            <p>You can always get better Keep going!</p>
            <button onClick={handleRestart} className="start-overlay-button">
              Start a new Test
            </button>
          </div>
        </div>
      )}

      {gameState === "finished" && isFirstTime && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Baseline Established!</h2>
            <p>
              <b>Your WPM: {wpm}</b>
            </p>
            <p>This is your starting WPM. Try to beat it 🚀</p>
            <button onClick={handleRestart} className="start-overlay-button">
              Start a new Test
            </button>
          </div>
        </div>
      )}
      <Header bestWpm={bestWpm} />
      <SettingsandStats
        time={time}
        setDifficulty={setDifficulty}
        difficulty={difficulty}
        mode={mode}
        setMode={setMode}
        accuracy={accuracy}
        wpm={wpm}
        isDisabled={isDisabled}
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
