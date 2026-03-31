import { TriangleUpIcon } from "@radix-ui/react-icons";
import type { TFeedbackItem } from "../../lib/types";
import { useState } from "react";

export default function FeedbackItem({
  feedbackItem,
}: {
  feedbackItem: TFeedbackItem;
}) {
  const [open, setOpen] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(feedbackItem.upvoteCount);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVoting = (e: React.MouseEvent) => {
    e.stopPropagation();
    setUpvoteCount((prev) => prev + 1);
    setHasVoted(true);
  };

  return (
    <li
      onClick={() => setOpen((prev) => !prev)}
      className={`feedback ${open ? "feedback--expand" : ""}`}
    >
      <button onClick={handleVoting} disabled={hasVoted}>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>

      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>

      <div>
        <p>{feedbackItem.company}</p>
        <p>{feedbackItem.text}</p>
      </div>

      <p>{feedbackItem.daysAgo === 0 ? "New" : `${feedbackItem.daysAgo} d`}</p>
    </li>
  );
}
