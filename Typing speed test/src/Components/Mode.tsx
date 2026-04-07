import type { Mode } from "../Types/types";

export default function Mode({
  mode,
  setMode,
}: {
  mode: Mode;
  setMode: (mode: Mode) => void;
}) {
  return (
    <div className="difficulty-mode">
      <p>Mode:</p>
      <button
        className={`settings-btn ${mode === "timed" ? "active" : ""}`}
        onClick={() => setMode("timed")}
      >
        Timed
      </button>
      <button
        className={`settings-btn ${mode === "passage" ? "active" : ""}`}
        onClick={() => setMode("passage")}
      >
        Passage
      </button>
    </div>
  );
}
