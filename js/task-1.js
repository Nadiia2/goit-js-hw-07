const items = document.querySelectorAll('.item');
console.log('Number of categories:', items.length);

items.forEach(item => {
  const headlines = item.querySelector('h2');
  const items2 = item.querySelectorAll('li');
  console.log('Category:', headlines.textContent);
  console.log('Elements:', items2.length);
});
