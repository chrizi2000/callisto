"use strict"

app.component("game", {
    templateUrl: "components/game.html",
    conroller: "GameController",
    bindings:{}
});

app.controller("GameController", function ($log) {
    $log.debug("GameController()");

});
