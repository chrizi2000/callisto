"use strict"

app.component("allcontacts", {
    templateUrl: "components/allcontacts.html",
    conroller: "allcontactsController",
    bindings:{}
});

app.controller("allcontactsController", function ($log) {
    $log.debug("allcontactsController()");
});