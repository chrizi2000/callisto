"use strict"

app.component("lockscreen", {
    templateUrl: "components/lockscreen.html",
    controller: "LockscreenController",
    bindings:{}
});

app.controller("LockscreenController", function ($log) {
    $log.debug("LockscreenController()");

    this.password = new Array(6);
    this.password = [2,3,0,3,0,1];
    this.aktpasswort = [];

    this.zahleingegeben = (pwnumber) => {
        this.aktpasswort[this.aktpasswort.length] = pwnumber;
        console.log(this.aktpasswort);

        if(this.aktpasswort.length === this.password.length){
            if(angular.equals(this.aktpasswort, this.password)){
                console.log("RICHTIG");
            }else{
                console.log("FALSCH")
                this.aktpasswort = [];
            }
        }
    }
    this.clear = () => {
        this.aktpasswort = [];
    }
    this.clearoneletter = () => {
        this.aktpasswort.pop();
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