"use strict"

app.component("chemie", {
    templateUrl: "components/chemie.html",
    controller: "ChemieController",
    bindings:{}
});

app.controller("ChemieController", function ($log, Game) {
    $log.debug("ChemieController()");

    this.hintchemie = [false,false,false];

    this.gametrigger = () =>{
        console.log("HI");
        Game.startgamechemie();
    }
});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "ChemieKontakt",  // State-Name
        url: "/chemie",       // Fragmentbezeichner ohne '#!'
        component: "chemie"   // Komponenten-Name
    });
});