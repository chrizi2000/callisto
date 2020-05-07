"use strict"

app.component("lena", {
    templateUrl: "components/lena.html",
    conroller: "LenaController",
    bindings:{}
});

app.controller("LenaController", function ($log) {
    $log.debug("LenaController()");

    this.hintlena = [false,false,false];
});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "LenaKontakt",  // State-Name
        url: "/lena",       // Fragmentbezeichner ohne '#!'
        component: "lena"   // Komponenten-Name
    });
});