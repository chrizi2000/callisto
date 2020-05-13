app.service("Game", function() {

    let gamebackground = {
        "default" : true,
        "chemie" : false,
        "sportplatz" : false,
        "klassenzimmer1" : false,
        "klassenzimmer2" : false,
        "bibliothek" : false};

    let accesscodes = [
        "TB76-KS4N-FPRY-HZAN",
        "GMKE-FQ5Z-NM6K-8HV9",
        "TS8Y-TH4Q-VA64-7UMT",
        "EF4K-PV9K-YX7R-44Q5",
        "V6M4-5NJ7-GDG4-Q6X7",
        "MUC7-3FDR-5FC5-TFUC",
        "PTD6-RJW3-SFKN-M7HE",
        "X5QU-AX96-ZQ2C-M49T"];

    let access = false;



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

    this.betaaccess = () => {
        //return access;
        return true; //für auserkraftsetzung
    }

    this.checkbetaacces = (id) => {
            if(accesscodes.includes(id)) {
                access = true;
            }
        }
});