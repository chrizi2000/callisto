"use strict"

app.component("lockscreen", {
    templateUrl: "components/lockscreen.html",
    conroller: "LockscreenController",
    bindings:{}
});

app.controller("LockscreenController", function ($log) {
    $log.debug("LockscreenController()");

    this.password = new Array(6);
    this.password = [2,3,0,3,0,1];


    this.aktpasswort = new Array(6);
    this.aktpassworteingabe = new Array(6);

    this.zahleingegeben = function (pwnumber) {
        let index = this.aktpasswort.findIndex(null);
        this.aktpasswort[index] = pwnumber;
        this.aktpassworteingabe[index] = true;
        console.log(this.aktpasswort[0]);
    }


});

app.config(function($stateProvider,$urlRouterProvider) {
    $stateProvider.state({
        name: "Lockscreen",  // State-Name
        url: "/lockscreen",       // Fragmentbezeichner ohne '#!'
        component: "lockscreen"   // Komponenten-Name
    });
    $urlRouterProvider.otherwise("/lockscreen");
});