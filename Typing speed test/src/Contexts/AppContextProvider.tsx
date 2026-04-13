import {
  createContext,
  useEffect,
  useState,
  useCallback,
  useContext,
  useRef,
} from "react";
import data from "./data.json";

import type { Difficulty, GameState, Mode } from "../Types/types";

interface AppContextType {
  time: number;
  gameState: GameState;
  difficulty: Difficulty;
  mode: Mode;
  passage: string;
  setTime: (time: number) => void;
  setGameState: (gameState: GameState) => void;
  setDifficulty: (difficulty: Difficulty) => void;
  setMode: (mode: Mode) => void;
  setPassage: (passage: string) => void;
  handleStart: () => void;
  handleEnd: () => void;
  bestWpm: number | null;
  updateBestWPM: (newWPM: number) => void;
  handleRestart: () => void;
  typedText: string;
  setTypedText: (typedText: string) => void;
  accuracy: number;
  wpm: number;
  isDisabled: boolean;
  isFirstTime: boolean;
  setIsFirstTime: (isFirstTime: boolean) => void;
  isNewHighScore: boolean;
  mistakes: number;
}

export const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

export default function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [time, setTime] = useState(60);

  const [gameState, setGameState] = useState<GameState>("idle");

  const [difficulty, setDifficulty] = useState<Difficulty>("easy");

  const [passage, setPassage] = useState("");

  const [mode, setMode] = useState<Mode>("timed");

  const [typedText, setTypedText] = useState("");

  const [accuracy, setAccuracy] = useState(100);

  const [wpm, setWpm] = useState(0);

  const [isNewHighScore, setIsNewHighScore] = useState(false);

  const mistakesRef = useRef(0);

  const totalTypedRef = useRef(0);

  const [mistakes, setMistakes] = useState(0);

  //Checking if the user has played the test before
  const [isFirstTime, setIsFirstTime] = useState(() => {
    return localStorage.getItem("hasPlayed") ? false : true;
  });

  const [bestWpm, setBestWpm] = useState<number | null>(() => {
    const savedWpm = localStorage.getItem("bestWpm");
    return savedWpm ? Number(savedWpm) : null;
  });

  // Logic for setting the BestWpm
  const updateBestWPM = (newWPM: number) => {
    setBestWpm((prevBest) => {
      if (prevBest === null || newWPM > prevBest) {
        localStorage.setItem("bestWpm", String(newWPM));

        if (prevBest !== null) {
          setIsNewHighScore(true);
        }
        return newWPM;
      }
      return prevBest;
    });
  };

  //Get random passage based on difficulty
  const getRandomPassage = useCallback((level: "easy" | "medium" | "hard") => {
    const passages = data[level];
    const randomIndex = Math.floor(Math.random() * passages.length);
    return passages[randomIndex].text;
  }, []);

  // FUNCTION: Start game
  const handleStart = useCallback(() => {
    setTime(mode === "timed" ? 60 : 0); // reset timer
    setGameState("running");
  }, [mode]);

  //Ends game when the paasge is fully typed
  const handleEnd = () => {
    setGameState("finished");
    if (mode === "passage") {
      setTime((prev) => prev); // stops the count-up
    }
    console.log("Finished");
  };

  // Resets the test
  const handleRestart = () => {
    setTime(mode === "timed" ? 60 : 0);
    setGameState("idle");
    setPassage(getRandomPassage(difficulty));
    setTypedText("");
    setIsNewHighScore(false);
    setIsFirstTime(false);
  };

  //setting the first WPM record
  useEffect(() => {
    if (gameState === "finished" && wpm > 0) {
      updateBestWPM(wpm);
    }
  }, [gameState, wpm]);

  // Checking for the gameState and mode then change the timer accordingly
  useEffect(() => {
    if (gameState !== "running" || time < 0) return;

    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (mode === "timed") {
          if (prevTime <= 1) {
            setGameState("finished");
            return 0;
          }
          return prevTime - 1;
        } else {
          return prevTime + 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, mode, time]);

  //Set new passage when difficulty changes
  useEffect(() => {
    const newPassage = getRandomPassage(difficulty);
    setPassage(newPassage);
  }, [difficulty, getRandomPassage]);

  // WPM calculation
  useEffect(() => {
    if (!typedText.length || time === 0) {
      setWpm(0);
      return;
    }

    // Count words typed so far
    const wordsTyped = typedText.trim().split(/\s+/).length;

    let minutesElapsed;
    if (mode === "timed") {
      minutesElapsed = (60 - time) / 60; // time counts down in timed mode
    } else {
      minutesElapsed = time / 60; // time counts up in passage mode
    }

    if (minutesElapsed > 0) {
      const rawWpm = wordsTyped / minutesElapsed;
      setWpm(Math.round(rawWpm));
    } else {
      setWpm(0);
    }
  }, [typedText, time, mode]);

  // Accuracy calculation
  useEffect(() => {
    if (!typedText.length) {
      setAccuracy(100);
      return;
    }

    const currentLength = typedText.length;
    const prevLength = totalTypedRef.current;

    if (currentLength > prevLength) {
      // user typed a new character
      totalTypedRef.current = currentLength;
      const lastIndex = currentLength - 1;
      if (typedText[lastIndex] !== passage[lastIndex]) {
        mistakesRef.current += 1; // only increments, never goes down
      }
    }

    const calculatedAccuracy =
      ((totalTypedRef.current - mistakesRef.current) / totalTypedRef.current) *
      100;

    setAccuracy(Math.round(calculatedAccuracy * 100) / 100);
  }, [typedText, passage]);

  useEffect(() => {
    let wrongCount = 0;
    for (let i = 0; i < typedText.length; i++) {
      if (typedText[i] !== passage[i]) {
        wrongCount++;
      }
      setMistakes(wrongCount);
    }
  }, [typedText, passage]);

  // Set isFirstTime to true after the first test
  useEffect(() => {
    if (gameState === "finished" && isFirstTime) {
      localStorage.setItem("hasPlayed", "true");
    }
  }, [gameState, isFirstTime]);

  // Spacebar to start
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" && gameState === "idle") {
        e.preventDefault(); // prevent page scroll
        handleStart();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameState, handleStart]);

  //Disable buttons when game is running or finished
  const isDisabled = gameState !== "idle";

  return (
    <AppContext.Provider
      value={{
        gameState,
        setGameState,
        difficulty,
        setDifficulty,
        mode,
        setMode,
        time,
        setTime,
        typedText,
        setTypedText,
        passage,
        handleStart,
        handleEnd,
        setPassage,
        bestWpm,
        updateBestWPM,
        handleRestart,
        accuracy,
        wpm,
        isDisabled,
        isFirstTime,
        setIsFirstTime,
        isNewHighScore,
        mistakes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
