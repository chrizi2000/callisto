"use strict"

app.component("lena", {
    templateUrl: "components/lena.html",
    controller: "LenaController",
    bindings:{}
});

app.controller("LenaController", function ($log, Game) {
    $log.debug("LenaController()");

    this.allowaccess = () =>{
        return Game.lenastatusconversation();
    }
    this.hintstatus = (index) =>{
        return Game.lenagethintstatus(index);
    }

    this.gametrigger = () =>{
        Game.lenastartgame();
    }
});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "LenaKontakt",  // State-Name
        url: "/lena",       // Fragmentbezeichner ohne '#!'
        component: "lena"   // Komponenten-Name
    });
});