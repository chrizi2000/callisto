"use strict";

app.component("police", {
    templateUrl: "components/police/police.html",
    controller: "police",
    bindings:{}
});

app.controller("police", function ($log, Game) {
    $log.debug("police()");

    this.statuscharacter = (name) => {
        return Game.policegetstatuscharacter(name);
    }

    this.statusbubble = (name) =>{
        return Game.policegetstatusbubble(name);
    }

});
