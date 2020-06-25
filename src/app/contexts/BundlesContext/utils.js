import localStorageService from '../../../services/localStorageService';

const sum = items => items.reduce((acum, item) => acum + Number(item.price), 0);

const getBundleTotal = items =>
  items.reduce((acum, item) => acum + Number(item.price) + sum(item.subItems), 0);

const addItem = (bundle, itemToAdd) => {
  const items = [...bundle.items, itemToAdd];
  return { items, price: getBundleTotal(items) };
};

const removeItem = (bundle, codeToRemove) => {
  const itemIdx = bundle.items.findIndex(item => item.code === codeToRemove);
  const items = [...bundle.items];
  bundle.items.splice(itemIdx, 1);
  return { items, price: bundle.price - bundle.items[itemIdx].price };
};

const persistBundle = bundle => {
  let bundles = localStorageService.getValue('bundles');
  if (bundles) bundles = [...bundles, bundle];
  else bundles = [bundle];
  localStorageService.setValue('bundles', bundles);
};

export { addItem, removeItem, persistBundle };
