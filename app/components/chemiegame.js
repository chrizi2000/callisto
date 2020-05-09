"use strict"

app.component("chemiegame", {
    templateUrl: "components/chemiegame.html",
    conroller: "Chemiegame",
    bindings:{}
});

app.controller("Chemiegame", function ($log) {
    $log.debug("Chemiegame()");

});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "Chemiegame",  // State-Name
        url: "/chemiegame",       // Fragmentbezeichner ohne '#!'
        component: "chemiegame"   // Komponenten-Name
    });
});