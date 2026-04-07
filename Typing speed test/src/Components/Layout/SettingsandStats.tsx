import type { Difficulty, Mode } from "../../Types/types";
import Stats from "../Stats";
import Settings from "../Settings";

export default function SettingsandStats({
  setDifficulty,
  difficulty,
  mode,
  setMode,
  wpm,
  time,
  accuracy,
}: {
  time: number;
  setDifficulty: (difficulty: Difficulty) => void;
  difficulty: Difficulty;
  mode: Mode;
  setMode: (mode: Mode) => void;
  accuracy: number;
  wpm: number;
}) {
  return (
    <div className="settings-and-stats">
      <Stats time={time} accuracy={accuracy} wpm={wpm} />
      <Settings
        setDifficulty={setDifficulty}
        difficulty={difficulty}
        mode={mode}
        setMode={setMode}
      />
    </div>
  );
}
