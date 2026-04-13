import { useState } from "react";
import type { Mode } from "../Types/types";
import { ChevronDown } from "lucide-react";

export default function Mode({
  mode,
  setMode,
  isDisabled,
}: {
  mode: Mode;
  setMode: (mode: Mode) => void;
  isDisabled: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const options: { value: Mode; label: string }[] = [
    { value: "timed", label: "Timed (60s)" },
    { value: "passage", label: "Passage" },
  ];

  const handleSelect = (option: Mode) => {
    if (isDisabled) return;
    setMode(option);
    setIsOpen(false);
  };

  const currentLabel = options.find((o) => o.value === mode)?.label;

  return (
    <div className="difficulty-mode">
      {/* Desktop: buttons */}
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

      {/* Tablet: custom dropdown */}
      <div className="custom-dropdown">
        <button
          className={`dropdown-trigger ${isDisabled ? "disabled" : ""}`}
          onClick={() => !isDisabled && setIsOpen((prev) => !prev)}
        >
          {currentLabel}
          <ChevronDown
            size={14}
            className={isOpen ? "chevron open" : "chevron"}
          />
        </button>

        {isOpen && (
          <>
            <div
              className="dropdown-backdrop"
              onClick={() => setIsOpen(false)}
            />
            <div className="dropdown-panel">
              {options.map((option) => (
                <div
                  key={option.value}
                  className={`dropdown-option ${mode === option.value ? "selected" : ""}`}
                  onClick={() => handleSelect(option.value)}
                >
                  <span
                    className={`radio ${mode === option.value ? "checked" : ""}`}
                  />
                  {option.label}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
