import type { Difficulty as DifficultyType } from "../Types/types";
import DifficultyDropdown from "./DifficultyDropdown";

export default function DifficultySettings({
  setDifficulty,
  difficulty,
  isDisabled,
}: {
  setDifficulty: (difficulty: DifficultyType) => void;
  difficulty: DifficultyType;
  isDisabled: boolean;
}) {
  return (
    <div className="difficulty-mode">
      <p className="difficulty-text">Difficulty:</p>
      <div className="difficulty-mode-container">
        <button
          className={`settings-btn ${difficulty === "easy" ? "active" : ""}`}
          onClick={() => !isDisabled && setDifficulty("easy")}
        >
          Easy
        </button>
        <button
          className={`settings-btn ${difficulty === "medium" ? "active" : ""}`}
          onClick={() => !isDisabled && setDifficulty("medium")}
        >
          Medium
        </button>
        <button
          className={`settings-btn ${difficulty === "hard" ? "active" : ""}`}
          onClick={() => !isDisabled && setDifficulty("hard")}
        >
          Hard
        </button>
      </div>

      {/* Tablet: dropdown */}
      {/* <select
        className="difficulty-mode-dropdown"
        value={difficulty}
        disabled={isDisabled}
        onChange={(e) => setDifficulty(e.target.value as DifficultyType)}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select> */}
      <DifficultyDropdown
        setDifficulty={setDifficulty}
        difficulty={difficulty}
        isDisabled={isDisabled}
      />
    </div>
  );
}
