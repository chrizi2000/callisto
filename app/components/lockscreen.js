"use strict"

app.component("lockscreen", {
    templateUrl: "components/lockscreen.html",
    controller: "LockscreenController",
    bindings:{}
});

app.controller("LockscreenController", function ($log, $state, AccessKontakt, $timeout) {
    $log.debug("LockscreenController()");

    this.password = new Array(6);
    this.password = [2,3,0,3,0,1];
    this.aktpasswort = [];

    document.addEventListener("keydown",   (event) =>{
        if(event.key != "Meta" && event.key != "Shift" && event.key != "CapsLock" && event.key != "Tab" && event.key != "Control"){
            if(event.key === "Backspace"){
                this.clearoneletter();
            }else {
                this.zahleingegeben(Number(event.key));
            }
        }
        $timeout();
    });

    this.zahleingegeben = (pwnumber) => {
        AccessKontakt.playAudioclick();
        this.aktpasswort[this.aktpasswort.length] = pwnumber;
        console.log("akt passwort" , this.aktpasswort);
        console.log("passwort" , this.password);
        if(this.aktpasswort.length === this.password.length){
            if(angular.equals(this.aktpasswort, this.password)){
                AccessKontakt.allowbutton();
                $state.go("Kontakte");
            }else{
                AccessKontakt.playAudioaccessdenied();
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

});