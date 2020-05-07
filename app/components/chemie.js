"use strict"

app.component("chemie", {
    templateUrl: "components/chemie.html",
    conroller: "ChemieController",
    bindings:{}
});

app.controller("ChemieController", function ($log) {
    $log.debug("ChemieController()");
});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "ChemieKontakt",  // State-Name
        url: "/chemie",       // Fragmentbezeichner ohne '#!'
        component: "chemie"   // Komponenten-Name
    });
});