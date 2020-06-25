import { createContext, useContext } from 'react';

const BundlesContext = createContext(null);

const useDispatch = () => {
  const { dispatch } = useContext(BundlesContext);
  return dispatch;
};

const useSelector = selector => {
  const { state } = useContext(BundlesContext);
  return selector(state);
};

export { BundlesContext, useDispatch, useSelector };
