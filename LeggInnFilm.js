
let db = firebase.firestore(); // mulig const eller var
var userCollection = db.collection('FilmData');
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


function LeggInn() {
    tittel = inputTittel.value;
    sjanger = inputSjanger.value;
    let info = {
        Tittel: tittel.toLowerCase(),
        Spilletid: parseInt(inputSpilletid.value),
        Sjanger: sjanger.toLowerCase(),
        Favoritt: inputFavoritt.checked
    };
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
        let inputTittel = document.getElementById('inputTittel');
        let inputSpilletid = document.getElementById('inputSpilletid');
        let inputSjanger = document.getElementById('inputSjanger');
        let inputFavoritt = document.getElementById('inputFavoritt');  
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