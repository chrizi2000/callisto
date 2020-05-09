"use strict"

app.component("vanessa", {
    templateUrl: "components/vanessa.html",
    controller: "VanessaController",
    bindings:{}
});

app.controller("VanessaController", function ($log, Game) {
    $log.debug("VanessaController()");

    this.hintvanessa = [false,false,false];

    this.gametrigger = () =>{
        Game.startgamevanessa();
    }
});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "VanessaKontakt",  // State-Name
        url: "/vanessa",       // Fragmentbezeichner ohne '#!'
        component: "vanessa"   // Komponenten-Name
    });
});