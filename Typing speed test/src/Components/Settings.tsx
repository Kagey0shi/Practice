import type { Difficulty, Mode } from "../Types/types";
import DifficultyComponent from "./Difficulty";
import ModeComponent from "./Mode";

export default function Settings({
  setDifficulty,
  difficulty,
  mode,
  setMode,
}: {
  setDifficulty: (difficulty: Difficulty) => void;
  difficulty: Difficulty;
  mode: Mode;
  setMode: (mode: Mode) => void;
}) {
  return (
    <div className="settings">
      <DifficultyComponent
        setDifficulty={setDifficulty}
        difficulty={difficulty}
      />
      <ModeComponent mode={mode} setMode={setMode} />
    </div>
  );
}
