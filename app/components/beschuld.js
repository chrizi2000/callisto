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

    this.beschuldige = (name) =>{
        Game.wurdebeschuldigt(name);
    }


});
