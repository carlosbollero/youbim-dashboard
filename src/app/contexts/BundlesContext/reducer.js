import { removeItem } from './utils';

const INITIAL_STATE = { bundle: [], dispatch: () => {} };

const reducer = (state, action) => {
  switch (action.type) {
    case 'addToBundle': {
      return { ...state, bundle: [...state.bundle, action.payload] };
    }
    case 'removeFromBundle': {
      return { ...state, items: removeItem(state.bundle, action.payload) };
    }
    default: {
      return state;
    }
  }
};

export { reducer, INITIAL_STATE };
