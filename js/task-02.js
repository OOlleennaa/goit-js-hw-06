const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsBlock = document.querySelector('#ingredients');
console.log(ingredientsBlock);
const itemList = ingredients.map(ingredients => {
  const item = document.createElement('li');
  item.textContent = ingredients;
  return item;
});
console.log(itemList);
ingredientsBlock.append(...itemList);

