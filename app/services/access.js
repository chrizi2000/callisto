app.service("AccessKontakt", function() {
    let secret = false;
    this.access = () => {
        return secret;
    }
    this.allowbutton = () => {
        secret = true;
    }

    this.playAudioclick = () => {
        var audio = new Audio('sounds/click.wav');
        audio.play();
    };
});