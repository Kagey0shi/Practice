import type { Mode } from "../Types/types";
import ModeDropdown from "./ModeDropdown";

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
      <p className="mode-text">Mode:</p>
      <div className="difficulty-mode-container">
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

      {/* Tablet: dropdown
      <select
        className="difficulty-mode-dropdown"
        value={mode}
        disabled={isDisabled}
        onChange={(e) => setMode(e.target.value as Mode)}
      >
        <option value="timed">Timed</option>
        <option value="passage">Passage</option>
      </select> */}

      <ModeDropdown mode={mode} setMode={setMode} isDisabled={isDisabled} />
    </div>
  );
}
