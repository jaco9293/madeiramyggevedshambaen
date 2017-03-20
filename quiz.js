var jsonData;

// Hent JSON
$.getJSON("kbhture.json", visQuizListe);

//Opdel liste
function visQuizListe(infoOmQuiz) {
    console.table(infoOmQuiz);

    jsonData = infoOmQuiz;

    //infoOmQuiz.forEach(visQuiz);
    visQuiz(infoOmQuiz[1]);
}
//Lav klon
function visQuiz(data) {

    //Indsæt data i klon
    //var klon = document.querySelector("#quiz_template").content.cloneNode(true);

    //klon.querySelector(".data_svar1").innerHTML = data.svar1;
    //klon.querySelector(".data_svar2").innerHTML = data.svar2;
    //klon.querySelector(".data_svar3").innerHTML = data.svar3;
    //klon.querySelector(".data_spoergsmaal").innerHTML = data.spoergsmaal;

    //document.querySelector(".quiz_spm").appendChild(klon);

}

// Menu
$(".arrow1").on("click", drop);

function drop() {
    console.log("menu drop down");
    $(".arrowright").toggleClass("dropdownright");
    $(".arrowleft").toggleClass("dropdownleft");
    $(".dropmenu").slideToggle();
}

document.getElementById("result").innerHTML = "Hold 4 har " + localStorage.clickcount + " point";
