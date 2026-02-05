import Logo from "./Logo";
import Counter from "./counter";
import { useItemsStore } from "../Stores/itemsStore";

export default function Header() {
  const items = useItemsStore((state) => state.items);
  return (
    <header>
      <Logo />
      <Counter
        numberOfItems={items.length}
        totalNoOfItemsPacked={items.filter((item) => item.packed).length}
      />
    </header>
  );
}
