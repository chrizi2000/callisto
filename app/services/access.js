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

    this.playAudioaccessdenied = () => {
        var audio = new Audio('sounds/access_denied.wav');
        audio.play();
    };
});