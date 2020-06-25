import { addItem, removeItem, persistBundle } from './utils';

const INITIAL_STATE = { bundle: { items: [], price: 0 }, dispatch: () => {} };

const reducer = (state, action) => {
  switch (action.type) {
    case 'addToBundle': {
      return { ...state, bundle: addItem(state.bundle, action.payload) };
    }
    case 'removeFromBundle': {
      return { ...state, bundle: removeItem(state.bundle, action.payload) };
    }
    case 'saveBundle': {
      persistBundle(state.bundle);
      return { ...state, bundle: INITIAL_STATE.bundle };
    }
    default: {
      return state;
    }
  }
};

export { reducer, INITIAL_STATE };
