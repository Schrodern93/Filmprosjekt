// JavaScript source code

function load() {

    loadButton.addEventListener("click", function () {
        docRef.get().then(function (doc) {
            if (doc && doc.exists) {
                let FilmData = doc.data(); // mulig const her 
                maincontent.innerHTML += '<li>' + FilmData.Tittel + ' (' + FilmData.Sjanger + ')' + '(' + FilmData.Spilletid + ' min )' + '(' + FilmData.Favoritt + ')</li>';

            }
        }).catch(function (error) {
            console.log("Got an error", error);
        });
    });
}