"use strict"

app.component("mathe", {
    templateUrl: "components/mathe.html",
    controller: "MatheController",
    bindings:{}
});

app.controller("MatheController", function ($log, Game) {
    $log.debug("MatheController()");

    this.hintmathe = [false,false,false];

    this.gametrigger = () =>{
        Game.startgamemathe();
    }
});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "MatheKontakt",  // State-Name
        url: "/mathe",       // Fragmentbezeichner ohne '#!'
        component: "mathe"   // Komponenten-Name
    });
});