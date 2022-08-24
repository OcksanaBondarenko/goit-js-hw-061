const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientListAl = document.querySelector('ul');
const elements = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const ingredient = ingredients[i];

  const ingredientItemAl = document.createElement('li');
  ingredientItemAl.textContent = ingredient;
  ingredientItemAl.classList.add('item'); 

  elements.push(ingredientItemAl);
}

ingredientListAl.append(...elements);