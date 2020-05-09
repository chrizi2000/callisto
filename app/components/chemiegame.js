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

    this.dead = () =>{

        ChemieGame.changecharacter('chemie_wütend');
    }

});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "Chemiegame",  // State-Name
        url: "/chemiegame",       // Fragmentbezeichner ohne '#!'
        component: "chemiegame"   // Komponenten-Name
    });
});