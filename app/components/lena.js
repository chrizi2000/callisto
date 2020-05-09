"use strict"

app.component("lena", {
    templateUrl: "components/lena.html",
    controller: "LenaController",
    bindings:{}
});

app.controller("LenaController", function ($log, Game) {
    $log.debug("LenaController()");

    this.hintlena = [false,false,false];

    this.gametrigger = () =>{
        Game.startgamelena();
    }
});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "LenaKontakt",  // State-Name
        url: "/lena",       // Fragmentbezeichner ohne '#!'
        component: "lena"   // Komponenten-Name
    });
});