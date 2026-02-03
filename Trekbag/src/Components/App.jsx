import BgHeading from "./bgheading";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";
import ItemList from "./itemlist";
import { useState } from "react";
import { initialItems } from "./lib/constants";

function App() {
  const [items, setItems] = useState(initialItems);

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

  return (
    <>
      <BgHeading />

      <main>
        <Header />
        <Sidebar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetToInitial={handleResetToInitial}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsInComplete={handleMarkAllAsInComplete}
        />
        <ItemList
          items={items}
          handleDeleteItem={handleDeleteItem}
          handleItemToggle={handleItemToggle}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
