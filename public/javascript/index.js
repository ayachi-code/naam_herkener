/* 
Bilal el Ayachi
website: bilalayachi.nl
*/

let input_vam_naam;
let input_van_land;


let input_alles = document.getElementById("verder").addEventListener("click",() => {
        input_vam_naam = document.getElementById("input_naam").value;
        input_van_land = document.getElementById("input_land").value;
        zoeken_naam(input_vam_naam,input_van_land);
})

 function zoeken_naam(naam,land) {
    fetch("https://gender-api.com/get?name="+naam+"&country="+land+"&key=jEdttMdAylfxkHbzQc")
        .then((resultaat) => resultaat.json())
        .then((data) => { 
            return console.log("test")
        })
        .catch((error) => console.log("Er is iets fout gegaan ... foutmelding: " + error));
    }