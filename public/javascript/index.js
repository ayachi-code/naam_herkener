/* 
Bilal el Ayachi
website: bilalayachi.nl
*/

//funtie input naam
let input_naam = document.getElementById("input_naam").addEventListener("keypress",(event) => {
    let keya = event.keyCode;
    if (keya == 13) {
        zoeken_naam();
    }
})

function zoeken_naam(naam /*"test: bilal " */) {
    fetch("https://gender-api.com/get?name=Diana&key=jEdttMdAylfxkHbzQc")
        .then((resultaat) => resultaat.json())
        .then((data) => { 
            return console.log(data.name)
        })
        .catch((error) => console.log("Er is iets fout gegaan ... foutmelding: " + error));
}