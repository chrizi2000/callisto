"use strict"

app.component("felix", {
    templateUrl: "components/felix.html",
    conroller: "FelixController",
    bindings:{}
});

app.controller("FelixController", function ($log) {
    $log.debug("FelixController()");
this.hintfelix = () => {
    new Array(true,true,true)
}


});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "FelixKontakt",  // State-Name
        url: "/felix",       // Fragmentbezeichner ohne '#!'
        component: "felix"   // Komponenten-Name
    });
});