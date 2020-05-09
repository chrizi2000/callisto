app.service("Game", function() {

    let gamebackground = {
        "default" : true,
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




});