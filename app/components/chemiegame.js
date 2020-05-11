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


    this.dead = () =>{
        ChemieGame.changecharacter('chemie_wütend');
    }

    this.answerpressed = (answer, buttons) =>{
        ChemieGame.changebuttons(buttons)
        ChemieGame.changebubble(answer);

    }

});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "Chemiegame",  // State-Name
        url: "/chemiegame",       // Fragmentbezeichner ohne '#!'
        component: "chemiegame"   // Komponenten-Name
    });
});