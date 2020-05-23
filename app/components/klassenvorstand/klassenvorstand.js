"use strict"

app.component("klassenvorstand", {
    templateUrl: "components/klassenvorstand/klassenvorstand.html",
    controller: "KlassenvorstandController",
    bindings:{}
});

app.controller("KlassenvorstandController", function ($log, Game) {
    $log.debug("KlassenvorstandController()");

    this.gethint = () =>{
        return Game.klassenvorstandgethintstatus();
    }
    this.gametrigger = () =>{
        Game.klassenvorstandstartgame();
    }
});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "KlassenvorstandKontakt",  // State-Name
        url: "/klassenvorstand",       // Fragmentbezeichner ohne '#!'
        component: "klassenvorstand"   // Komponenten-Name
    });
});