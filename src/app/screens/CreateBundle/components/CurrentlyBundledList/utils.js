const sum = items => items.reduce((acum, item) => acum + Number(item.price), 0);

const getBundleTotal = items =>
  items.reduce((acum, item) => acum + Number(item.price) + sum(item.subItems), 0);

export default getBundleTotal;
