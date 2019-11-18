// JavaScript source code
function showAddMovies() {
	let html = `
				<tr>
					<th>Tittel</th>
					<th>Spilletid</th>
					<th>Sjanger</th>
					<th>Favoritt</th>
				</tr>
				<tr>
					<td><input id="inputTittel" type="text"/></td>
					<td><input id="inputSpilletid" type="number" /></td>
					<td><input id="inputSjanger" type="dropdown"/></td>
					<td><input id="inputFavoritt" type="checkbox" /></td>
					<td><input id="addMovieButton" type="button" onclick ="LeggInn()" value="Legg til film"/></td>
				</tr>`
	taskTable.innerHTML = html;
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
	inputTittle.value = '';
	inputSpilletid.value = '';
	inputSjanger = '';
	inputFavorit = '';
}