// JavaScript source code
var firestore = firebase.firestore();
const docRef = firestore.collection("FilmData");
//const loadButton = document.querySelector("#loadButton");
function load() {
    
    let db = firebase.firestore(); // mulig const eller var

    var userCollection = db.collection('FilmData');
    userCollection.orderBy('Tittel').onSnapshot(
        function (snapshot) {
            let html = '<ul>';
            snapshot.forEach(
                function (FilmDataSnapshot) {
                    let FilmData = FilmDataSnapshot.data();
                    console.log(FilmData);
                    html += '<li>' + FilmData.Tittel + ' ' + FilmData.Spilletid + 'min ' + FilmData.Sjanger + ' ' + FilmData.Favoritt + '</li>';

                    console.log(FilmDataSnapshot.data);
                });

            html += '</ul>';
            document.getElementById('mainContent').innerHTML = html;
        });
}