// JavaScript source code

const sjangerValg = document.getElementById(["F", "R", "A", "K", "D", "FA", "DO"]);
let userInput = document.getElementById('sjangerValg');


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