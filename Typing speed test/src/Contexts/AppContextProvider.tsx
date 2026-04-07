import {
  createContext,
  useEffect,
  useState,
  useCallback,
  useContext,
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

  const [bestWpm, setBestWpm] = useState<number | null>(() => {
    const savedWpm = localStorage.getItem("bestWpm");
    return savedWpm ? Number(savedWpm) : null;
  });

  // Logic for setting the BestWpm
  const updateBestWPM = (newWPM: number) => {
    setBestWpm((prevBest) => {
      if (prevBest === null || newWPM > prevBest) {
        localStorage.setItem("bestWPM", String(newWPM));
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

    let correctCount = 0;
    const lengthToCheck = Math.min(typedText.length, passage.length);

    for (let i = 0; i < lengthToCheck; i++) {
      if (typedText[i] === passage[i]) correctCount++;
    }

    const totalTyped = typedText.length;
    const calculatedAccuracy = (correctCount / totalTyped) * 100;

    setAccuracy(Math.round(calculatedAccuracy * 100) / 100); //round to 2 decimal places
  }, [typedText, passage]);

  // FUNCTION: Start game
  const handleStart = () => {
    setTime(mode === "timed" ? 60 : 0); // reset timer
    setGameState("running");
  };

  const handleEnd = () => {
    setGameState("finished");
    if (mode === "passage") {
      setTime((prev) => prev); // stops the count-up
    }
    console.log("Finished");
  };

  const handleRestart = () => {
    setTime(mode === "timed" ? 60 : 0);
    setGameState("idle");
    setPassage(getRandomPassage(difficulty));
    setTypedText("");
  };

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
