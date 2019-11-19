// JavaScript source code
var firestore = firebase.firestore();
const docRef = firestore.collection("FilmData");
//const loadButton = document.querySelector("#loadButton");
function load() {
    let gContainer = document.getElementById('gridContainer');
    let db = firebase.firestore(); // mulig const eller var

    var userCollection = db.collection('FilmData');
    userCollection.orderBy('Tittel').onSnapshot(
        function (snapshot) {
            let html = '';
            // '<ul>';
            snapshot.forEach(
                function (FilmDataSnapshot) {
                    
                    let FilmData = FilmDataSnapshot.data();
                    let filmTittel = [FilmData.Tittel];
                    let filmSpilletid = [FilmData.Spilletid];
                    let filmSjanger = [FilmData.Sjanger];
                    let filmFavoritt = [FilmData.Favoritt];

                    for (i = 0; i < filmTittel.length; i++) {

                        if (filmFavoritt == true) {
                            yayOrNay = '♥';
                        }
                        else {
                            yayOrNay = '♡';
                        }
                        html += `<div class="container">
                                    <h3.title>${filmTittel}</h3>
                                    <p.sjanger>${filmSjanger}</p>
                                    <p.spilletid>${filmSpilletid}</p>
                                    <div.favoritt>${yayOrNay}</div></div>`;
                    }
        
                    gContainer.innerHTML = html;
                });
        });
}