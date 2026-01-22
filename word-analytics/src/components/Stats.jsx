export default function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat number={stats.numOfWords} label="Words" />
      <Stat number={stats.numberOfCharacters} label="Characters" />
      <Stat number={stats.igCharactersLeft} label="Instagram" />
      <Stat number={stats.fbCharactersLeft} label="Facebook" />
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="stat-heading">{label}</h2>
    </section>
  );
}
