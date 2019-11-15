// JavaScript source code
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