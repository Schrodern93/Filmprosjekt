// JavaScript source code

function load() {

    loadButton.addEventListener("click", function () {
        docRef.get().then(function (doc) {
            if (doc && doc.exists) {
                let FilmData = doc.data(); // mulig const her 
                return FilmData;
            }
        }).catch(function (error) {
            console.log("Got an error", error);
        });
    });
}