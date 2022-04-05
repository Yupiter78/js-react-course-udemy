"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start() {
    while (!this.count) {
      this.count = parseInt(
        prompt("How many films have you already watched?", "")?.trim()
      );
      if (!this.count) {
        alert("Required field");
      }
    }
  },
  rememberMyFilms() {
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
        this.movies[film] = ratingFilm;
        console.log("Entered data added");
      } else {
        console.log("Incorrect data entered");
        i--;
      }
    }
  },
  detectPersonalLevel() {
    if (this.count >= 0 && this.count < 10) {
      console.log("Few films watched");
    } else if (this.count >= 10 && this.count <= 30) {
      console.log("You are classic spectator");
    } else if (this.count > 30) {
      console.log("You are cinephile");
    } else {
      console.log("An error has occurred");
    }
  },
  showMyDb(privat) {
    if (!privat) {
      console.log("personalMovieDB:", this);
    }
  },
  writeYourGenres(genres) {
    for (let i = 1; i <= 3; i++) {
      /* let genre = prompt(`Your favorite genre is numbered ${i}`, "");
      if (genre === "" || genre === null) {
        alert("Required field");
        i--;
      } else {
        genres[i - 1] = genre;
      } */
      let question;
      while (!question) {
        question = prompt(
          `Your favorite genre is numbered ${i}`,
          ""
        ).toLocaleLowerCase();
        if (question) {
          genres.push(question.slice(0, 1).toUpperCase() + question.slice(1));
        } else {
          alert("Required field");
        }
      }
    }
    genres
      .sort()
      .forEach((genre, i) =>
        console.log(`Favorite genre #${i + 1} - this ${genre}`)
      );
  },
  toggleVisibleMyDB() {
    this.privat = !this.privat;
  },
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.showMyDb(personalMovieDB.privat);

personalMovieDB.writeYourGenres(personalMovieDB.genres);

console.log(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB();
console.log(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB();
console.log(personalMovieDB.privat);
