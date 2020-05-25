"use strict"

app.component("allcontacts", {
    templateUrl: "components/allcontacts.html",
    controller: "allcontactsController",
    bindings:{}
});

app.controller("allcontactsController", function ($log) {
    $log.debug("allcontactsController()");
});

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: "Kontakte",  // State-Name
        url: "/contact",
        component: "allcontacts"  // Komponenten-Name
    });
    $urlRouterProvider.otherwise("/lockscreen");
});