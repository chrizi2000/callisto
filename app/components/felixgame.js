"use strict";

app.component("felixgame", {
    templateUrl: "components/felixgame.html",
    controller: "felixgame",
    bindings:{}
});

app.controller("felixgame", function ($log, Game) {
    $log.debug("felixgame()");

    this.statuscharacter = (name) => {
        return Game.felixgetstatuscharacter(name);
    }

    this.statusbubble = (name) =>{
        return Game.felixgetstatusbubble(name);
    }



    this.statusbuttons = (name) =>{
        return Game.felixgetstatusbutton(name);
    }


    this.answerpressed = (answer, buttons, emotion, hint) =>{
        Game.felixchangebuttons(buttons);
        Game.felixchangebubble(answer);
        Game.felixchangecharacter(emotion);
        if(hint){
            if(hint === "death"){
                Game.felixdead();
            }else{
                Game.felixgothint(hint -1);
            }
        }
    }
});
