const categoriesRef = document.querySelectorAll('.item')
console.log(`Number of categories: ${categoriesRef.length}`);

categoriesRef.forEach(categoriesRef => {
    const titleRef = categoriesRef.querySelector('h2')
    console.log(`Category: ${titleRef.textContent}`);

    const itemRef = categoriesRef.querySelectorAll('li')
    console.log(`Number of elements: ${itemRef.length}`);
})