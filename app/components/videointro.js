"use strict"

app.component("videointro", {
    templateUrl: "components/videointro.html",
    controller: "VideointroController",
    bindings:{}
});

app.controller("VideointroController", function ($log, Video) {
    $log.debug("VideointroController()");


    this.showvideo = () =>{
        return Video.returnshowvideo();
    }

    this.videofinished = () =>{
        let video = document.getElementById("video");
        video.pause();

        Video.showgame();
    }
});