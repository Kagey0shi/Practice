import { useState } from "react";
import { MAX_CHAR } from "../../lib/Constants";

type FeedbackFormProps = {
  onAddFeedback: (text: string) => void;
};

export default function FeedbackForm({ onAddFeedback }: FeedbackFormProps) {
  const [text, setText] = useState("");
  const charCount = MAX_CHAR - text.length;
  const [validFeedback, setValidFeedback] = useState(false);
  const [invalidFeedback, setInvalidFeedback] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length > MAX_CHAR) {
      return;
    }
    setText(newText);
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text.includes("#") && text.length >= 5) {
      setValidFeedback(true);
      setTimeout(() => setValidFeedback(false), 2000);
    } else {
      setInvalidFeedback(true);
      setTimeout(() => setInvalidFeedback(false), 2000);
      return;
    }
    onAddFeedback(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`form ${validFeedback ? "form--valid" : ""} ${invalidFeedback ? "form--invalid" : ""}`}
    >
      <textarea
        value={text}
        onChange={handleChange}
        id="feedback-textarea"
        placeholder="just here"
        spellCheck={false}
      />

      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company name
      </label>

      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
