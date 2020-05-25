"use strict"

app.component("mathe", {
    templateUrl: "components/mathe/mathe.html",
    controller: "MatheController",
    bindings:{}
});

app.controller("MatheController", function ($log, Game) {
    $log.debug("MatheController()");
    this.allowaccess = () =>{
        return Game.mathestatusconversation();
    }
    this.hintstatus = (index) =>{
        return Game.mathegethintstatus(index);
    }

    this.gametrigger = () =>{
        Game.mathestartgame();
    }
});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "MatheKontakt",  // State-Name
        url: "/mathe",       // Fragmentbezeichner ohne '#!'
        component: "mathe"   // Komponenten-Name
    });
});