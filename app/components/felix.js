"use strict"

app.component("felix", {
    templateUrl: "components/felix.html",
    controller: "FelixController",
    bindings:{}
});

app.controller("FelixController", function ($log, Game) {
    $log.debug("FelixController()");

    this.hintfelix = [false,false,false];
    this.gametrigger = () => {
        console.log("f");
    }
});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "FelixKontakt",  // State-Name
        url: "/felix",       // Fragmentbezeichner ohne '#!'
        component: "felix"   // Komponenten-Name
    });
});