import Header from "./Components/Layout/Header";
import SettingsandStats from "./Components/Layout/SettingsandStats";
import TypingArea from "./Components/Layout/Typingarea";
import Restart from "./Components/Restart";
import { useAppContext } from "./Contexts/AppContextProvider";
import { RotateCw } from "lucide-react";
import completed from "./assets/images/completed.png";
import patternStar2 from "./assets/images/pattern-star-2.svg";
import patternStar1 from "./assets/images/pattern-star-1.svg";
import personalBest from "./assets/images/icon-new-pb.svg";
import confetti from "./assets/images/Success celebration.gif";

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
    mistakes,
    typedText,
  } = useAppContext();

  return (
    <div className="app">
      {/* New highscore modal */}
      {gameState === "finished" && isNewHighScore && !isFirstTime && (
        <div className="modal-overlay">
          <img src={confetti} alt="star" className="confetti" />
          <div className="modal">
            <img src={personalBest} alt="Personal Best" />
            <h2>High Score Smahed!</h2>
            <p>You're getting faster. That was incredible typing.</p>
            <div className="baseline-stats">
              <p className="baseline-stats-cubes">
                WPM:
                <span style={{ color: "white" }}>{wpm}</span>
              </p>
              <p className="baseline-stats-cubes">
                Accuracy:
                <span style={{ color: "#f15555ff" }}>{accuracy}%</span>
              </p>
              <p className="baseline-stats-cubes">
                Characters:
                <span>
                  <span style={{ color: "#24d02aff" }}>{typedText.length}</span>{" "}
                  / <span style={{ color: "#f15555ff" }}>{mistakes}</span>
                </span>
              </p>
            </div>
            <button onClick={handleRestart} className="finished-overlay-button">
              <span>Start a new Test</span>
              <RotateCw size={12} />
            </button>
          </div>
        </div>
      )}

      {/* End of normal game modal */}
      {gameState === "finished" && !isNewHighScore && !isFirstTime && (
        <div className="modal-overlay">
          <img src={patternStar2} alt="star" className="star1" />
          <img src={patternStar1} alt="star" className="star2" />
          <div className="modal">
            <img src={completed} alt="Completed" />
            <h2>Test Complete!</h2>
            <p>Solid run. Keep Pushing to beat your high score.</p>
            <div className="baseline-stats">
              <p className="baseline-stats-cubes">
                WPM:
                <span style={{ color: "white" }}>{wpm}</span>
              </p>
              <p className="baseline-stats-cubes">
                Accuracy:
                <span style={{ color: "#f15555ff" }}>{accuracy}%</span>
              </p>
              <p className="baseline-stats-cubes">
                Characters:
                <span>
                  <span style={{ color: "#24d02aff" }}>{typedText.length}</span>{" "}
                  / <span style={{ color: "#f15555ff" }}>{mistakes}</span>
                </span>
              </p>
            </div>
            <button onClick={handleRestart} className="finished-overlay-button">
              Go again
              <RotateCw size={12} />
            </button>
          </div>
        </div>
      )}

      {/* First time user modal */}
      {gameState === "finished" && isFirstTime && (
        <div className="modal-overlay">
          <img src={patternStar2} alt="star" className="star1" />
          <img src={patternStar1} alt="star" className="star2" />
          <div className="modal">
            <img src={completed} alt="Completed" />
            <h2>Baseline Established!</h2>
            <p>
              You've set the bar. Now the real challenge begins, time to beat
              it.
            </p>
            <div className="baseline-stats">
              <p className="baseline-stats-cubes">
                WPM:
                <span style={{ color: "white" }}>{wpm}</span>
              </p>
              <p className="baseline-stats-cubes">
                Accuracy:
                <span style={{ color: "#f15555ff" }}>{accuracy}%</span>
              </p>
              <p className="baseline-stats-cubes">
                Characters:
                <span>
                  <span style={{ color: "#24d02aff" }}>{typedText.length}</span>{" "}
                  / <span style={{ color: "#f15555ff" }}>{mistakes}</span>
                </span>
              </p>
            </div>
            <button onClick={handleRestart} className="finished-overlay-button">
              <span>Beat this score</span>
              <RotateCw size={12} />
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
    </div>
  );
}

export default App;
