"use strict"

app.component("callisto", {
    templateUrl: "components/callisto.html",
    controller: "callistoController",
    bindings:{}
});

app.controller("callistoController", function ($log, Game, Video) {
    $log.debug("callistoController()");

    this.beschuldigt = () =>{
        return Game.jmdwurdebeschuldigt();
    }

    this.returnaccess = () => {
        return Game.returnaccesssmartphone();
    }

    this.showvideo = () =>{
        return Video.returnshowvideo();
    }


});

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: "Callisto",  // State-Name
        url: "/callisto",
        component: "callisto"  // Komponenten-Name
    });
});