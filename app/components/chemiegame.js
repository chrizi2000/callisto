"use strict"

app.component("chemiegame", {
    templateUrl: "components/chemiegame.html",
    controller: "Chemiegame",
    bindings:{}
});

app.controller("Chemiegame", function ($log, ChemieGame) {
    $log.debug("Chemiegame()");

    this.statuscharacter = (name) => {
        return ChemieGame.getstatuscharacter(name);
    }

    this.statusbubble = (name) =>{
        return ChemieGame.getstatusbubble(name);
    }



    this.statusbuttons = (name) =>{
        return ChemieGame.getstatusbutton(name);
    }


    this.answerpressed = (answer, buttons, emotion, hint) =>{
        ChemieGame.changebuttons(buttons)
        ChemieGame.changebubble(answer);
        ChemieGame.changecharacter(emotion);
        if(hint){
           ChemieGame.gothint();
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