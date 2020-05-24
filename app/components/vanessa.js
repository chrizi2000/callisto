"use strict"

app.component("vanessa", {
    templateUrl: "components/vanessa.html",
    controller: "VanessaController",
    bindings:{}
});

app.controller("VanessaController", function ($log, Game) {
    $log.debug("VanessaController()");

    this.allowaccess = () =>{
        return Game.vanessastatusconversation();
    }
    this.hintstatus = (index) =>{
        return Game.vanessagethintstatus(index);
    }

    this.gametrigger = () =>{
        Game.vanessastartgame();
    }
});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "VanessaKontakt",  // State-Name
        url: "/vanessa",       // Fragmentbezeichner ohne '#!'
        component: "vanessa"   // Komponenten-Name
    });
});