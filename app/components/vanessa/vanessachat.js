"use strict"

app.component("vanessachat", {
    templateUrl: "components/vanessa/vanessachat.html",
    controller: "VanessaChatController",
    bindings:{}
});

app.controller("VanessaChatController", function ($log) {
    $log.debug("VanessaChatController()");

});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "VanessaChat",  // State-Name
        url: "/vanessachat",       // Fragmentbezeichner ohne '#!'
        component: "vanessachat"   // Komponenten-Name
    });
});