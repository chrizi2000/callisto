"use strict"

app.component("felix", {
    templateUrl: "components/felix/felix.html",
    controller: "FelixController",
    bindings:{}
});

app.controller("FelixController", function ($log, Game) {
    $log.debug("FelixController()");

    this.allowaccess = () =>{
        return Game.felixstatusconversation();
    }
    this.hintstatus = (index) =>{
        return Game.felixgethintstatus(index);
    }

    this.gametrigger = () =>{
        Game.felixstartgame();
        this.clicksound();
    }
    this.clicksound = () =>{
        Game.playAudioMenuClick();
    }


});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "FelixKontakt",  // State-Name
        url: "/felix",       // Fragmentbezeichner ohne '#!'
        component: "felix"   // Komponenten-Name
    });
});