import type { Mode } from "../Types/types";

export default function Mode({
  mode,
  setMode,
  isDisabled,
}: {
  mode: Mode;
  setMode: (mode: Mode) => void;
  isDisabled: boolean;
}) {
  return (
    <div className="difficulty-mode">
      <p>Mode:</p>
      <button
        className={`settings-btn ${mode === "timed" ? "active" : ""}`}
        onClick={() => !isDisabled && setMode("timed")}
      >
        Timed
      </button>
      <button
        className={`settings-btn ${mode === "passage" ? "active" : ""}`}
        onClick={() => !isDisabled && setMode("passage")}
      >
        Passage
      </button>
    </div>
  );
}
