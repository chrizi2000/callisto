"use strict";

app.component("Mathegame", {
    templateUrl: "components/mathegame.html",
    controller: "mathegame",
    bindings:{}
});

app.controller("Mathegame", function ($log, Game) {
    $log.debug("Mathegame()");

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
        Game.mathechangebuttons(buttons)
        Game.mathechangebubble(answer);
        Game.mathechangecharacter(emotion);
        if(hint){
            Game.klassenvorstandgothint();
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