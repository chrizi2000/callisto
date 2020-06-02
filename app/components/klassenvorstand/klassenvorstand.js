"use strict"

app.component("klassenvorstand", {
    templateUrl: "components/klassenvorstand/klassenvorstand.html",
    controller: "KlassenvorstandController",
    bindings:{}
});

app.controller("KlassenvorstandController", function ($log, Game) {
    $log.debug("KlassenvorstandController()");
    this.allowaccess = (index) =>{
        return Game.klassenvorstandstatusconversation(index);
    }
    this.gethint = () =>{
        return Game.klassenvorstandgethintstatus();
    }
    this.gametrigger = () =>{
        Game.klassenvorstandstartgame();
        this.clicksound();
    }
    this.clicksound = () =>{
        Game.playAudioMenuClick();
    }
});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "KlassenvorstandKontakt",  // State-Name
        url: "/klassenvorstand",       // Fragmentbezeichner ohne '#!'
        component: "klassenvorstand"   // Komponenten-Name
    });
});