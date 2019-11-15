let filmData = FilmDataSnapshot.data();
let mainC = document.getElementById('mainContent');
let yayOrNay = '';

showMovies();



// firebase.initializeApp(firebaseConfig);
//         firebase.analytics();
//         let db = firebase.firestore(); // mulig const eller var
//         let html = '';

//         var userCollection = db.collection('FilmData');
//         userCollection.orderBy('Tittel').onSnapshot(
//             function (snapshot) {
//                 let html = '<ul>';
//                 snapshot.forEach(
//                     function (FilmDataSnapshot) {

function showMovies(){
    
    for (i = 0; i < FilmData.length; i ++){
        if (filmData[i].Favoritt == true){
            yayOrNay = '♥';
        }
        else {
            yayOrNay = '♡';
        }
        html += `<div class="container">
                    <h3.title>${filmData[i.Tittel]}</h3.title>
                    <p.sjanger>${filmData[i.Sjanger]}</p.sjanger>
                    <p.spilletid>${filmData[i.Spilletid]}</p.spilletid>
                    <div.favoritt>${yayOrNay}</div.favoritt></div>`
    }

    mainC.innerHTML = html;
}



 // mulig const her 
    //    maincontent.innerHTML += '<li>' + FilmData.Tittel + ' (' + FilmData.Sjanger + ')' + '(' + FilmData.Spilletid + ' min )' + '(' + FilmData.Favoritt + ')</li>';
