// const categories = document.querySelector('#categories');
// // const categoriesItems = categories.querySelectorAll(".li.Item");

// console.dir(`Number of categories: ${categories.children.length}`);
// // console.log(categoriesItems);
// categories.forEach(item => {
//     console.log(`-----------------------------`);
//   console.log(`Category: ${item.firstElementChild.textContent}`);
//   console.log(`Elements: ${item.lastElementChild.children.length}`);
    
// });

const categories = document.querySelectorAll('li.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  console.log(`-----------------------------`);
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
});
