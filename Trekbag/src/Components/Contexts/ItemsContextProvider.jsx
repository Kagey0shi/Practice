import { useState, useEffect } from "react";
import { initialItems } from "../lib/constants";
import { createContext } from "react";

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("items")) || initialItems;
  });

  const handleAddItem = (itemText) => {
    // Add the new item to the list
    const newItem = {
      id: new Date().getTime(),
      name: itemText,
      packed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleDeleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleItemToggle = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item,
    );
    setItems(updatedItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  const handleMarkAllAsComplete = () => {
    const updatedItems = items.map((item) => ({ ...item, packed: true }));
    setItems(updatedItems);
  };

  const handleMarkAllAsInComplete = () => {
    const updatedItems = items.map((item) => ({ ...item, packed: false }));
    setItems(updatedItems);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleDeleteItem,
        handleItemToggle,
        handleRemoveAllItems,
        handleResetToInitial,
        handleMarkAllAsComplete,
        handleMarkAllAsInComplete,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
