
const items = Array.from(document.querySelectorAll('li'))

items.map((element) => element.style.color = "red")
console.log(items);