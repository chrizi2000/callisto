"use strict"

app.component("chemiegame", {
    templateUrl: "components/chemie/chemiegame.html",
    controller: "Chemiegame",
    bindings:{}
});

app.controller("Chemiegame", function ($log, Game) {
    $log.debug("Chemiegame()");

    this.statuscharacter = (name) => {
        return Game.chemiegetstatuscharacter(name);
    }

    this.statusbubble = (name) =>{
        return Game.chemiegetstatusbubble(name);
    }



    this.statusbuttons = (name) =>{
        return Game.chemiegetstatusbutton(name);
    }


    this.answerpressed = (answer, buttons, emotion, hint) =>{
        Game.chemiechangebuttons(buttons)
        Game.chemiechangebubble(answer);
        Game.chemiechangecharacter(emotion);
        if(hint){
                if(hint === "death"){
                    Game.chemiedead();
                }else{
                    Game.chemiegothint();
                }
            }

        }

});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "Chemiegame",  // State-Name
        url: "/chemiegame",       // Fragmentbezeichner ohne '#!'
        component: "chemiegame"   // Komponenten-Name
    });
});