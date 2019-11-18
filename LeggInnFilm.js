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
function showAddMovies() {
	let html = `
		<div id="addMovieBox">
			<table>
					<tr>
						<th>Tittel</th>
						<th>Spilletid</th>
						<th>Sjanger</th>
						<th>Favoritt</th>
					</tr>
					<tr>
						<td><input id="inputTittel" type="text"/></td>
						<td><input id="inputSpilletid" type="number" /></td>
						<td><input id="inputSjanger" type="text"/></td>
						<td><input id="inputFavoritt" type="checkbox" /></td>
						<td><input id="addMovieButton" type="button" onclick ="LeggInn()" value="Legg til film"/></td>
					</tr>
			</table>
		</div>
`
	//taskTable.innerHTML = html;
}

let inputTittle = document.getElementById('inputTittel');
let inputSpilletid = document.getElementById('inputSpilletid');
let inputSjanger = document.getElementById('inputSjanger');
let inputFavorit = document.getElementById('inputFavorit');

function LeggInn() {
	filmData.push({
		filmTittel: inputTittle.value,
		spilletid: inputSpilletid.value,
		sjanger: inputSjanger.value,
		favorit: inputFavorit.value,
	});
	//inputTittle.value = '';
	//inputSpilletid.value = '';
	//inputSjanger.value = '';
	//inputFavorit.value = '';
	removeMovieBox();
}
function addMovieBox() {
    let mContent = document.getElementById('mainContent');
    showAddMovies()

    let html = `
        
        <p class="addMovieHeader">Legg til film</p> <p class="close" onclick="removeMovieBox()">X</p>
        <p>Her kommer Jøran's HTML</p>
        </div>`;

    mContent.innerHTML += html;
}

function removeMovieBox() {
    let movieBox = document.getElementById('addMovieBox');
    movieBox.remove();
}

function blur(elementID) {
    selectedClass = document.getElementById(elementID);
    selectedClass.classList.add(blur);
}