"use strict"

app.component("handy", {
    templateUrl: "components/handy.html",
    controller: "HandyController",
    bindings:{}
});

app.controller("HandyController", function ($log, AccessKontakt, $state, Game) {
    $log.debug("HandyController()");


    this.HomebuttonAct = () => {
        if(AccessKontakt.access()){
            $state.go("Kontakte");
        }
    }

    this.clicksound = () =>{
        Game.playAudioMenuClick();
    }

});