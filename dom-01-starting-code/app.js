const allLis = document.querySelectorAll('li')

for (let li of allLis){
  li.style.color = "blue"
  console.dir(li)
}

const listItemElements = document.getElementsByTagName("li")

for (let li of listItemElements){
  li.style.color = "green"
  console.dir(li)
}

const h1 = document.getElementById("main-title");
h1.textContent = " David estas haciendo las cosas bien y mejorando";
h1.style.color = "white";
h1.style.backgroundColor = "blue";

const li = document.querySelector("li:last-of-type");
li.textContent = li.textContent + "Changed !"

const body = document.body;
const button = document.querySelector("button")
const ul = document.querySelector('ul')
ul.style.display = "block";

button.addEventListener("click", () => {
  const visible = ul.style.display == "block"
  if(visible == true){
    ul.style.display = "none";
    return 
  }
  ul.style.display = "block";
})