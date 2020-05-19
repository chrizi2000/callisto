"use strict";

app.component("mathegame", {
    templateUrl: "components/mathegame.html",
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
        Game.mathechangebuttons(buttons)
        Game.mathechangebubble(answer);
        Game.mathechangecharacter(emotion);
    }
});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "Mathegame",  // State-Name
        url: "/mathegame",       // Fragmentbezeichner ohne '#!'
        component: "mathegame"   // Komponenten-Name
    });
});