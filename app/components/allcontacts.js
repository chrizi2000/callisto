"use strict"

app.component("allcontacts", {
    templateUrl: "components/allcontacts.html",
    controller: "allcontactsController",
    bindings:{}
});

app.controller("allcontactsController", function ($log, Game) {
    $log.debug("allcontactsController()");

    this.clicksound = () =>{
        Game.playAudioMenuClick();
    }
});

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: "Kontakte",  // State-Name
        url: "/contact",
        component: "allcontacts"  // Komponenten-Name
    });
    $urlRouterProvider.otherwise("/lockscreen");
});