import { useContext } from "react";
import { ItemsContext } from "../Contexts/ItemsContextProvider";
function useItemsContext() {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error("useItemsContext must be used within ItemsContextProvider");
  }

  return context;
}

export default useItemsContext;
