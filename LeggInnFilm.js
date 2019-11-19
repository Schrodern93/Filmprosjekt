
function showAddMovies() {
	let movieBox = document.getElementById('addMovieBox');
	let html = `
		<p class="addMovieHeader">Legg til film</p><br/>
		<hr class="addMovieHr"/>
			<table class="addMovieTable">
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
			</table><p id="addMovieClose" onclick="removeMovieBox()">X</p>
						
						`;
	movieBox.innerHTML = html;
}

let inputTittel = document.getElementById('inputTittel').value;
let inputSpilletid = document.getElementById('inputSpilletid').value;
let inputSjanger = document.getElementById('inputSjanger').value;
let inputFavoritt = document.getElementById('inputFavoritt').checked;

let db = firebase.firestore(); // mulig const eller var
var userCollection = db.collection('FilmData');
console.log(inputTittel);

function LeggInn() {
	console.log('test1', )
	let info = {
		Tittel: inputTittel,
		Spilletid: parseInt(inputSpilletid),
		Sjanger: inputSjanger,
		Favoritt: inputFavoritt
		
	};
	console.log('test2', inputTittle.value, inputSpilletid.value, inputSjanger.value, inputFavoritt.checked)
	userCollection.add(info);
	removeMovieBox();
}
	//inputTittle.value = '';
	//inputSpilletid.value = '';
	//inputSjanger.value = '';
	//inputFavorit.value = '';

	
//}
function addMovieBox() {
	let mContent = document.getElementById('mainContent');
	let boxHTML = '<div id="addMovieBox"></div>';

	if (mContent.innerHTML.includes('<div id="addMovieBox">')){
		removeMovieBox();
		blurUnblur('gridContainer')
	}
	else {
		mContent.innerHTML += boxHTML;
		showAddMovies();
	}
	blurUnblur('gridContainer')
}

function removeMovieBox() {
	let movieBox = document.getElementById('addMovieBox');
	movieBox.remove();
	blurUnblur('gridContainer')
}

function blurUnblur(elementId) {
	let selectedId = document.getElementById(elementId);
	selectedId.classList.toggle('blur');
}