import Logo from "./Logo";
import Counter from "./counter";
import { useItemsStore } from "../Stores/itemsStore";

export default function Header() {
  const items = useItemsStore((state) => state.items);
  return (
    <header>
      <Logo />
      <Counter
        totalNoOfItems={items.length}
        totalPackedItems={items.filter((item) => item.packed).length}
      />
    </header>
  );
}
