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

// Menu
$(".menu_icon").on("click", topmove);
$(".menu_icon").on("click", botmove);

function drop() {
    console.log("menu drop down");


}

function topmove() {
    //console.log("topmove");
    //   e.classList.toggle("top");

    $(".dropmenu").slideToggle();

    if ($(".topline").hasClass("top") == false) {
        $(".topline").addClass("top");
        $(".topline").removeClass("top-reverse");
    } else {

        //
        $(".topline").removeClass("top");
        $(".topline").addClass("top-reverse");
    }

}


function botmove() {
    //console.log("botmove");
    //   e.classList.toggle("top");



    if ($(".botline").hasClass("bot") == false) {
        $(".botline").addClass("bot");
        $(".botline").removeClass("bot-reverse");
    } else {

        //
        $(".botline").removeClass("bot");
        $(".botline").addClass("bot-reverse");
    }

}
