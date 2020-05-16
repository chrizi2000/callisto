"use strict"

app.component("klassenvorstandgame", {
    templateUrl: "components/klassenvorstandgame.html",
    controller: "Klassenvorstandgame",
    bindings:{}
});

app.controller("Klassenvorstandgame", function ($log, Game) {
    $log.debug("Klassenvorstandgame()");

    this.statuscharacter = (name) => {
        return Game.klassenvorstandgetstatuscharacter(name);

    }

    this.statusbubble = (name) =>{
        return Game.klassenvorstandgetstatusbubble(name);
    }



    this.statusbuttons = (name) =>{
        return Game.klassenvorstandgetstatusbutton(name);
    }


    this.answerpressed = (answer, buttons, emotion, hint) =>{
        Klassenvorstandgame.klassenvorstandchangebuttons(buttons)
        Klassenvorstandgame.klassenvorstandchangebubble(answer);
        Klassenvorstandgame.klassenvorstandchangecharacter(emotion);
        if(hint){
            Klassenvorstandgame.klassenvorstandgothint();
        }
    }
});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "Klassenvorstandgame",  // State-Name
        url: "/klassenvorstandgame",       // Fragmentbezeichner ohne '#!'
        component: "klassenvorstandgame"   // Komponenten-Name
    });
});