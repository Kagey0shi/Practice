import type { Difficulty, Mode } from "../Types/types";
import DifficultyComponent from "./Difficulty";
import ModeComponent from "./Mode";

export default function Settings({
  setDifficulty,
  difficulty,
  mode,
  setMode,
  isDisabled,
}: {
  setDifficulty: (difficulty: Difficulty) => void;
  difficulty: Difficulty;
  mode: Mode;
  setMode: (mode: Mode) => void;
  isDisabled: boolean;
}) {
  return (
    <div className="settings">
      <DifficultyComponent
        setDifficulty={setDifficulty}
        difficulty={difficulty}
        isDisabled={isDisabled}
      />
      <ModeComponent mode={mode} setMode={setMode} isDisabled={isDisabled} />
    </div>
  );
}
