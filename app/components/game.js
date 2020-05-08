"use strict"

app.component("game", {
    templateUrl: "components/game.html",
    controller: "GameController",
    bindings:{
    }
});

app.controller("GameController", function ($log) {
    $log.debug("GameController()");

    this.gamebackground = {
    "default" : false,
    "chemie" : true,
    "felix" : false,
    "klassenvorstand" : false,
    "lena" : false,
    "mathe" : false,
    "vanessa" : false};

});
