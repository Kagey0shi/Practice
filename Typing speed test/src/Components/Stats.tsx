export default function Stats({
  time,
  accuracy,
  wpm,
}: {
  time: number;
  accuracy: number;
  wpm: number;
}) {
  return (
    <div className="stats">
      <p>
        WPM: <b>{wpm}</b>
      </p>
      <p>|</p>
      <p>
        Accuracy: <b>{accuracy}%</b>
      </p>
      <p>|</p>
      <p>
        Time: <b>{time}</b>
      </p>
    </div>
  );
}
