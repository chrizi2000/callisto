"use strict"

app.component("felixchat", {
    templateUrl: "components/felixchat.html",
    controller: "FelixchatController",
    bindings:{}
});

app.controller("FelixchatController", function ($log) {
    $log.debug("FelixchatController()");

});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "FelixChat",  // State-Name
        url: "/felixchat",       // Fragmentbezeichner ohne '#!'
        component: "felixchat"   // Komponenten-Name
    });
});