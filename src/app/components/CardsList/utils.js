const buildText = ({ description, price, type }) => [
  description,
  ...(price && [`$ ${price}`]),
  ...(type && [type]),
];

const buildSubContent = subItems => subItems.map(item => ({ title: item.code, text: buildText(item) }));

const buildContent = item => {
  const content = { text: buildText(item), subContent: buildSubContent(item.subItems) };
  return content;
};

export { buildText, buildSubContent, buildContent };
