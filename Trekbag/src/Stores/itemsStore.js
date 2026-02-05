import { create } from "zustand";
import { initialItems } from "../Components/lib/constants";
import { persist } from "zustand/middleware";

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialItems,
      removeAllItems: () => {
        set({ items: [] });
      },
      resetToInitialItems: () => {
        set(() => ({ items: initialItems }));
      },
      markAllAsComplete: () => {
        set((state) => {
          const newItems = state.items.map((item) => {
            return { ...item, packed: true };
          });
          return { items: newItems };
        });
      },
      markAllAsInComplete: () => {
        set((state) => {
          const newItems = state.items.map((item) => {
            return { ...item, packed: false };
          });
          return { items: newItems };
        });
      },
      itemToggle: (id) => {
        set((state) => {
          const newItems = state.items.map((item) => {
            return item.id === id ? { ...item, packed: !item.packed } : item;
          });
          return { items: newItems };
        });
      },
      deleteItem: (id) => {
        set((state) => {
          const newItems = state.items.filter((item) => item.id !== id);
          return { items: newItems };
        });
      },
      addItem: (itemText) => {
        set((state) => {
          const newItem = {
            id: new Date().getTime(),
            name: itemText,
            packed: false,
          };
          const newItems = [...state.items, newItem];
          return { items: newItems };
        });
      },
    }),
    { name: "items" },
  ),
);
