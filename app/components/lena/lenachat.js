"use strict"

app.component("lenachat", {
    templateUrl: "components/lena/lenachat.html",
    conroller: "LenachatController",
    bindings:{}
});

app.controller("LenachatController", function ($log) {
    $log.debug("LenachatController()");

});

app.config(function($stateProvider) {
    $stateProvider.state({
        name: "LenaChat",  // State-Name
        url: "/lenachat",       // Fragmentbezeichner ohne '#!'
        component: "lenachat"   // Komponenten-Name
    });
});