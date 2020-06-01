"use strict";

app.component("lenagame", {
    templateUrl: "components/lena/lenagame.html",
    controller: "lenagame",
    bindings:{}
});

app.controller("lenagame", function ($log, Game) {
    $log.debug("lenagame()");

    this.statuscharacter = (name) => {
        return Game.lenagetstatuscharacter(name);
    }

    this.statusbubble = (name) =>{
        return Game.lenagetstatusbubble(name);
    }



    this.statusbuttons = (name) =>{
        return Game.lenagetstatusbutton(name);
    }


    this.answerpressed = (answer, buttons, emotion, hint) =>{
        Game.playAudioMenuClick();
        Game.lenachangebuttons(buttons);
        Game.lenachangebubble(answer);
        Game.lenachangecharacter(emotion);
        if(hint){
            if(hint === "death"){
                Game.lenadead();
            }else{
                Game.lenagothint(hint -1);
            }
        }
    }
});
