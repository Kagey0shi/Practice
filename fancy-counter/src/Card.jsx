import { useState } from "react";
import { useEffect } from "react";
import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import Button from "./Button";
import ButtonContainer from "./ButtonContainer";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (count >= 5) return;
      if (event.code === "ArrowUp") {
        const newCount = count + 1;
        if (newCount > 5) {
          setCount(5);
          return;
        }
        setCount(newCount);
      }
      if (event.code === "ArrowDown") {
        const newCount = count - 1;
        if (newCount < 0) {
          setCount(0);
          return;
        }
        setCount(newCount);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [count]);
  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <Button type="minus" setCount={setCount} locked={locked} />
        <Button type="plus" setCount={setCount} locked={locked} />
      </ButtonContainer>
    </div>
  );
}
