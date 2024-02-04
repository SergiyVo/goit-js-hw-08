const categoriesItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItems.length}`);
categoriesItems.forEach(category => {
    console.log(`Category: ${category.querySelector('h2').textContent}`);
    console.log(`Elements: ${category.querySelectorAll('li').length}`);
});
