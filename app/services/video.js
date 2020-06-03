app.service("Video", function() {

    let showvideo = true;

    this.returnshowvideo = () => {
        return showvideo;
    }

    this.showgame = () => {
        showvideo = false;
    }

});