let input_naam = document.getElementById("input_naam").addEventListener("keypress",(event) => {
    let keya = event.keyCode;
    if (keya == 13) {
        zoeken_naam();
    }
})

function zoeken_naam(naam /*"test: bilal " */) {
    fetch("https://gender-api.com/get?name=Diana&key=jEdttMdAylfxkHbzQc");

}