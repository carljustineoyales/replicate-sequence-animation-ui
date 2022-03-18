
let items = document.querySelectorAll('.sequence__items')

let textArr = []

items.forEach((item, index) => {
  textArr.push(item.innerText)
})
console.dir(items)

setInterval(() => {
  let lastElement = textArr.pop()
  textArr = [lastElement, ...textArr]
  // console.dir(textArr)
  items.forEach((item, index) => {
    item.innerHTML = `<h2>${textArr[index]}</h2>`

  })
}, 2000);


