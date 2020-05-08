"use strict"

app.component("klassenvorstand", {
    templateUrl: "components/klassenvorstand.html",
    conroller: "KlassenvorstandController",
    bindings:{}
});

app.controller("KlassenvorstandController", function ($log) {
    $log.debug("KlassenvorstandController()");

    this.hintklassenvorstand = [false,false,false];
});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "KlassenvorstandKontakt",  // State-Name
        url: "/klassenvorstand",       // Fragmentbezeichner ohne '#!'
        component: "klassenvorstand"   // Komponenten-Name
    });
});