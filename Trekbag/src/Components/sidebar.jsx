import AddItemForm from "./additemform";
import Buttons from "./buttons";
import { useItemsStore } from "../Stores/itemsStore";
export default function Sidebar() {
  const addItem = useItemsStore((state) => state.addItem);
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={addItem} />

      <Buttons />
    </div>
  );
}
