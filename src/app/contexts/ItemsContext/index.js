import { createContext, useContext } from 'react';

const ItemsContext = createContext(null);

const useDispatch = () => {
  const { dispatch } = useContext(ItemsContext);
  return dispatch;
};

const useSelector = selector => {
  const { state } = useContext(ItemsContext);
  return selector(state);
};

export { ItemsContext, useDispatch, useSelector };
