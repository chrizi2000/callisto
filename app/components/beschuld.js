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
        Game.playAudioMenuClick();
        Game.wurdebeschuldigt();
        Game.policestartgamefelix();
    }

    this.beschuldigechemie = () =>{
        Game.playAudioMenuClick();
        Game.wurdebeschuldigt();
        Game.policestartgamechemie();
    }

    this.beschuldigelena = () =>{
        Game.playAudioMenuClick();
        Game.wurdebeschuldigt();
        Game.policestartgamelena();
    }

    this.beschuldigevanessa = () =>{
        Game.playAudioMenuClick();
        Game.wurdebeschuldigt();
        Game.policestartgamevanessa();
    }

    this.beschuldigemathelehrer = () =>{
        Game.playAudioMenuClick();
        Game.wurdebeschuldigt();
        Game.policestartgamemathe();
    }

    this.beschuldigeklassenvorstand = () =>{
        Game.playAudioMenuClick();
        Game.wurdebeschuldigt();
        Game.policestartgameklassenvorstand();
    }

});
