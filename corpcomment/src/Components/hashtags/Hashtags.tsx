import HashtagItem from "./HashtagItem";
import { useFeedbackItemsStore } from "../../Stores/feedbackItemsStore";

export default function Hashtags() {
  // const { companyList, handleSelectCompany } = useFeedbackItemsContext();
  useFeedbackItemsStore((state) => state.feedbackItems); // subscribe for reactivity
  const getCompanyList = useFeedbackItemsStore((state) => state.getCompanyList);
  const companyList = getCompanyList();
  const selectCompany = useFeedbackItemsStore((state) => state.selectCompany);
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem
          onSelectCompany={selectCompany}
          company={company}
          key={company}
        />
      ))}
    </ul>
  );
}
