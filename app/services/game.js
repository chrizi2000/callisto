app.service("Game", function() {

    let gamebackground = {
        "default" : true,
        "chemie" : false,
        "sportplatz" : false,
        "klassenzimmer1" : false,
        "klassenzimmer2" : false,
        "bibliothek" : false};

    let characters = {
        "felix" : false,
        "lena" : false,
        "vanessa" : false,
        "klassenvorstand" : false,
        "mathe" : false,
        "chemie_normal" : false};



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

    this.getstatuscharacter = (name) => {
        for (let k in characters) {
            if (k === name) {
                return characters[k];
            }
        }
    }

    this.changecharacter = (name) => {
        for (let k in characters) {
            characters[k] = false;
            if (k === name) {
                characters[k] = true;
            }
        }
    }

    this.startgamechemie = () => {
        this.changestatus("chemie");
        this.changecharacter("chemie_normal");
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