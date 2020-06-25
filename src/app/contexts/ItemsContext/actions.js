const actions = {
  addItem: (items, newItem) => {
    if (newItem.parent) {
      const toReplaceIdx = items.findIndex(item => item.code === newItem.parent);
      const oldItem = items[toReplaceIdx];
      const modifiedNewItem = { ...newItem, code: `${oldItem.code}-${newItem.code}` };
      const item = { ...oldItem, subItems: [...oldItem.subItems, modifiedNewItem] };
      const newItemsList = [...items];
      newItemsList.splice(toReplaceIdx, 1, item);
      return newItemsList;
    }
    return [...items, newItem];
  },
};

export default actions;
