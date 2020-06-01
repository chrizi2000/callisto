"use strict"

app.component("klassenvorstandgame", {
    templateUrl: "components/klassenvorstand/klassenvorstandgame.html",
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
        Game.playAudioMenuClick();
        Game.klassenvorstandchangebuttons(buttons)
        Game.klassenvorstandchangebubble(answer);
        Game.klassenvorstandchangecharacter(emotion);
        if(hint){
            if(hint === "death"){
                Game.klassenvorstanddead();
            }else{
                Game.klassenvorstandgothint();
            }
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