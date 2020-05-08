"use strict"

app.component("chemie", {
    templateUrl: "components/chemie.html",
    conroller: "ChemieController",
    bindings:{}
});

app.controller("ChemieController", function ($log) {
    $log.debug("ChemieController()");

    this.hintchemie = [false,false,false];
});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "ChemieKontakt",  // State-Name
        url: "/chemie",       // Fragmentbezeichner ohne '#!'
        component: "chemie"   // Komponenten-Name
    });
});