import type { Difficulty } from "../Types/types";

export default function Difficulty({
  setDifficulty,
  difficulty,
}: {
  setDifficulty: (difficulty: Difficulty) => void;
  difficulty: Difficulty;
}) {
  return (
    <div className="difficulty-mode">
      <p>Difficulty:</p>
      <button
        className={`settings-btn ${difficulty === "easy" ? "active" : ""}`}
        onClick={() => setDifficulty("easy")}
      >
        Easy
      </button>
      <button
        className={`settings-btn ${difficulty === "medium" ? "active" : ""}`}
        onClick={() => setDifficulty("medium")}
      >
        Medium
      </button>
      <button
        className={`settings-btn ${difficulty === "hard" ? "active" : ""}`}
        onClick={() => setDifficulty("hard")}
      >
        Hard
      </button>
    </div>
  );
}
