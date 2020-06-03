"use strict"

app.component("beschuld", {
    templateUrl: "components/beschuld.html",
    controller: "BeschuldController",
    bindings:{}
});

app.controller("BeschuldController", function ($log, Game) {
    $log.debug("BeschuldController()");
    this.button = true;
    this.icons = false;
    this.pressed = () =>{
        this.button = false;
        this.icons = true;
    }
    this.undo = () =>{
        this.icons = false;
        this.button = true;
    }
    this.clicksound = () =>{
        Game.playAudioMenuClick();
    }

    this.beschuldigefelix = () =>{
        Game.wurdebeschuldigt();
        Game.policestartgamefelix();
    }

    this.beschuldigechemie = () =>{
        Game.wurdebeschuldigt();
        Game.policestartgamefelix();
    }

    this.beschuldigelena = () =>{
        Game.wurdebeschuldigt();
        Game.policestartgamefelix();
    }

    this.beschuldigevanessa = () =>{
        Game.wurdebeschuldigt();
        Game.policestartgamefelix();
    }

    this.beschuldigemathelehrer = () =>{
        Game.wurdebeschuldigt();
        Game.policestartgamefelix();
    }

    this.beschuldigeklassenvorstand = () =>{
        Game.wurdebeschuldigt();
        Game.policestartgamefelix();
    }

});
