import EmptyView from "./EmptyView";
import Select from "react-select";
import { useState, useMemo } from "react";
import { useItemsStore } from "../Stores/itemsStore";

const SortingOptions = [
  { value: "default", label: "Sort by default" },
  { value: "packed", label: "Sort by packed" },
  { value: "unpacked", label: "Sort by unpacked" },
];

export default function ItemList() {
  const [sortBy, setSortBy] = useState("default");
  const items = useItemsStore((state) => state.items);
  const deleteItem = useItemsStore((state) => state.deleteItem);
  const itemToggle = useItemsStore((state) => state.itemToggle);

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }
        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }
        return 0;
      }),
    [items, sortBy],
  );

  return (
    <ul className="item-list">
      {items.length === 0 ? <EmptyView /> : null}

      {items.length > 0 ? (
        <section className="sorting">
          {" "}
          <Select
            options={SortingOptions}
            defaultValue={SortingOptions[0]}
            onChange={(option) => setSortBy(option.value)}
          />
        </section>
      ) : null}

      {sortedItems.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={deleteItem}
            onItemToggle={itemToggle}
          />
        );
      })}
    </ul>
  );
}

function Item({ item, onDeleteItem, onItemToggle }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onItemToggle(item.id)}
        />
        {item.name}
      </label>

      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
