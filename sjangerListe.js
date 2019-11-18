// JavaScript source code
load();
//for (i = 0; i < FilmData.length; i++) {
//let alle = all[{ FilmData.Tittel, FilmData.Sjanger, FilmData.Spilletid, FilmData.Favoritt }];

//   // alle = FilmData;
////}
//console.log(alle);

// model
let currentMovies = [];
let selectedGenre;
let genres = extractGenres();

// view
show();
function show() {
    let optionsHtml = '';
    for (let genre of genres) {
        let selected = selectedGenre == genre ? 'selected' : '';
        optionsHtml += `<option ${selected}>${genre}</option>`;
    }

    let moviesHtml = '';
    for (let movie of currentMovies) {
        moviesHtml += `<tr>
                          <td>${movie.movie_title}</td>
                          <td>${movie.genres}</td>
                          <td>${movie.director_name}</td>
                          <td>${movie.title_year}</td>
                       </tr>`;
    }

    document.getElementById('content').innerHTML = `
                <select onchange="selectGenre(this.value)">
                    ${optionsHtml}
                </select>

                <table>
                    ${moviesHtml}
                </table>
            `;
}




function selectGenre(genre) {
    selectedGenre = genre;
    currentMovies = [];
    for (let movie of movies) {
        if (movie.genres.includes(genre)) {
            currentMovies.push(movie);
        }
    }
    showDiv();
}

//function extractGenres() {
//    let genres = new Set();
//    for (let movie of movies) {
//        let genresOfOneMovie = movie.genres.split('|');
//       for (let genre of genresOfOneMovie) {
//            genres.add(genre);
//        }
//    }
//    return genres;
//}

function extractGenres() {
    let genres = [];
    for (let movie of movies) {
        let genresOfOneMovie = movie.genres.split('|');
        for (let genre of genresOfOneMovie) {
            if (!genres.includes(genre)) {
                genres.push(genre);
            }
        }
    }
    return genres;
}

                                    //for (let i = 0; i < movies.length; i++) {
                                    //    let movie = movies[i];
                                    //    // ...
                                    //}



