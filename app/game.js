function fullscreen(){
    elem = document.getElementsByTagName("body")[0];

    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement){
        if(elem.requestFullscreen){
            elem.requestFullscreen();
        } else if(elem.msRequestFullscreen){
            elem.msRequestFullscreen();
        } else if(elem.mozRequestFullScreen){
            elem.mozRequestFullScreen();
        } else if(elem.webkitRequestFullscreen){
            elem.webkitRequestFullscreen(elem.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if(document.exitFullscreen){
            document.exitFullscreen();
        } else if(document.msExitFullscreen){
            document.msExitFullscreen();
        } else if(document.mozCancelFullScreen){
            document.mozCancelFullScreen();
        } else if(document.webkitExitFullscreen){
            document.webkitExitFullscreen();
        }
    }
}


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

function Chatbutton() {

}

function Gamebutton() {

}

function getHints(Name){
    let hintcode = ["","",""]
    if(Name == "Felix"){
        if(FelixHint[0] == 0){
            hintcode[0] = "<img src=\"images/icons/hint_closed.png\" style='width: 80%; height: auto' class=\"pure-img-responsive hintwrong\">";
        }else{
            hintcode[0] = "<img src=\"images/icons/hint_open.png\" style='width: 80%; height: auto' class=\"pure-img-responsive hintrue\">"
        }
        if(FelixHint[1] == 0){
            hintcode[1] = "<img src=\"images/icons/hint_closed.png\" style='width: 80%; height: auto' class=\"pure-img-responsive hintwrong\">";
        }else{
            hintcode[1] = "<img src=\"images/icons/hint_open.png\" style='width: 80%; height: auto' class=\"pure-img-responsive hintrue\">"
        }
        if(FelixHint[2] == 0){
            hintcode[2] = "<img src=\"images/icons/hint_closed.png\" style='width: 80%; height: auto' class=\"pure-img-responsive hintwrong\">";
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
        "<div class=\"pure-u-1-1\">\n" +
        "<h4 style='padding-top: 0.5vw; color: white;font-size: 1.15vw'>Felix Fuhrmann</h4><br>"+
        "</div>" +
        "<div class=\"pure-u-24-24\">" +
        "<h5 style='color: white; font-size: 1vw; text-align: left'>Eigenschaften:</h5><br>" +
        "</div>" +
        "<div class=\"pure-u-24-24\">" +
        "<h6  class=\"Eigenschaft\" style='font-size: 1vw;'> - Eigenschaft 1 </h6><br>" +
        "</div>" +
        "<div class=\"pure-u-24-24\">" +
        "<h6 class='Eigenschaft' style='font-size: 1vw;'> - Eigenschaft 2 </h6><br>" +
        "</div>" +
        "<div class=\"pure-u-24-24\">" +
        "<h6 class='Eigenschaft' style='font-size: 1vw;'> - Eigenschaft 3 </h6><br>" +
        "</div>" +
        "<br>" +
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