"use strict"

app.component("handy", {
    templateUrl: "components/handy.html",
    conroller: "HandyController",
    bindings:{}
});

app.controller("HandyController", function ($log) {
    $log.debug("HandyController()");

});