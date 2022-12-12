const button = document.querySelector('button');


const buttonClickHandler = event => {
  console.log(event)
}

// const anotherBUttonClickHandler = () => {
//   console.log("hola")
// }

// button.onclick = buttonClickHandler
// button.onclick = anotherBUttonClickHandler

button.addEventListener('click', buttonClickHandler)

setTimeout(() => {
  button.removeEventListener("click",buttonClickHandler )
}, 2000)

window.addEventListener('scroll', event => {
  console.log(event);
} )

const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  console.log(event)
})

const div = document.querySelector('div');

div.addEventListener('click', event => {
  console.log('clicked in div')
  console.log(event)
}, true)

button.addEventListener("click", (event) => {
  console.log("clicked button")
  console.log(event);
})

// const listItems = document.querySelectorAll('li');
// console.log(listItems)
// listItems.forEach(listenItem => {
//   console.log(listenItem)
//   listenItem.addEventListener("click", (event) => {
//     event.target.classList.toggle('highlight');
//   })
// })

const ul = document.querySelector("ul")

ul.addEventListener('click', event => {
  // event.currentTarget.
  // event.closest("Html element")
  event.target.classList.toggle('highlight');
  form.submit()
} )