"use strict"

app.component("klassenvorstandchat", {
    templateUrl: "components/klassenvorstandchat.html",
    conroller: "ChemiechatController",
    bindings:{}
});

app.controller("KlassenvorstandChatController", function ($log) {
    $log.debug("KlassenvorstandChatController()");

});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "KlassenvorstandChat",  // State-Name
        url: "/klassenvorstandchat",       // Fragmentbezeichner ohne '#!'
        component: "klassenvorstandchat"   // Komponenten-Name
    });
});