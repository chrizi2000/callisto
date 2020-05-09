app.service("Game", function() {

    let gamebackground = {
        "default" : false,
        "chemie" : false,
        "sportplatz" : false,
        "klasenzimmer1" : false,
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
        this.changestatus("felix");
    }

    this.startgamelena = () => {
        this.changestatus("lena");
    }

    this.startgamemathe = () => {
        this.changestatus("mathe");
    }
    this.startgamevanessa = () => {
        this.changestatus("vanessa");
    }
});