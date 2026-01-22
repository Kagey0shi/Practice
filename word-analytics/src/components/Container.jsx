import TextArea from "./TextArea";
import Stats from "./Stats";
import { useState } from "react";
import { IG_LIMIT, FB_LIMIT } from "../lib/Constants";

export default function Container() {
  const [text, setText] = useState("");

  const stats = {
    numOfWords: text.split(/\s/).filter((word) => word !== "").length,
    numberOfCharacters: text.length,
    igCharactersLeft: IG_LIMIT - text.length,
    fbCharactersLeft: FB_LIMIT - text.length,
  };

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
