"use strict"

app.component("mathechat", {
    templateUrl: "components/mathechat.html",
    conroller: "ChemiechatController",
    bindings:{}
});

app.controller("MatheChatController", function ($log) {
    $log.debug("MatheChatController()");

});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "MatheChat",  // State-Name
        url: "/mathechat",       // Fragmentbezeichner ohne '#!'
        component: "mathechat"   // Komponenten-Name
    });
});