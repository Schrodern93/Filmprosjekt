let movieContainers = document.getElementById('gridContainer');

function addMovieBox(){
    let mContent = document.getElementById('mainContent');

    let html = `
        <div id="addMovieBox">
        <p class="addMovieHeader">Legg til film</p> <p class="close" onclick="removeMovieBox()">X</p>
        <p>Her kommer Jøran's HTML</p>
        </div>`;
    
    mContent.innerHTML += html;
    blurOrUnblur('gridContainer');
}

function removeMovieBox(){
    let movieBox = document.getElementById('addMovieBox');
    movieBox.remove();
    blurOrUnblur('gridContainer')
}

function blurOrUnblur(elementId){
    let selectedId = document.getElementById(elementId);
    selectedId.classList.toggle('blur');

}