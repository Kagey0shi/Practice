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
      <div className="stats-cubes">
        <p>WPM:</p>
        <span className="stat-numbers">{wpm}</span>
      </div>
      <div
        style={{
          borderLeft: "1px solid gray",
          borderRight: "1px solid gray",
          padding: "0px 8px",
        }}
        className="stats-cubes"
      >
        <p>Accuracy:</p>
        <span className="stat-numbers">{accuracy}%</span>
      </div>
      <div className="stats-cubes">
        <p>Time:</p>
        <span className="stat-numbers">{time}</span>
      </div>
    </div>
  );
}
