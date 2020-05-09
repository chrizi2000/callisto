app.service("Game", function() {

    let gamebackground = {
        "default" : false,
        "chemie" : false,
        "sportplatz" : false,
        "klassenzimmer1" : false,
        "klassenzimmer2" : false,
        "bibliothek" : false};


    this.getstatus = (name) => {
        for (let k in gamebackground) {
            if (k === name) {
                return gamebackground[k];
            }
        }
    }

    this.changestatus = (name) => {
        for (let k in gamebackground) {
            gamebackground[k] = false;
            if (k === name) {
                gamebackground[k] = true;
            }
        }
    }

    this.startgamechemie = () => {
        this.changestatus("chemie");
    }

    this.startgamefelix = () => {
        this.changestatus("sportplatz");
    }

    this.startgamelena = () => {
        this.changestatus("klassenzimmer1");
    }

    this.startgamemathe = () => {
        this.changestatus("klassenzimmer2");
    }
    this.startgamevanessa = () => {
        this.changestatus("bibliothek");
    }
    this.startgameklassenvorstand = () => {
        this.changestatus("klassenzimmer1");
    }
});