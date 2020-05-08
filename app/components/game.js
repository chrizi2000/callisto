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
        "chemie" : false,
        "sportplatz" : true,
        "klasenzimmer1" : false,
        "klassenzimmer2" : false,
        "bibliothek" : false};


    this.getstatus = (name) => {
        for (let k in this.gamebackground) {
                if (k === name) {
                    return this.gamebackground[k];
                }
            }
        }

    this.changestatus = (name) => {
        for (let k in this.gamebackground) {
            this.gamebackground[k] = false;
            if (k === name) {
               this.gamebackground[k] = true;
            }
        }
    }
});
