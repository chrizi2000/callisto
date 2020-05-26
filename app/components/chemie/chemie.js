"use strict"

app.component("chemie", {
    templateUrl: "components/chemie/chemie.html",
    controller: "ChemieController",
    bindings:{}
});

app.controller("ChemieController", function ($log, Game) {
    $log.debug("ChemieController()");
    this.allowaccess = () =>{
     return Game.chemiestatusconversation();
    }
    this.gethint = () =>{
        return Game.chemiegethintstatus();
    }
    this.gametrigger = () =>{
        Game.chemiestartgame();
        this.clicksound();
    }
    this.clicksound = () =>{
        Game.playAudioMenuClick();
    }
});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "ChemieKontakt",  // State-Name
        url: "/chemie",       // Fragmentbezeichner ohne '#!'
        component: "chemie"   // Komponenten-Name
    });
});