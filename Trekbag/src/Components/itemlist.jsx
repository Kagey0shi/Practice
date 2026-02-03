export default function ItemList({
  items,
  handleDeleteItem,
  handleItemToggle,
}) {
  return (
    <ul className="item-list">
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            handleDeleteItem={handleDeleteItem}
            handleItemToggle={handleItemToggle}
          />
        );
      })}
    </ul>
  );
}

function Item({ item, handleDeleteItem, handleItemToggle }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => handleItemToggle(item.id)}
        />
        {item.name}
      </label>

      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}
