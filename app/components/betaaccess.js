"use strict"

app.component("betaaccess", {
    templateUrl: "components/betaaccess.html",
    controller: "betaaccessController",
    bindings:{}
});

app.controller("betaaccessController", function ($log, Game) {
    $log.debug("betaaccessController()");

    this.beta = "";
    this.errormessage = true;

    this.ifbetaaccess = () =>{
        return Game.betaaccess();
    };

    this.checkaccessbutton = () =>{
        Game.checkbetaacces(this.beta);
        if(Game.betaaccess() == false){
            this.errormessage = false;
        }
    }

});

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: "Betaaccess",  // State-Name
        url: "/Betaaccess",
        component: "Betaaccess"  // Komponenten-Name
    });
});