"use strict"

app.component("mathe", {
    templateUrl: "components/mathe.html",
    conroller: "MatheController",
    bindings:{}
});

app.controller("MatheController", function ($log) {
    $log.debug("MatheController()");
});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "MatheKontakt",  // State-Name
        url: "/mathe",       // Fragmentbezeichner ohne '#!'
        component: "mathe"   // Komponenten-Name
    });
});