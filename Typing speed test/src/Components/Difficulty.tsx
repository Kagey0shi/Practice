import type { Difficulty } from "../Types/types";

export default function Difficulty({
  setDifficulty,
  difficulty,
  isDisabled,
}: {
  setDifficulty: (difficulty: Difficulty) => void;
  difficulty: Difficulty;
  isDisabled: boolean;
}) {
  return (
    <div className="difficulty-mode">
      <p>Difficulty:</p>
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
  );
}
