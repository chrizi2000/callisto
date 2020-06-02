"use strict"

app.component("chemie", {
    templateUrl: "components/chemie/chemie.html",
    controller: "ChemieController",
    bindings:{}
});

app.controller("ChemieController", function ($log, Game) {
    $log.debug("ChemieController()");
    this.allowaccess = (index) =>{
     return Game.chemiestatusconversation(index);
    }
    this.gethint = () =>{
        return Game.chemiegethintstatus();
    }
    this.gametrigger = () =>{
        this.clicksound();
        Game.chemiestartgame();
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