const numberOfFilms = +prompt(
  "How many films have you already watched?",
  ""
).trim();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < numberOfFilms; i++) {
  personalMovieDB.movies[
    prompt("One of the last movies I watched?", "").trim()
  ] = prompt("How much would you rate it?").trim();
}

// for (let i = 0; i <= numberOfFilms; i++) {
//     const film = prompt("One of the last movies I watched?", "").trim();
// const ratingFilm = prompt("How much would you rate it?");
// personalMovieDB.movies[film] = ratingFilm;
// }

// const firstFilm = prompt("One of the last movies I watched?", "").trim();
// const ratingFirstFilm = prompt("How much would you rate it?");

// const secondFilm = prompt("One of the last movies I watched?", "").trim();
// const ratingSecondFilm = prompt("How much would you rate it?");

// personalMovieDB["movies"][firstFilm] = ratingFirstFilm;
// personalMovieDB.movies[secondFilm] = ratingSecondFilm;

console.log("personalMovieDB:", personalMovieDB);
