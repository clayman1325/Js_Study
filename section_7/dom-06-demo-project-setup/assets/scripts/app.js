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

function backdropHandler () {
  backdrop.classList.toggle('visible');
} 
function clearMovieInputs () {
  for (let i = 0; i < inputs.length; i++){
    inputs[i].value = ""
  } 
}
function presentMovies (userInputs) {
  const property = (movies.length > 0) ? 'none' : 'block'
  section.style.display = property;

  renderNewMovieElement(userInputs)
}
function renderNewMovieElement (movie) {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${movie.imageURL}" alt="${movie.movieTitle}">
    </div>
    <div class="movie-element__info">
      <h2>${movie.movieTitle}</h2>
      <p>${movie.rating}/5 stars</p>
    </div>
  `;

  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, movie.id))
  listRoot.append(newMovieElement)
}
function deleteMovie (movieId) {
  console.log(movieId)
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
  const property = (movies.length > 0) ? 'none' : 'block'
  section.style.display = property;
}
function deleteModalPreparation() {
  const deleteModal = document.getElementById("delete-modal");
  deleteModal.classList.toggle("visible");
  backdropHandler();
  return deleteModal;
}
function confirmDeleteMovieHandler(movieId) {
  deleteMovie(movieId) 
  deleteModalPreparation();
}
function cancelDeleteMovieHandler() {
  deleteModalPreparation()
}
function toggleModalHandler () {
  insertModal.classList.toggle('visible');
  backdropHandler();
}
function addMovieHandler () {
  const userInputs = {}
  userInputs.id         = Math.ceil((Math.random()*100).toString());
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
function deleteMovieHandler (movieId) {
  const deleteModal = deleteModalPreparation();

  let deleteMovieButton       = deleteModal.getElementsByClassName("btn--danger")[0];
  let cancelDeleteMovieButton = deleteModal.getElementsByClassName("btn--passive")[0];

  deleteMovieButton.addEventListener("click", confirmDeleteMovieHandler.bind(null, movieId))
  cancelDeleteMovieButton.addEventListener("click", cancelDeleteMovieHandler)

}
const backdropClickHandler = () => {
  toggleMovieModal();
};

backdrop.addEventListener('click', backdropClickHandler);
addButton.addEventListener('click', toggleModalHandler)
modalCancelButton.addEventListener('click', toggleModalHandler)
modalAddButton.addEventListener('click', addMovieHandler)

