// JavaScript source code
// JavaScript source code
// Tanken her er at funksjonen som kan legge til nye filmer er her

function LeggInn() {

    let info = {
        Tittel: inputTittel.value,
        SpilleTid: inputSpilletid.value,
        Sjanger: inputSjanger.value,
        Favoritt: inputFavoritt.value
    };
    userCollection.add(info);
}

//const docRef = firestore.doc("FilmData");
////const outputHeader = document.querySelector("#hotDogOutput");
//const inputTittel = document.querySelector("#Tittel");
//const inputSjanger = document.querySelector("#Sjanger");
//const inputSpilletid = document.querySelector("#Spilletid");
//const inputFavoritt = document.querySelector("#Favoritt");

//const saveButton = document.querySelector("#saveButton");
//saveButton.addEventListener("click", function () {
//    const textToSave = input.value;
//    console.log("I am going to save " + textToSave + " to Firestore");
//    docRef.set({
//        hotDogStatus: textToSave
//    }).then(function () {
//        console.log("Status saved");
//    }).catch(function (error) {
//        console.log("Got an error", error);
//    });
//});