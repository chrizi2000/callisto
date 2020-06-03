"use strict";

app.component("police", {
    templateUrl: "components/police/police.html",
    controller: "police",
    bindings:{}
});

app.controller("police", function ($log, Game) {
    $log.debug("police()");

    this.statuscharacter = (name) => {
        return Game.policegetstatuscharacter(name);
    }

    this.statusbubble = (name) =>{
        return Game.policegetstatusbubble(name);
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
