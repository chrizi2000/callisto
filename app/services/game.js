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
        // return access;
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
        this.matheseteverythingonfalse();
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
    let chemieaccess = true;

    this.chemiestatusconversation = () => {
        return chemieaccess;
    }

    this.chemiedead = () =>{
        chemieaccess = false;
    }

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
        "death" : false};

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

    let klassenvorstandaccess = true;

    this.klassenvorstandstatusconversation = () => {
        return klassenvorstandaccess;
    }

    this.klassenvorstanddead = () =>{
        klassenvorstandaccess = false;
    }

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
        for (let k in klassenvorstandbuttons) {
            if (k === name) {
                return klassenvorstandbuttons[k];
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

    //----------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------
    //-----Mathe-----------------------------------------------------------------------
    //----------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------



    let mathecharacter = {
        "mathe_normal" : false,
        "mathe_erschtaunt" : false,
        "mathe_wuetend" : false,
        "mathe_verwirrt" : false,
    };

    let mathebubbles = {
        "1_1" : false,
        "1_2" : false,
        "2_1" : false,
        "2_2" : false,
        "3_1" : false,
        "4_1" : false,
        "4_2" : false,
        "4_3" : false,
        "5_1" : false,
        "5_2" : false,
        "5_3" : false,
        "6_1" : false,
        "6_2" : false,
        "7_1" : false,
        "7_2" : false,
        "death_1" : false,
        "death_2" : false,
        "death_3" : false,
        "death_4" : false,
        "death_5" : false,
        "death_6" : false,
        "death_7" : false,
        "death_8" : false
    };

    let mathebuttons = {
        "buttons_1" : false,
        "buttons_2" : false,
        "buttons_3" : false,
        "buttons_4" : false,
        "buttons_5" : false,
        "buttons_6" : false,
        "buttons_7" : false,
        "buttons_8" : false,
        "buttons_9" : false,
        "buttons_10" : false,
        "buttons_11" : false,
        "buttons_12" : false,
        "buttons_13" : false,
        "buttons_14" : false,
        "buttons_15" : false,
        "buttons_death" : false,
        "buttons_goodbye" : false
    };


    let mathehint = [false,false];

    let matheaccess = true;

    this.mathestatusconversation = () => {
        return matheaccess;
    }

    this.mathedead = () =>{
        matheaccess = false;
    }
    this.mathegetstatuscharacter = (name) => {
        for (let k in mathecharacter) {
            if (k === name) {
                return mathecharacter[k];
            }
        }
    }

    this.mathegethintstatus = (index) => {
        return mathehint[index];
    }

    this.mathegothint = (index) => {
        mathehint[index] = true;
    }


    this.mathechangecharacter = (name) => {
        for (let k in mathecharacter) {
            mathecharacter[k] = false;
            if (k === name) {
                mathecharacter[k] = true;
            }
        }
    }

    this.mathegetstatusbubble = (name) => {
        for (let k in mathebubbles) {
            if (k === name) {
                return mathebubbles[k];
            }
        }
    }

    this.mathechangebubble = (name) => {
        for (let k in mathebubbles) {
            mathebubbles[k] = false;
            if (k === name) {
                mathebubbles[k] = true;
            }
        }
    }

    this.matheresetbubble = () =>{
        for (let k in mathebubbles) {
            mathebubbles[k] = false;
        }
    }

    this.mathegetstatusbutton = (name) => {
        for (let k in mathebuttons) {
            if (k === name) {
                return mathebuttons[k];
            }
        }
    }

    this.mathechangebuttons = (name) => {
        if (name === "clear"){
            for (let k in mathebuttons) {
                mathebuttons[k] = false;
            }
        }else{
            for (let k in mathebuttons) {
                mathebuttons[k] = false;
                if (k === name) {
                    mathebuttons[k] = true;
                }
            }
        }
    }


    this.mathestartgame = () => {
        this.reset();
        this.changestatus("klassenzimmer1");
        this.mathechangecharacter("mathe_normal");
        this.mathechangebuttons("buttons_1");
    }

    this.matheseteverythingonfalse = () =>{
        for (let k in mathecharacter) {
            mathecharacter[k] = false;
        }
        this.matheresetbubble();
        for (let k in mathebuttons) {
            mathebuttons[k] = false;
        }
    }

});