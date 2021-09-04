const ingredients = [
'Potatoes',
'Mushrooms',
'Garlic',
'Tomatos',
'Herbs',
'Condiments',
];

const ingredientsListRef = document.querySelector('#ingredients')
console.log(ingredientsListRef);


let ingredientsRef = ingredients.map(ingredients => {
    const li = document.createElement('li');
    li.classList.add('ingredients-item');
    li.textContent = ingredients;
    return li
})

ingredientsListRef.append(...ingredientsRef)
