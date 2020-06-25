import actions from './actions';

const INITIAL_STATE = { items: [], dispatch: () => {} };

const reducer = (state, action) => {
  switch (action.type) {
    case 'createItem': {
      const item = { ...action.payload, subItems: [] };
      return { ...state, items: actions.addItem(state.items, item) };
    }
    default: {
      return state;
    }
  }
};

export { reducer, INITIAL_STATE };
