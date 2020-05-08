"use strict"

app.component("vanessa", {
    templateUrl: "components/vanessa.html",
    conroller: "VanessaController",
    bindings:{}
});

app.controller("VanessaController", function ($log) {
    $log.debug("VanessaController()");

    this.hintvanessa = [false,false,false];
});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "VanessaKontakt",  // State-Name
        url: "/vanessa",       // Fragmentbezeichner ohne '#!'
        component: "vanessa"   // Komponenten-Name
    });
});