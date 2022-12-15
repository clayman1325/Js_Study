const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post')
const form         = document.querySelector('#new-post form');
const fetchButton  = document.querySelector('#available-posts button');
const postList     = document.querySelector('ul')
const url = "https://jsonplaceholder.typicode.com/posts"

function sendHttpRequest1(method, url, data) {
  const xhr = new XMLHttpRequest();
  xhr.setRequestHeader('Content-type', 'application/json')
  // xhr.setRequestHeader('key', 'value')


  const promise = new Promise((resolve, reject) => {
    xhr.open(method, url);
  
    xhr.responseType = 'json'
    xhr.onload = function () {
      if(xhr.status > 199 && xhr < 300) {
        resolve(xhr.response)
      } else {
        const response = xhr.response // to see the error messages
        reject(new Error('something went wrong'))
      }
    }
    xhr.onerror = function () {
      reject(new Error('Failed to send or receive request'))
    }
    xhr.send(JSON.stringify(data));
  })

  return promise;
}

function sendHttpRequest(method, url, data) {

  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json'
    }
  }).then((data) => data.json());
} 

async function fetchPost () {
  try {
    // const listOfProducts = await sendHttpRequest("GET", url)
    const listOfProducts = await axios.get(url)

    for (const post of listOfProducts.data) {
      const newPost = document.importNode(postTemplate.content, true);
      newPost.querySelector('h2').textContent = post.title.toUpperCase();
      newPost.querySelector('p').textContent = post.body;
      newPost.querySelector('li').id = post.id;
      listElement.append(newPost)
    }
  } catch (error) {
    console.log(error.mesagge)
  }
}

async function createPost (title, content) {
  const userId = Math.random(100);
  const body = {
    title,
    body: content,
    userId
  }

  const fd = new FormData(form)
  fd.append("id", userId)
  // sendHttpRequest('POST', url, body)
  const response = await axios.post(url, body)
}


fetchButton.addEventListener('click', fetchPost)
form.addEventListener("submit", event => {
  event.preventDefault();
  console.log(event.currentTarget)
  const enteredTitle = event.currentTarget[0].value;
  const enteredContent = event.currentTarget[1].value;

  createPost(enteredTitle, enteredContent)
})

postList.addEventListener('click', event => {
  if(event.target.tagName === 'BUTTON') {
    const postId = event.target.closest('li').id;
    sendHttpRequest("DELETE", url + `/${postId}`)
  }
})