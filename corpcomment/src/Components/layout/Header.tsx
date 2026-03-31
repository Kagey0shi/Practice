import Pattern from "../Pattern";
import Logo from "../Logo";
import FeedbackForm from "../feedback/FeedbackForm";
import PageHeading from "../PageHeading";
import { useFeedbackItemsStore } from "../../Stores/feedbackItemsStore";

export default function Header() {
  const handleAddFeedback = useFeedbackItemsStore(
    (state) => state.addItemToList,
  );

  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddFeedback={handleAddFeedback} />
    </header>
  );
}
