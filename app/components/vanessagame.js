"use strict";

app.component("vanessagame", {
    templateUrl: "components/vanessagame.html",
    controller: "vanessagame",
    bindings:{}
});

app.controller("vanessagame", function ($log, Game) {
    $log.debug("vanessagame()");

    this.statuscharacter = (name) => {
        return Game.vanessagetstatuscharacter(name);
    }

    this.statusbubble = (name) =>{
        return Game.vanessagetstatusbubble(name);
    }



    this.statusbuttons = (name) =>{
        return Game.vanessagetstatusbutton(name);
    }


    this.answerpressed = (answer, buttons, emotion, hint) =>{
        Game.vanessachangebuttons(buttons);
        Game.vanessachangebubble(answer);
        Game.vanessachangecharacter(emotion);
        if(hint){
            if(hint === "death"){
                Game.vanessadead();
            }else{
                Game.vanessagothint(hint -1);
            }
        }
    }
});
