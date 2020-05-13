"use strict"

app.component("chemie", {
    templateUrl: "components/chemie/chemie.html",
    controller: "ChemieController",
    bindings:{}
});

app.controller("ChemieController", function ($log, Game, ChemieGame) {
    $log.debug("ChemieController()");

    this.gethint = () =>{
        return ChemieGame.gethintstatus();
    }
    this.gametrigger = () =>{
        ChemieGame.startgamechemie();
    }
});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "ChemieKontakt",  // State-Name
        url: "/chemie",       // Fragmentbezeichner ohne '#!'
        component: "chemie"   // Komponenten-Name
    });
});