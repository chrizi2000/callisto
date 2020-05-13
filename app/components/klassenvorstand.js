"use strict"

app.component("klassenvorstand", {
    templateUrl: "components/klassenvorstand.html",
    controller: "KlassenvorstandController",
    bindings:{}
});

app.controller("KlassenvorstandController", function ($log, Klassenvorstandgame) {
    $log.debug("KlassenvorstandController()");

    this.gethint = () =>{
        return Klassenvorstandgame.gethintstatus();
    }
    this.gametrigger = () =>{
        Klassenvorstandgame.startgameklassenvorstand();
    }
});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "KlassenvorstandKontakt",  // State-Name
        url: "/klassenvorstand",       // Fragmentbezeichner ohne '#!'
        component: "klassenvorstand"   // Komponenten-Name
    });
});