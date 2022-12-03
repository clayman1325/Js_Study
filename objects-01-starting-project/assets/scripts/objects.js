const addMovieButton = document.getElementById("add-movie-btn");
const serachButton   = document.getElementById("search-btn");

const movies = [];

const serachMovie = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm)
}
const renderMovies = (filter="") => {
  const movieList = document.getElementById("movie-list")
  movieList.innerHTML = "";
  console.log(filter)
  const filteredMovies =  !filter ? movies : movies.filter((movie) => movie.info.title.includes(filter))

  if (filteredMovies.length == 0 ){
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }

  filteredMovies.forEach( (movie) => {
      const movieEl = document.createElement("li");
      const { info } = movie 
      const { title: movieTitle } = info;
      let text = movie.formatedTitle() + ' - ';

      for (const key in info){
        if(key != 'title'){
          text += `${key}: ${info[key]}`;
        }
      }

      movieEl.textContent = text;
      movieList.append(movieEl);
  })
}
const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() == '' ||
    title.trim() == '' ||
    title.trim() == '' 
    ) {
      return 
    }
  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random(),
    formatedTitle: function () {
      return this.info.title.toUpperCase()
    }
  }

  movies.push(newMovie)
  renderMovies()
}


addMovieButton.addEventListener("click", addMovieHandler);
serachButton.addEventListener("click", serachMovie);