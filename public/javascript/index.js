/* 
Bilal el Ayachi
website: bilalayachi.nl
*/


let input_alles = document.getElementById("verder").addEventListener("click",() => {
        let input_vam_naam = document.getElementById("input_naam").value;
        console.log(input_vam_naam)
        zoeken_naam();
})

function zoeken_naam(naam /*"test: bilal " */) {
    fetch("https://gender-api.com/get?name=Diana&key=jEdttMdAylfxkHbzQc")
        .then((resultaat) => resultaat.json())
        .then((data) => { 
            return console.log(data.name)
        })
        .catch((error) => console.log("Er is iets fout gegaan ... foutmelding: " + error));
}