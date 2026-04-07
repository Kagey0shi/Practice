import Trophy from "../assets/images/Trophy.svg";

export default function Best({ bestWpm }: { bestWpm: number | null }) {
  return (
    <div className="best">
      <img src={Trophy} alt="trophy" />
      <p>
        Personal Best: <b>{bestWpm ?? 0} WPM</b>
      </p>
    </div>
  );
}
