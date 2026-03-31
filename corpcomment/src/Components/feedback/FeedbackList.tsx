import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { useFeedbackItemsStore } from "../../Stores/feedbackItemsStore";

export default function FeedbackList() {
  // const { filteredFeedbackItems, isLoading, errorMessage } =
  //   useFeedbackItemsContext();
  const isLoading = useFeedbackItemsStore((state) => state.isLoading);
  const errorMessage = useFeedbackItemsStore((state) => state.errorMessage);
  useFeedbackItemsStore((state) => state.feedbackItems); // subscribe for reactivity
  useFeedbackItemsStore((state) => state.selectedCompany); // subscribe for reactivity
  const getFilteredFeedbackItems = useFeedbackItemsStore(
    (state) => state.getFilteredFeedbackItems,
  );
  const filteredFeedbackItems = getFilteredFeedbackItems();
  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage && <ErrorMessage message={errorMessage} />}

      {filteredFeedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
