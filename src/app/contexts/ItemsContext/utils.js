const addItem = (items, itemToAdd) => {
  if (itemToAdd.parent) {
    const parentIdx = items.findIndex(item => item.code === itemToAdd.parent);
    const parent = items[parentIdx];
    const modifiedNewItem = { ...itemToAdd, code: `${parent.code}-${itemToAdd.code}` };
    const newParent = { ...parent, subItems: [...parent.subItems, modifiedNewItem] };
    const newItemsList = [...items];
    newItemsList.splice(parentIdx, 1, newParent);
    return newItemsList;
  }
  return [...items, itemToAdd];
};

/* eslint-disable no-plusplus */
const removeItem = (items, codeToRemove) => {
  const parentIdx = items.findIndex(item => item.code === codeToRemove);
  const newItemsList = [...items];
  if (parentIdx < 0) {
    for (let i = 0; i < items.length; i++) {
      for (let j = 0; j < items[i].subItems.length; j++) {
        if (items[i].subItems[j].code === codeToRemove) {
          const newSubItemsList = [...items[i].subItems];
          newSubItemsList.splice(j, 1);
          newItemsList.splice(i, 1, { ...items[i], subItems: newSubItemsList });
          return newItemsList;
        }
      }
    }
  }
  newItemsList.splice(parentIdx, 1);
  return newItemsList;
};

export { addItem, removeItem };
