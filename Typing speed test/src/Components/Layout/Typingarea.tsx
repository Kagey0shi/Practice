import { useEffect } from "react";
import { useAppContext } from "../../Contexts/AppContextProvider";

export default function TypingArea() {
  const {
    passage,
    typedText,
    setTypedText,
    gameState,
    setTime,
    mode,
    handleEnd,
  } = useAppContext();

  // Handle key presses globally
  useEffect(() => {
    if (gameState !== "running") return;

    const handleKey = (e: KeyboardEvent) => {
      if (gameState === "finished") return;
      if (e.key === "Backspace") {
        setTypedText((prev) => prev.slice(0, -1));
      } else if (e.key.length === 1) {
        // Only add printable characters
        setTypedText((prev) => prev + e.key);
      }
    };

    window.addEventListener("keydown", handleKey);

    // Check if the user has completed the passage and end session
    if (typedText.length === passage.length) {
      handleEnd();
    }

    return () => window.removeEventListener("keydown", handleKey);
  }, [gameState, setTypedText, handleEnd, passage]);

  // Split passage into characters for highlighting
  const passageChars = passage.split("");

  return (
    <div className="typing-area">
      <p>
        {passageChars.map((char, idx) => {
          const typedChar = typedText[idx];
          let className = "";
          if (typedChar == null) className = "";
          else if (typedChar === char) className = "correct";
          else className = "incorrect";

          return (
            <span key={idx} className={className}>
              {char}
            </span>
          );
        })}
      </p>
    </div>
  );
}
