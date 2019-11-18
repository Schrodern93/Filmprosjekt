// JavaScript source code
firestore();
function firestore() {

            // Your web app's Firebase configuration
            var firebaseConfig = {
                apiKey: "AIzaSyDJudofDYHe6jAavBq2Ei9O0lCMzNkVfZc",
        authDomain: "fir-test-e989e.firebaseapp.com",
        databaseURL: "https://fir-test-e989e.firebaseio.com",
        projectId: "fir-test-e989e",
        storageBucket: "fir-test-e989e.appspot.com",
        messagingSenderId: "309319920225",
        appId: "1:309319920225:web:9fcb3b7ba171ffdcccd820",
        measurementId: "G-KBVXLJ3PNW"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    let db = firebase.firestore(); // mulig const eller var
    let html = '';
    //const docRef = db.doc("FilmData");
    //const loadButton = document.querySelector("#loadButton");
    //const Data = '';
    var userCollection = db.collection('FilmData');
    userCollection.orderBy('Tittel').onSnapshot(
            function (snapshot) {
                let html = '<ul>';
                snapshot.forEach(
                    function (FilmDataSnapshot) {
                    let FilmData = FilmDataSnapshot.data();
                        html += '<li>' + FilmData.Tittel + ' (' + FilmData.Sjanger + ')' + '(' + FilmData.Spilletid + ' min )' + '(' + FilmData.Favoritt + ')</li>';

    console.log(FilmDataSnapshot.data);
});

                html += '</ul>';
// return html;
// document.getElementById('mainContent').innerHTML = html;
// document.getElementById('side').innerHTML = html;
});

//showDiv();
   
  }