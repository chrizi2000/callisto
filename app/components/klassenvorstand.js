"use strict"

app.component("klassenvorstand", {
    templateUrl: "components/klassenvorstand.html",
    conroller: "KlassenvorstandvController",
    bindings:{}
});

app.controller("KlassenvorstandController", function ($log) {
    $log.debug("KlassenvorstandController()");
});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "KlassenvorstandKontakt",  // State-Name
        url: "/Klassenvorstand",       // Fragmentbezeichner ohne '#!'
        component: "Klassenvorstand"   // Komponenten-Name
    });
});