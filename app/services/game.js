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

    this.reset = () =>{
        this.chemieseteverythingonfalse();
        this.klassenvorstandseteverythingonfalse();
    }


    //----------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------
    //-----CHEMIE-----------------------------------------------------------------------
    //----------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------



    let chemiecharacter = {
        "chemie_normal" : false,
        "chemie_verwundert" : false,
        "chemie_shocked" : false,
        "chemie_sauer" : false,
        "chemie_traurig" : false,
        "chemie_zwinker" : false
    };

    let chemiebubbles = {
        "1_1" : false,
        "1_2" : false,
        "2_1" : false,
        "2_2" : false,
        "3_1" : false,
        "4_0" : false,
        "4_0_1" : false,
        "3_2" : false,
        "death" : false,
        "death_2" : false};

    let chemiebuttons = {
        "buttons_1" : false,
        "buttons_2" : false,
        "buttons_3" : false,
        "buttons_4" : false,
        "buttons_5" : false,
        "buttons_death" : false,
        "buttons_goodbye" : false
    };


    let chemiehint = false;

    this.chemiegetstatuscharacter = (name) => {
        for (let k in chemiecharacter) {
            if (k === name) {
                return chemiecharacter[k];
            }
        }
    }

    this.chemiegethintstatus = () => {
        return chemiehint;
    }

    this.chemiegothint = () => {
        chemiehint = true;
    }


    this.chemiechangecharacter = (name) => {
        for (let k in chemiecharacter) {
            chemiecharacter[k] = false;
            if (k === name) {
                chemiecharacter[k] = true;
            }
        }
    }

    this.chemiegetstatusbubble = (name) => {
        for (let k in chemiebubbles) {
            if (k === name) {
                return chemiebubbles[k];
            }
        }
    }

    this.chemiechangebubble = (name) => {
        for (let k in chemiebubbles) {
            chemiebubbles[k] = false;
            if (k === name) {
                chemiebubbles[k] = true;
            }
        }
    }

    this.chemieresetbubble = () =>{
        for (let k in chemiebubbles) {
            chemiebubbles[k] = false;
        }
    }

    this.chemiegetstatusbutton = (name) => {
        for (let k in chemiebuttons) {
            if (k === name) {
                return chemiebuttons[k];
            }
        }
    }

    this.chemiechangebuttons = (name) => {
        if (name === "clear"){
            for (let k in chemiebuttons) {
                chemiebuttons[k] = false;
            }
        }else{
            for (let k in chemiebuttons) {
                chemiebuttons[k] = false;
                if (k === name) {
                    chemiebuttons[k] = true;
                }
            }
        }
    }


    this.chemiestartgame = () => {
        this.reset();
        this.changestatus("chemie");
        this.chemiechangecharacter("chemie_normal");
        this.chemiechangebuttons("buttons_1");
    }

    this.chemieseteverythingonfalse = () =>{
        for (let k in chemiecharacter) {
            chemiecharacter[k] = false;
        }
        this.chemieresetbubble();
        for (let k in chemiebuttons) {
            chemiebuttons[k] = false;
        }
    }

    //----------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------
    //-----KLASSENVORSTAND--------------------------------------------------------------
    //----------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------

    let klassenvorstandgame = {
        "klassenvorstand_normal" : false,
        "klassenvorstand_verwirrt" : false,
        "klassenvorstand_wuetend" : false,
        "klassenvorstand_gluecklich" : false,
        "klassenvorstand_traurig" : false,};

    let klassenvorstandbubbles = {
        "1_1" : false,
        "1_2" : false,
        "2_1" : false,
        "3_1" : false,
        "death" : false,
        "death_2" : false};

    let klassenvorstandbuttons = {
        "buttons_1" : false,
        "buttons_2" : false,
        "buttons_3" : false,
        "buttons_4" : false,
        "buttons_5" : false,
        "buttons_death" : false,
        "buttons_goodbye" : false
    };


    let klassenvorstandhint = false;

    this.klassenvorstandgetstatuscharacter = (name) => {
        for (let k in klassenvorstandgame) {
            if (k === name) {
                return klassenvorstandgame[k];
            }
        }
    }

    this.klassenvorstandgethintstatus = () => {
        return klassenvorstandhint;
    }

    this.klassenvorstandgothint = () => {
        klassenvorstandhint = true;
    }


    this.klassenvorstandchangecharacter = (name) => {
        for (let k in klassenvorstandgame) {
            klassenvorstandgame[k] = false;
            if (k === name) {
                klassenvorstandgame[k] = true;
            }
        }
    }

    this.klassenvorstandgetstatusbubble = (name) => {
        for (let k in klassenvorstandbubbles) {
            if (k === name) {
                return klassenvorstandbubbles[k];
            }
        }
    }

    this.klassenvorstandchangebubble = (name) => {
        for (let k in klassenvorstandbubbles) {
            klassenvorstandbubbles[k] = false;
            if (k === name) {
                klassenvorstandbubbles[k] = true;
            }
        }
    }

    this.klassenvorstandresetbubble = () =>{
        for (let k in klassenvorstandbubbles) {
            klassenvorstandbubbles[k] = false;
        }
    }

    this.klassenvorstandgetstatusbutton = (name) => {
        for (let k in buttons) {
            if (k === name) {
                return buttons[k];
            }
        }
    }

    this.klassenvorstandchangebuttons = (name) => {
        if (name === "clear"){
            for (let k in klassenvorstandbuttons) {
                klassenvorstandbuttons[k] = false;
            }
        }else{
            for (let k in klassenvorstandbuttons) {
                klassenvorstandbuttons[k] = false;
                if (k === name) {
                    klassenvorstandbuttons[k] = true;
                }
            }
        }
    }


    this.klassenvorstandstartgame = () => {
        this.reset();
        this.changestatus("klassenzimmer1");
        this.klassenvorstandchangecharacter("klassenvorstand_normal");
        this.klassenvorstandchangebuttons("buttons_1");
    }



    this.klassenvorstandseteverythingonfalse = () =>{
        for (let k in klassenvorstandgame) {
            klassenvorstandgame[k] = false;
        }
        this.klassenvorstandresetbubble();
        for (let k in klassenvorstandbuttons) {
            klassenvorstandbuttons[k] = false;
        }
    }




});