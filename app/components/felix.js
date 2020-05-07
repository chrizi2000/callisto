"use strict"

app.component("felix", {
    templateUrl: "components/felix.html",
    conroller: "FelixController",
    bindings:{}
});

app.controller("FelixController", function ($log) {
    $log.debug("FelixController()");
});