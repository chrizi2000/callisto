"use strict"

app.component("end", {
    templateUrl: "components/end.html",
    controller: "endController",
    bindings:{}
});

app.controller("endController", function ($log, Game) {
    $log.debug("endController()");

    this.beschuldigtername = () =>{
        return Game.returnbeschuldigtername();
    }

    this.mordstatus = () =>{
        return Game.returnmordstatus();
    }

});

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: "End",  // State-Name
        url: "/end",
        component: "end"  // Komponenten-Name
    });
});