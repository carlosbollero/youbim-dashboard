import localStorageService from '../../../services/localStorageService';
import { removeItem } from './utils';

const INITIAL_STATE = { bundle: [], dispatch: () => {} };

const reducer = (state, action) => {
  switch (action.type) {
    case 'addToBundle': {
      return { ...state, bundle: [...state.bundle, action.payload] };
    }
    case 'removeFromBundle': {
      return { ...state, bundle: removeItem(state.bundle, action.payload) };
    }
    case 'saveBundle': {
      localStorageService.setValue('bundle', state.bundle);
      return { ...state, bundle: INITIAL_STATE.bundle };
    }
    default: {
      return state;
    }
  }
};

export { reducer, INITIAL_STATE };
