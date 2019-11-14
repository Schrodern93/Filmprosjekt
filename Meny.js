// JavaScript source code

const sjangerValg = document.getElementById(["F", "R", "A", "K", "D", "FA", "DO"]);
let userInput = document.getElementById('sjangerValg');
let info = 'tekst bare';


function showDiv(element) {
    if
        (element.value == "sjanger") {
        document.getElementById("mainContent").innerHTML = Favoritter[F];
        //
        
    }
    if (element.value == "sjanger1") {
        document.getElementById("mainContent").innerHTML = Romantikk[R];
       
    }
    if (element.value == "sjanger2") {
        document.getElementById("mainContent").innerHTML = Action[A];

    }
    if (element.value == "sjanger3") {
        document.getElementById("mainContent").innerHTML = Komedie[K];

    }
    if (element.value == "sjanger4") {
        document.getElementById("mainContent").innerHTML = Drama[D];

    }
    if (element.value == "sjanger5") {
        document.getElementById("mainContent").innerHTML = Fantasy[FA];

    }
    if (element.value == "sjanger6") {

        document.getElementById("mainContent").innerHTML = Dokummentar[DO];
    }
}

// main();