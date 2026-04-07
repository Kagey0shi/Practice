import { RotateCw } from "lucide-react";

export default function Restart({
  handleRestart,
}: {
  handleRestart: () => void;
}) {
  return (
    <div className="restart">
      <button className="restart-btn" onClick={handleRestart}>
        Restart Test
        <RotateCw size={14} />
      </button>
    </div>
  );
}
