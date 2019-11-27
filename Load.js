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
                    let yayOrNay = '';
                    let spilleTid = '';
                    let FilmData = FilmDataSnapshot.data();
                    let filmTittel = [FilmData.Tittel];
                    let filmSpilletid = [FilmData.Spilletid];
                    let filmSjanger = [FilmData.Sjanger];
                    let filmFavoritt = [FilmData.Favoritt];
                    
                    for (i = 0; i < filmTittel.length; i++) {

                        if (filmFavoritt[i] == true) {
                            yayOrNay = '\u2665';
                        }
                        else yayOrNay = '\u2661';
                        
                        for (i = 0; i < filmSpilletid.length; i++){
                            let timer = (filmSpilletid[i] / 60);
                            let timerRoundOff = Math.floor(timer * 1) / 1;
                            let minutter = (filmSpilletid[i] % 60);
                            spilleTid = `${timerRoundOff}h ${minutter}m`;
                        }


                        html += `<div class="container">
                            <h3 class="title">${filmTittel}</h3>
                            <p class="spilletid">${spilleTid}</p>
                            <p class="sjanger">${filmSjanger}</p><div class="favoritt">${yayOrNay}</div>
                        </div>`;
                    }
                        
                    gContainer.innerHTML = html;
                });
        });
        
}