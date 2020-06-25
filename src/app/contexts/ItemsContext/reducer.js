import { addItem, removeItem } from './utils';

const INITIAL_STATE = { items: [], dispatch: () => {} };

const reducer = (state, action) => {
  switch (action.type) {
    case 'createItem': {
      const item = { ...action.payload, subItems: [] };
      return { ...state, items: addItem(state.items, item) };
    }
    case 'removeItem': {
      return { ...state, items: removeItem(state.items, action.payload) };
    }
    default: {
      return state;
    }
  }
};

export { reducer, INITIAL_STATE };
