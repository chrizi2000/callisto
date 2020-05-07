"use strict"

app.component("lena", {
    templateUrl: "components/lena.html",
    conroller: "LenaController",
    bindings:{}
});

app.controller("LenaController", function ($log) {
    $log.debug("LenaController()");
});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "LenaKontakt",  // State-Name
        url: "/lelix",       // Fragmentbezeichner ohne '#!'
        component: "lelix"   // Komponenten-Name
    });
});