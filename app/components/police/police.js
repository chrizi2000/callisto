"use strict";

app.component("vanessagame", {
    templateUrl: "components/vanessa/vanessagame.html",
    controller: "vanessagame",
    bindings:{}
});

app.controller("vanessagame", function ($log, Game) {
    $log.debug("vanessagame()");

    this.statuscharacter = (name) => {
        return Game.policegetstatuscharacter(name);
    }

    this.statusbubble = (name) =>{
        return Game.policegetstatusbubble(name);
    }



    this.statusbuttons = (name) =>{
        return Game.policegetstatusbutton(name);
    }


    this.answerpressed = (answer, buttons, emotion, hint) =>{
        Game.playAudioMenuClick();
        Game.policechangebuttons(buttons);
        Game.policechangebubble(answer);
        Game.policechangecharacter(emotion);
        if(hint){
            if(hint === "death"){
                Game.policedead();
            }else{
                Game.policegothint(hint -1);
            }
        }
    }
});
