// JavaScript source code
//<script src="genres.js" charset="utf-8"></script>
//function meny() {
    let currentMovies = [];
    let selectedGenre;
    let genres = extractGenres();

    
    function createSelect() {
        let optionsHtml = '';
        for (let genre of genres) {
            let selected = selectedGenre == genre ? 'selected' : '';
            optionsHtml += `<option ${selected}>${genre}</option>`;
        }
        //document.getElementById("text").innerHTML = `
        return `
                <select id="sjanger" onchange="selectGenre(this.value)">
                    ${optionsHtml}
                </select> `
    }
    //<select id="sjangerValg" onchange="showDiv(this)"
    function selectGenre(genre) {
        selectedGenre = genre;
        currentMovies = [];
        for (let movie of movies) {
            if (movie.genres.includes(genre)) {
                currentMovies.push(movie);
            }
        }
        show();
    }
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

//}