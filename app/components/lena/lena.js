"use strict"

app.component("lena", {
    templateUrl: "components/lena/lena.html",
    controller: "LenaController",
    bindings:{}
});

app.controller("LenaController", function ($log, Game) {
    $log.debug("LenaController()");

    this.allowaccess = (index) =>{
        return Game.lenastatusconversation(index);
    }
    this.hintstatus = (index) =>{
        return Game.lenagethintstatus(index);
    }

    this.gametrigger = () =>{
        Game.lenastartgame();
        this.clicksound();
    }
    this.clicksound = () =>{
        Game.playAudioMenuClick();
    }
});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "LenaKontakt",  // State-Name
        url: "/lena",       // Fragmentbezeichner ohne '#!'
        component: "lena"   // Komponenten-Name
    });
});