import { StorageItem } from "../types";

const KEY = "dice-roller-app";

function add(items: StorageItem[]) {
  try {
    const x = JSON.stringify({ dice: items });
    window.localStorage.setItem(KEY, x);
  } catch (error) {
    console.error(error);
  }
}

// DELETES ALL
function remove() {
  window.localStorage.removeItem(KEY);
}

function get(): string | null {
  return window.localStorage.getItem(KEY);
}

export function addItem(name: string, value: string) {
  if (name && value) {
    const key = name.toLowerCase().replace(" ", "-");
    const item: StorageItem = {
      friendlyName: name,
      key,
      value,
    };

    const allItems = getItems();
    if (allItems) {
      const index = allItems.findIndex((x) => x.key === key);
      if (index > -1) {
        allItems[index] = item;
      } else {
        allItems.push(item);
      }
      add(allItems);
    } else {
      add([item]);
    }
  }
}

export function deleteItem(item: StorageItem) {
  const allItems = getItems();
  if (allItems) {
    const index = allItems.findIndex((x) => x.key === item.key);
    if (index > -1) {
      allItems.splice(index, 1);
      add(allItems);
    }
  }
}

export function getItems(): StorageItem[] | null {
  const store = get();
  if (store) {
    const allItems = JSON.parse(store);
    return allItems.dice;
  }
  return null;
}
