import { useState, useEffect } from "react";
import { initialItems } from "../lib/constants";
import { createContext } from "react";

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("items")) || initialItems;
  });

  // Add the new item to the list
  const handleAddItem = (itemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: itemText,
      packed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  //Delete an item from the list
  const handleDeleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  // Mark as packed or unpacked
  const handleItemToggle = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item,
    );
    setItems(updatedItems);
  };

  // Remove all items from the list
  const handleRemoveAllItems = () => {
    setItems([]);
  };

  // Reset the list to the initial items
  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  // Mark all items as packed
  const handleMarkAllAsComplete = () => {
    const updatedItems = items.map((item) => ({ ...item, packed: true }));
    setItems(updatedItems);
  };

  // Mark all items as unpacked
  const handleMarkAllAsInComplete = () => {
    const updatedItems = items.map((item) => ({ ...item, packed: false }));
    setItems(updatedItems);
  };

  //Save the items to localStorage whenever they change
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
