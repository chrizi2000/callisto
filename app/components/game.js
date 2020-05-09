"use strict"

app.component("game", {
    templateUrl: "components/game.html",
    controller: "GameController",
    bindings:{}
});

app.controller("GameController", function ($log, Game) {
    $log.debug("GameController()");


    this.statusbackground = (name) => {
       return Game.getstatus(name);
    }


});
