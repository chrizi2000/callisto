let FelixHint = [0,0,0];

function GoIntoContact() {
    let screenicon = document.getElementById("screenicon");
    screenicon.style.display="none";
}

function Homebutton() {
    let screen = document.getElementById("screenicon");
    let contact = document.getElementById("screencontact");
    contact.style.display="none";
    screen.style.display="block";
}


function getHints(Name){
    let hintcode = ["","",""]
    if(Name == "Felix"){
        if(FelixHint[0] == 0){
            hintcode[0] = "<img src=\"images/icons/hint_closed.png\" style='width: 80%; height: auto' class=\"pure-img-responsive hintwrong buzz-out-on-hover\">";
        }else{
            hintcode[0] = "<img src=\"images/icons/hint_open.png\" style='width: 80%; height: auto' class=\"pure-img-responsive hintrue\">"
        }
        if(FelixHint[1] == 0){
            hintcode[1] = "<img src=\"images/icons/hint_closed.png\" style='width: 80%; height: auto' class=\"pure-img-responsive hintwrong buzz-out-on-hover\">";
        }else{
            hintcode[1] = "<img src=\"images/icons/hint_open.png\" style='width: 80%; height: auto' class=\"pure-img-responsive hintrue\">"
        }
        if(FelixHint[2] == 0){
            hintcode[2] = "<img src=\"images/icons/hint_closed.png\" style='width: 80%; height: auto' class=\"pure-img-responsive hintwrong buzz-out-on-hover\">";
        }else{
            hintcode[2] = "<img src=\"images/icons/hint_open.png\" style='width: 80%; height: auto' class=\"pure-img-responsive hintrue\">"
        }

    }
    return hintcode;
}

function Felix() {
    let name = "Felix";
    let hints = getHints(name);
    document.getElementById("screencontact").innerHTML = "" +
        "<div class=\"pure-u-12-24\">" +
        "<img src=\"images/icons/ehrlich.png\" style='width: 70%; height: auto' class=\"pure-img-responsive icon\">" +
        "</div>" +
        "<div class=\"pure-u-12-24\">" +
        "<img src=\"images/icons/reizbar.png\" style='width: 70%; height: auto' class=\"pure-img-responsive icon\">" +
        "</div>" +
        "<div class=\"pure-u-8-24\">" +
        hints[0] +
        "</div>" +
        "<div class=\"pure-u-8-24\">" +
        hints[1] +
        "</div>" +
        "<div class=\"pure-u-8-24\">" +
        hints[2]  +
        "</div>" +
        "<div class=\"pure-u-11-24\" >" +
        "<img src=\"images/icons/Chat.svg\" style='width: 70%; height: auto' class=\"pure-img-responsive icon\">" +
        "</div>" +
        "<div class=\"pure-u-11-24\" >" +
        "<img src=\"images/icons/Map.svg\" style='width: 70%; height: auto' class=\"pure-img-responsive icon\">" +
        "</div>";
    let Felixcontact = document.getElementById("screencontact");
    Felixcontact.style.display="block";
}


function OpenChat(name){
    if(name == "Felix"){
        w
    }
}