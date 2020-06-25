import { createContext, useContext } from 'react';

const ItemContext = createContext(null);

const useDispatch = () => {
  const { dispatch } = useContext(ItemContext);
  return dispatch;
};

const useSelector = selector => {
  const { state } = useContext(ItemContext);
  return selector(state);
};

export { ItemContext, useDispatch, useSelector };
