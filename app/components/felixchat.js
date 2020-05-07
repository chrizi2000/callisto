"use strict"

app.component("felixchat", {
    templateUrl: "components/felixchat.html",
    conroller: "FelixController",
    bindings:{}
});

app.controller("FelixController", function ($log) {
    $log.debug("FelixController()");

});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "FelixChat",  // State-Name
        url: "/felixchat",       // Fragmentbezeichner ohne '#!'
        component: "felixchat"   // Komponenten-Name
    });
});