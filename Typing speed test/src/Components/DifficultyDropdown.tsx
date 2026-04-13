import { useState } from "react";
import type { Difficulty } from "../Types/types";
import { ChevronDown } from "lucide-react";

export default function DifficultyDropdown({
  setDifficulty,
  difficulty,
  isDisabled,
}: {
  setDifficulty: (difficulty: Difficulty) => void;
  difficulty: Difficulty;
  isDisabled: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const options: Difficulty[] = ["easy", "medium", "hard"];

  const handleSelect = (option: Difficulty) => {
    if (isDisabled) return;
    setDifficulty(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown">
      <button
        className={`dropdown-trigger ${isDisabled ? "disabled" : ""}`}
        onClick={() => !isDisabled && setIsOpen((prev) => !prev)}
      >
        {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        <ChevronDown
          size={14}
          className={isOpen ? "chevron open" : "chevron"}
        />
      </button>

      {isOpen && (
        <>
          {/* closes dropdown when clicking outside */}
          <div className="dropdown-backdrop" onClick={() => setIsOpen(false)} />
          <div className="dropdown-panel">
            {options.map((option) => (
              <div
                key={option}
                className={`dropdown-option ${difficulty === option ? "selected" : ""}`}
                onClick={() => handleSelect(option)}
              >
                <span
                  className={`radio ${difficulty === option ? "checked" : ""}`}
                />
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
