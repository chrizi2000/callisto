"use strict"

app.component("klassenvorstand", {
    templateUrl: "components/klassenvorstand.html",
    controller: "KlassenvorstandController",
    bindings:{}
});

app.controller("KlassenvorstandController", function ($log, Game) {
    $log.debug("KlassenvorstandController()");

    this.hintklassenvorstand = [false,false,false];

    this.gametrigger = () =>{
        Game.startgameklassenvorstand();
    }
});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "KlassenvorstandKontakt",  // State-Name
        url: "/klassenvorstand",       // Fragmentbezeichner ohne '#!'
        component: "klassenvorstand"   // Komponenten-Name
    });
});