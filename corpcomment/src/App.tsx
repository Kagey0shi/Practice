import Container from "./Components/layout/Container";
import Footer from "./Components/layout/Footer";
import Hashtags from "./Components/hashtags/Hashtags";
import { useFeedbackItemsStore } from "./Stores/feedbackItemsStore";
import { useEffect } from "react";

function App() {
  const fetchFeedbackitems = useFeedbackItemsStore(
    (state) => state.fetchFeedbackItems,
  );

  useEffect(() => {
    fetchFeedbackitems();
  }, [fetchFeedbackitems]);

  return (
    <div className="app">
      <Container />
      <Hashtags />

      <Footer />
    </div>
  );
}

export default App;
