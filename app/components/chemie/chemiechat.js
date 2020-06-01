"use strict"

app.component("chemiechat", {
    templateUrl: "components/chemie/chemiechat.html",
    controller: "ChemiechatController",
    bindings:{}
});

app.controller("ChemiechatController", function ($log) {
    $log.debug("ChemiechatController()");

});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "ChemieChat",  // State-Name
        url: "/chemiechat",       // Fragmentbezeichner ohne '#!'
        component: "chemiechat"   // Komponenten-Name
    });
});