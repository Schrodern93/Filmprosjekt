// JavaScript source code

const sjangerValg = document.getElementById(["F", "R", "A", "K", "D", "FA", "DO"]);
let userInput = document.getElementById('sjangerValg');


function Menu() {
    <select id="sjangerValg" onchange="showDiv(this)">
        <option selected value="Menu">Meny</option>
        <option id="F" value="sjanger">Favoritter</option>
        <option id="R" value="Sjanger1">Romantikk</option>
        <option id="A" value="sjanger2">Action</option>
        <option id="K" value="sjanger3">Komedie</option>
        <option id="D" value="sjanger4">Drama</option>
        <option id="FA" value="sjanger5">Fantasy</option>
        <option id="DO" value="sjanger6">Dokummentar</option>
    </select>

}


function showDiv(element) {
    if
        (element.value == "sjanger") {
        maincontent.document.getElementById("maincontent").innerHTML = Favoritter[F];
        
    }
    if (element.value == "sjanger1") {
        maincontent.document.getElementById("maincontent").innerHTML = Romantikk[R];
       
    }
    if (element.value == "sjanger2") {
        maincontent.document.getElementById("maincontent").innerHTML = Action[A];

    }
    if (element.value == "sjanger3") {
        maincontent.document.getElementById("maincontent").innerHTML = Komedie[K];

    }
    if (element.value == "sjanger4") {
        maincontent.document.getElementById("maincontent").innerHTML = Drama[D];

    }
    if (element.value == "sjanger5") {
        maincontent.document.getElementById("maincontent").innerHTML = Fantasy[FA];

    }
    if (element.value == "sjanger6") {

        maincontent.document.getElementById("maincontent").innerHTML = Dokummentar[DO];
    }
}

main();