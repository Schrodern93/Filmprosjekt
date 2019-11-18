
function addMovieBox(){
    let mContent = document.getElementById('mainContent');
    showAddMovies()

    let html = `
        
        <p class="addMovieHeader">Legg til film</p> <p class="close" onclick="removeMovieBox()">X</p>
        <p>Her kommer Jøran's HTML</p>
        </div>`;
    
    mContent.innerHTML += html;
}

function removeMovieBox(){
    let movieBox = document.getElementById('addMovieBox');
    movieBox.remove();
}

function blur(elementID){
    selectedClass = document.getElementById(elementID);
    selectedClass.classList.add(blur);
}