"use strict";

app.component("mathegame", {
    templateUrl: "components/mathe/mathegame.html",
    controller: "mathegame",
    bindings:{}
});

app.controller("mathegame", function ($log, Game) {
    $log.debug("mathegame()");

    this.statuscharacter = (name) => {
        return Game.mathegetstatuscharacter(name);
    }

    this.statusbubble = (name) =>{
        return Game.mathegetstatusbubble(name);
    }



    this.statusbuttons = (name) =>{
        return Game.mathegetstatusbutton(name);
    }


    this.answerpressed = (answer, buttons, emotion, hint) =>{
        Game.playAudioMenuClick();
        Game.mathechangebuttons(buttons);
        Game.mathechangebubble(answer);
        Game.mathechangecharacter(emotion);
        if(hint){
            if(hint === "death"){
                Game.mathedead();
            }else{
                Game.mathegothint(hint -1);
            }
        }
    }
});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "Mathegame",  // State-Name
        url: "/mathegame",       // Fragmentbezeichner ohne '#!'
        component: "mathegame"   // Komponenten-Name
    });
});