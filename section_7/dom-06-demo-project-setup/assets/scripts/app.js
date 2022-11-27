const addButton          = document.querySelector('header button');
const insertModal        = document.getElementById("add-modal");
const insterModalActions = insertModal.querySelector('.modal__actions').children;
const modalCancelButton  = insterModalActions[0];
const modalAddButton     = modalCancelButton.nextElementSibling
const backdrop           = document.getElementById('backdrop');
const inputs             = insertModal.querySelectorAll('input')
const section            = document.querySelector('section');
const listRoot           = document.getElementById('movie-list');
const movies = [];


function toggleModalHandler () {
  insertModal.classList.toggle('visible');
  backdropHandler();
}
function backdropHandler () {
  backdrop.classList.toggle('visible');
}
function clearMovieInputs () {
  for (let i = 0; i < inputs.length; i++){
    inputs[i].value = ""
  } 
}
function addMovieHandler () {
  const userInputs = {}
  userInputs.id         = Math.random(200).toString;
  userInputs.movieTitle = inputs[0].value;
  userInputs.imageURL   = inputs[1].value;
  userInputs.rating     = inputs[2].value;

  if (
    userInputs.movieTitle.trim() == "" ||
    userInputs.imageURL.trim() == "" ||
    userInputs.rating.trim() == "" ||
    +userInputs.rating < 1 || 
    +userInputs.rating >5 
  ) {
    alert('Please enter valid values in the boxes');
  }

  movies.push(userInputs);
  toggleModalHandler();
  clearMovieInputs();
  presentMovies(userInputs);
}
function presentMovies (userInputs) {
  if(movies.length > 0) {
    section.style.display = 'none'
  } else {
    section.style.display = 'block'
  }
  renderNewMovieElement(userInputs)
}
function renderNewMovieElement (movieId) {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image>
      <img src="${movie.imageURL}" alt="${movie.movieTitle}">
    </div>
    <div class="movie-element__info>
      <h2> ${movie.movieTitle} </h2>
      <p>  ${movie.rating}/5 stars </p>
    </div>
  `;
  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, movie.id))
  listRoot.append(newMovieElement)
}
function deleteMovie (movieId) {
  let movieIndex = 0
  for(const movie of movies){
    if(movie.id == movieId) {
      break;
    } else {
      movieIndex += 1;
    }
  }
  movies.splice(movieIndex, 1);
  listRoot.children[movieIndex].remove();
  // listRoot.removeChild(listRoot.children[movieIndex])
}
function deleteMovieHandler (movieId) {
  const deleteMovieModal = document.getElementById();

}

addButton.addEventListener('click', toggleModalHandler)
modalCancelButton.addEventListener('click', toggleModalHandler)
modalAddButton.addEventListener('click', addMovieHandler)
newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id))

