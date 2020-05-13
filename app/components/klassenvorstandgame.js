"use strict"

app.component("klassenvorstandgame", {
    templateUrl: "components/klassenvorstandgame.html",
    controller: "Klassenvorstandgame",
    bindings:{}
});

app.controller("Klassenvorstandgame", function ($log, Klassenvorstandgame) {
    $log.debug("Klassenvorstandgame()");

    this.statuscharacter = (name) => {
        return Klassenvorstandgame.getstatuscharacter(name);

    }

    this.statusbubble = (name) =>{
        return Klassenvorstandgame.getstatusbubble(name);
    }



    this.statusbuttons = (name) =>{
        return Klassenvorstandgame.getstatusbutton(name);
    }


    this.answerpressed = (answer, buttons, emotion, hint) =>{
        Klassenvorstandgame.changebuttons(buttons)
        Klassenvorstandgame.changebubble(answer);
        Klassenvorstandgame.changecharacter(emotion);
        if(hint){
            Klassenvorstandgame.gothint();
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