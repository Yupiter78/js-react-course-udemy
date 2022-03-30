"use strict";

let numberOfFilms;
function start() {
  while (!numberOfFilms) {
    numberOfFilms = parseInt(
      prompt("How many films have you already watched?", "")?.trim()
    );
    if (!numberOfFilms) {
      alert("Required field");
    }
  }
}

start();

console.log("numberOfFilms:", numberOfFilms);
console.log("typeof numberOfFilms:", typeof numberOfFilms);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// let i = 0;
// while (i < numberOfFilms) {
//   personalMovieDB.movies[
//     prompt("One of the last movies I watched?", "").trim()
//   ] = prompt("How much would you rate it?").trim();

//   i++;
// }

// for (let i = 0; i < numberOfFilms; i++) {
//   personalMovieDB.movies[
//     prompt("One of the last movies I watched?", "").trim()
//   ] = prompt("How much would you rate it?").trim();
// }

/* for (let i = 0; i < 2; i++) {
  let film,
    isValidFilm = false;
  while (!isValidFilm) {
    film = prompt("One of the last movies I watched?", "")?.trim();
    console.log("film:", film);
    if (!film) {
      alert("Enter movie name");
    } else if (film?.length > 30) {
      alert("Must be no more than 30 characters");
    } else {
      isValidFilm = true;
    }
  }

  let ratingFilm;
  while (!ratingFilm) {
    ratingFilm = prompt("How much would you rate it?")?.trim();
    if (!ratingFilm) {
      alert("Required field");
    }
  }

  personalMovieDB.movies[film] = ratingFilm;
}

if (personalMovieDB.count >= 0 && personalMovieDB.count < 10) {
  alert("Few films watched");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  alert("You are classic spectator");
} else if (personalMovieDB.count > 30) {
  alert("You are cinephile");
} else {
  alert("An error has occurred");
} */

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const film = prompt("One of the last movies I watched?", ""),
      ratingFilm = prompt("How much would you rate it?");

    if (
      film !== null &&
      ratingFilm !== null &&
      film !== "" &&
      ratingFilm !== "" &&
      film.length <= 50
    ) {
      personalMovieDB.movies[film] = ratingFilm;
      console.log("Entered data added");
    } else {
      console.log("Incorrect data entered");
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count >= 0 && personalMovieDB.count < 10) {
    console.log("Few films watched");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("You are classic spectator");
  } else if (personalMovieDB.count > 30) {
    console.log("You are cinephile");
  } else {
    console.log("An error has occurred");
  }
}

detectPersonalLevel();

// const firstFilm = prompt("One of the last movies I watched?", "").trim();
// const ratingFirstFilm = prompt("How much would you rate it?");

// const secondFilm = prompt("One of the last movies I watched?", "").trim();
// const ratingSecondFilm = prompt("How much would you rate it?");

// personalMovieDB["movies"][firstFilm] = ratingFirstFilm;
// personalMovieDB.movies[secondFilm] = ratingSecondFilm;

function showMyDb(privat) {
  if (!privat) {
    console.log("personalMovieDB:", personalMovieDB);
  }
}

showMyDb(personalMovieDB.privat);

function writeYourGenres(genres = []) {
  for (let i = 1; i <= 3; i++) {
    genres.push(prompt(`Your favorite genre is numbered ${i}`));
  }
}

writeYourGenres(personalMovieDB.genres);

console.log("personalMovieDB_2:", personalMovieDB);
