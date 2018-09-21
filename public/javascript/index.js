/* 
Bilal el Ayachi
website: bilalayachi.nl
*/

let input_vam_naam;
let input_van_land;
let text_p = document.getElementById("antwoord");


let input_alles = document.getElementById("verder").addEventListener("click",() => {
        input_vam_naam = document.getElementById("input_naam").value;
        input_van_land = document.getElementById("input_land").value;
        zoeken_naam(input_vam_naam,input_van_land);
})

 function zoeken_naam(naam,land) {
    fetch("https://gender-api.com/get?name="+naam+"&country="+land+"&key=jEdttMdAylfxkHbzQc")
        .then((resultaat) => resultaat.json())
        .then((data) => {
            if (data.gender == "male") {
                data.gender = "manne"
            } else if (data.gender == "female") {
                data.gender = "meisjes";
            }
            text_p.innerHTML = "Jouw naam " + data.name + " is in het " + data.country + " een " + data.gender + " naam";
        })
        .catch((error) => console.log("Er is iets fout gegaan ... foutmelding: " + error));
    }