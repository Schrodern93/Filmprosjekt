
let db = firebase.firestore(); // mulig const eller var
var userCollection = db.collection('FilmData');
function showAddMovies() {

	let movieBox = document.getElementById('addMovieBox');
	let html = `
		<p class="addMovieHeader">Legg til film</p><br/>
		<hr class="addMovieHr"/>
			<table class="addMovieTable">
				<tr>
				<th class="addMovieTH">Tittel</th>
				<th class="addMovieTH">Spilletid</th>
				<th class="addMovieTH">Sjanger</th>
				<th class="addMovieTH">Favoritt</th>
				</tr>
				<tr>
				<td class="addMovieTD"><input id="inputTittel" type="text"/></td>
				<td class="addMovieTD"><input id="inputSpilletid" type="number" /></td>
					<td class="addMovieTD"><input id="inputSjanger" type="text"/></td>
					<td class="addMovieTD"><input id="inputFavoritt" type="checkbox" /></td>
					<td class="addMovieTD"><input id="addMovieButton" type="button" onclick ="LeggInn()" value="Legg til film"/></td>
					</tr>
			</table><p id="addMovieClose" onclick="removeMovieBox()">X</p>
						
						`;
    movieBox.innerHTML = html;
}

console.log(document.getElementById('inputTittel'));






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