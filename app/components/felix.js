"use strict"

app.component("felix", {
    templateUrl: "components/felix.html",
    controller: "FelixController",
    bindings:{
        trigger: "&"
    }
});

app.controller("FelixController", function ($log) {
    $log.debug("FelixController()");

    this.test = true;
    this.hintfelix = [true,false,false];
});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "FelixKontakt",  // State-Name
        url: "/felix",       // Fragmentbezeichner ohne '#!'
        component: "felix"   // Komponenten-Name
    });
});