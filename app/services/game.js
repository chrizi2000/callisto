app.service("Game", function(AccessKontakt) {

    let gamebackground = {
        "default" : true,
        "chemie" : false,
        "sportplatz" : false,
        "klassenzimmer1" : false,
        "klassenzimmer2" : false,
        "bibliothek" : false,
        "verhorraum_chemie" : false,
        "verhorraum_felix" : false,
        "verhorraum_klassenvorstand" : false,
        "verhorraum_vanessa" : false,
        "verhorraum_mathelehrer" : false,
        "verhorraum_lena" : false,



    };

    this.returnaccesssmartphone = () =>{
        return AccessKontakt.access();
    }

    this.playAudiohint = () => {
        var audio = new Audio('sounds/hint.mp3');
        audio.play();
    };

    this.playAudiodead = () => {
        var audio = new Audio('sounds/death.mp3');
        audio.play();
    };

    this.playAudioMenuClick = () => {
        var audio = new Audio('sounds/menu_click.wav');
        audio.play();
    };

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

    let isbeschuldigt = false;
    let mordgelöst = false;
    this.jmdwurdebeschuldigt = () =>{
        return isbeschuldigt;
    }

    this.wurdebeschuldigt = () =>{
        isbeschuldigt = true;
        this.jmdwurdebeschuldigt();
    }

    this.returnmordstatus = () =>{
        return mordgelöst;
    }

    this.reset = () =>{
        this.chemieseteverythingonfalse();
        this.klassenvorstandseteverythingonfalse();
        this.matheseteverythingonfalse();
        this.felixseteverythingonfalse();
        this.lenaseteverythingonfalse();
        this.vanessaseteverythingonfalse();
        this.policeseteverythingonfalse();
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
    let chemieaccess = [true,false,false];

    this.chemiestatusconversation = (index) => {
        return chemieaccess[index];
    }

    this.changechemieaccess = (index) =>{
        chemieaccess[0] = false;
        chemieaccess[1] = false;
        chemieaccess[2] = false;
        chemieaccess[index] = true;
    }

    this.chemiedead = () =>{
        this.playAudiodead();
        this.changechemieaccess(1);
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
        this.playAudiohint();
        chemiehint = true;
        this.changechemieaccess(2);
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

    let klassenvorstandaccess = [true,false,false];

    this.klassenvorstandstatusconversation = (index) => {
        return klassenvorstandaccess[index];
    }

    this.changeklassenvorstandaccess = (index) =>{
        klassenvorstandaccess[0] = false;
        klassenvorstandaccess[1] = false;
        klassenvorstandaccess[2] = false;
        klassenvorstandaccess[index] = true;
    }

    this.klassenvorstanddead = () =>{
        this.playAudiodead();
        this.changeklassenvorstandaccess(1);
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
        this.playAudiohint();
        klassenvorstandhint = true;
        this.changeklassenvorstandaccess(2);
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

    let matheaccess = [true,false,false];

    this.mathestatusconversation = (index) => {
        return matheaccess[index];
    }

    this.changematheaccess = (index) =>{
        matheaccess[0] = false;
        matheaccess[1] = false;
        matheaccess[2] = false;
        matheaccess[index] = true;
    }

    this.mathedead = () =>{
        this.playAudiodead();
        this.changematheaccess(1);
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
        this.playAudiohint();
        mathehint[index] = true;
        if(mathehint[0] && mathehint[1]){
            this.changematheaccess(2);
        }
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
        this.changestatus("klassenzimmer2");
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


//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//-----FELIX------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------



let felixcharacter = {
    "felix_normal" : false,
    "felix_erstaunt" : false,
    "felix_wuetend" : false,
    "felix_verwirrt" : false,
    "felix_traurig" : false,
};

let felixbubbles = {
    "1_1" : false,
    "1_2" : false,
    "2_1" : false,
    "2_2" : false,
    "2_3" : false,
    "3_1" : false,
    "3_2" : false,
    "3_3" : false,
    "4_1" : false,
    "4_2" : false,
    "4_3" : false,
    "5_1" : false,
    "death_1" : false,
    "death_2" : false,
    "death_3" : false,
    "death_4" : false,
    "death_5" : false,
    "death_6" : false,
    "death_7" : false
};

let felixbuttons = {
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
    "buttons_12" : false
};


let felixhint = [false,false];

let felixaccess = [true,false,false];

    this.felixstatusconversation = (index) => {
        return felixaccess[index];
    }

    this.changefelixaccess = (index) =>{
        felixaccess[0] = false;
        felixaccess[1] = false;
        felixaccess[2] = false;
        felixaccess[index] = true;
    }

this.felixdead = () =>{
    this.playAudiodead();
    this.changefelixaccess(1);
}

this.felixgetstatuscharacter = (name) => {
    for (let k in felixcharacter) {
        if (k === name) {
            return felixcharacter[k];
        }
    }
}

this.felixgethintstatus = (index) => {
    return felixhint[index];
}

this.felixgothint = (index) => {
    this.playAudiohint();
    felixhint[index] = true;

    if(felixhint[0] && felixhint[1]){
        this.changefelixaccess(2);
    }
}


this.felixchangecharacter = (name) => {
    for (let k in felixcharacter) {
        felixcharacter[k] = false;
        if (k === name) {
            felixcharacter[k] = true;
        }
    }
}

this.felixgetstatusbubble = (name) => {
    for (let k in felixbubbles) {
        if (k === name) {
            return felixbubbles[k];
        }
    }
}

this.felixchangebubble = (name) => {
    for (let k in felixbubbles) {
        felixbubbles[k] = false;
        if (k === name) {
            felixbubbles[k] = true;
        }
    }
}

this.felixresetbubble = () =>{
    for (let k in felixbubbles) {
        felixbubbles[k] = false;
    }
}

this.felixgetstatusbutton = (name) => {
    for (let k in felixbuttons) {
        if (k === name) {
            return felixbuttons[k];
        }
    }
}

this.felixchangebuttons = (name) => {
    if (name === "clear"){
        for (let k in felixbuttons) {
            felixbuttons[k] = false;
        }
    }else{
        for (let k in felixbuttons) {
            felixbuttons[k] = false;
            if (k === name) {
                felixbuttons[k] = true;
            }
        }
    }
}


this.felixstartgame = () => {
    this.reset();
    this.changestatus("sportplatz");
    this.felixchangecharacter("felix_normal");
    this.felixchangebuttons("buttons_1");
}

this.felixseteverythingonfalse = () =>{
    for (let k in felixcharacter) {
        felixcharacter[k] = false;
    }
    this.felixresetbubble();
    for (let k in felixbuttons) {
        felixbuttons[k] = false;
    }
}


//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//-----LENA-------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------



    let lenacharacter = {
        "lena_normal" : false,
        "lena_erschtaunt" : false,
        "lena_wuetend" : false,
        "lena_verwirrt" : false,
        "lena-zwinkernd" : false,
    };

    let lenabubbles = {
        "1_1" : false,
        "1_2" : false,
        "2_1" : false,
        "2_2" : false,
        "2_3" : false,
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
        "7_3" : false,
        "8_1" : false,
        "9_1" : false,
        "10_1" : false,
        "11_1" : false,
        "11_2" : false,
        "12_1" : false,
        "12_2" : false,
        "death_1" : false,
        "death_2" : false,
        "death_3" : false,
        "death_4" : false,
        "death_5" : false,
        "death_6" : false,
        "death_7" : false,
        "death_8" : false,
        "death_9" : false,
        "death_10" : false
    };

    let lenabuttons = {
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
        "buttons_16" : false,
        "buttons_17" : false,
        "buttons_death" : false,
        "buttons_goodbye" : false
    };


    let lenahint = [false,false,false];

    let lenaaccess = [true,false,false];

    this.lenastatusconversation = (index) => {
        return lenaaccess[index];
    }

    this.changelenaaccess = (index) =>{
        lenaaccess[0] = false;
        lenaaccess[1] = false;
        lenaaccess[2] = false;
        lenaaccess[index] = true;
    }

    this.lenadead = () =>{
        this.playAudiodead();
        this.changelenaaccess(1);
    }
    this.lenagetstatuscharacter = (name) => {
        for (let k in lenacharacter) {
            if (k === name) {
                return lenacharacter[k];
            }
        }
    }

    this.lenagethintstatus = (index) => {
        return lenahint[index];
    }

    this.lenagothint = (index) => {
        this.playAudiohint();
        lenahint[index] = true;
        if(lenahint[0] && lenahint[1] && lenahint[2]){
            this.changelenaaccess(2);
        }

    }


    this.lenachangecharacter = (name) => {
        for (let k in lenacharacter) {
            lenacharacter[k] = false;
            if (k === name) {
                lenacharacter[k] = true;
            }
        }
    }

    this.lenagetstatusbubble = (name) => {
        for (let k in lenabubbles) {
            if (k === name) {
                return lenabubbles[k];
            }
        }
    }

    this.lenachangebubble = (name) => {
        for (let k in lenabubbles) {
            lenabubbles[k] = false;
            if (k === name) {
                lenabubbles[k] = true;
            }
        }
    }

    this.lenaresetbubble = () =>{
        for (let k in lenabubbles) {
            lenabubbles[k] = false;
        }
    }

    this.lenagetstatusbutton = (name) => {
        for (let k in lenabuttons) {
            if (k === name) {
                return lenabuttons[k];
            }
        }
    }

    this.lenachangebuttons = (name) => {
        if (name === "clear"){
            for (let k in lenabuttons) {
                lenabuttons[k] = false;
            }
        }else{
            for (let k in lenabuttons) {
                lenabuttons[k] = false;
                if (k === name) {
                    lenabuttons[k] = true;
                }
            }
        }
    }


    this.lenastartgame = () => {
        this.reset();
        this.changestatus("klassenzimmer1");
        this.lenachangecharacter("lena_normal");
        this.lenachangebuttons("buttons_1");
    }

    this.lenaseteverythingonfalse = () =>{
        for (let k in lenacharacter) {
            lenacharacter[k] = false;
        }
        this.lenaresetbubble();
        for (let k in lenabuttons) {
            lenabuttons[k] = false;
        }
    }



//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//-----vanessa----------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------



    let vanessacharacter = {
        "vanessa_normal" : false,
        "vanessa_gluecklich" : false,
        "vanessa_wuetend" : false,
        "vanessa_nachdenklich" : false,
    };

    let vanessabubbles = {
        "1_1" : false,
        "1_2" : false,
        "2_1" : false,
        "2_2" : false,
        "2_3" : false,
        "3_1" : false,
        "3_2" : false,
        "3_3" : false,
        "3_4" : false,
        "4_1" : false,
        "4_2" : false,
        "4_3" : false,
        "5_1" : false,
        "6_1" : false,
        "7_1" : false,
        "8_1" : false,
        "death_1" : false,
        "death_2" : false,
        "death_3" : false,
        "death_4" : false,
        "death_5" : false,
        "death_6" : false,
        "death_7" : false,
        "death_8" : false
    };

    let vanessabuttons = {
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


    let vanessahint = [false,false,false];

    let vanessaaccess = [true,false,false];

    this.vanessastatusconversation = (index) => {
        return vanessaaccess[index];
    }

    this.changevanessaaccess = (index) =>{
        vanessaaccess[0] = false;
        vanessaaccess[1] = false;
        vanessaaccess[2] = false;
        vanessaaccess[index] = true;
    }

    this.vanessadead = () =>{
        this.playAudiodead();
        this.changevanessaaccess(1);
    }
    this.vanessagetstatuscharacter = (name) => {
        for (let k in vanessacharacter) {
            if (k === name) {
                return vanessacharacter[k];
            }
        }
    }

    this.vanessagethintstatus = (index) => {
        return vanessahint[index];
    }

    this.vanessagothint = (index) => {
        this.playAudiohint();
        vanessahint[index] = true;
        if(vanessahint[0] && vanessahint[1] && vanessahint[2]){
            this.changevanessaaccess(2);
        }
    }


    this.vanessachangecharacter = (name) => {
        for (let k in vanessacharacter) {
            vanessacharacter[k] = false;
            if (k === name) {
                vanessacharacter[k] = true;
            }
        }
    }

    this.vanessagetstatusbubble = (name) => {
        for (let k in vanessabubbles) {
            if (k === name) {
                return vanessabubbles[k];
            }
        }
    }

    this.vanessachangebubble = (name) => {
        for (let k in vanessabubbles) {
            vanessabubbles[k] = false;
            if (k === name) {
                vanessabubbles[k] = true;
            }
        }
    }

    this.vanessaresetbubble = () =>{
        for (let k in vanessabubbles) {
            vanessabubbles[k] = false;
        }
    }

    this.vanessagetstatusbutton = (name) => {
        for (let k in vanessabuttons) {
            if (k === name) {
                return vanessabuttons[k];
            }
        }
    }

    this.vanessachangebuttons = (name) => {
        if (name === "clear"){
            for (let k in vanessabuttons) {
                vanessabuttons[k] = false;
            }
        }else{
            for (let k in vanessabuttons) {
                vanessabuttons[k] = false;
                if (k === name) {
                    vanessabuttons[k] = true;
                }
            }
        }
    }


    this.vanessastartgame = () => {
        this.reset();
        this.changestatus("bibliothek");
        this.vanessachangecharacter("vanessa_normal");
        this.vanessachangebuttons("buttons_1");
    }

    this.vanessaseteverythingonfalse = () =>{
        for (let k in vanessacharacter) {
            vanessacharacter[k] = false;
        }
        this.vanessaresetbubble();
        for (let k in vanessabuttons) {
            vanessabuttons[k] = false;
        }
    }


//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//-----police-----------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------



    let policecharacter = {
        "police_gluecklich" : false,
        "police_wuetend" : false
    };

    let policebubbles = {
        "chemie_ende" : false,
        "felix_ende" : false,
        "mathe_ende" : false,
        "vanessa_ende" : false,
        "lena_ende" : false,
        "klassenvorstand_ende" : false
    };


    this.policegetstatuscharacter = (name) => {
        for (let k in policecharacter) {
            if (k === name) {
                return policecharacter[k];
            }
        }
    }

    this.policechangecharacter = (name) => {
        for (let k in policecharacter) {
            policecharacter[k] = false;
            if (k === name) {
                policecharacter[k] = true;
            }
        }
    }

    this.policegetstatusbubble = (name) => {
        for (let k in policebubbles) {
            if (k === name) {
                return policebubbles[k];
            }
        }
    }

    this.policechangebubble = (name) => {
        for (let k in policebubbles) {
            policebubbles[k] = false;
            if (k === name) {
                policebubbles[k] = true;
            }
        }
    }

    this.policeresetbubble = () => {
        for (let k in policebubbles) {
            policebubbles[k] = false;
        }
    }



    this.policestartgamefelix = () => {
        this.reset();
        this.changestatus("verhorraum_felix");
        this.policechangecharacter("police_wuetend");
        this.policechangebubble("felix_ende");
    }

    this.policestartgameklassenvorstand = () => {
        this.reset();
        this.changestatus("verhorraum_klassenvorstand");
        this.policechangecharacter("police_wuetend");
        this.policechangebubble("klassenvorstand_ende");
    }

    this.policestartgamevanessa = () => {
        this.reset();
        this.changestatus("verhorraum_vanessa");
        this.policechangecharacter("police_wuetend");
        this.policechangebubble("vanessa_ende");
    }

    this.policestartgamechemie = () => {
        this.reset();
        this.changestatus("verhorraum_chemie");
        this.policechangecharacter("police_wuetend");
        this.policechangebubble("chemie_ende");
    }

    this.policestartgamemathe = () => {
        this.reset();
        this.changestatus("verhorraum_mathelehrer");
        this.policechangecharacter("police_wuetend");
        this.policechangebubble("mathe_ende");
    }

    this.policestartgamelena = () => {
        this.reset();
        this.changestatus("verhorraum_lena");
        this.policechangecharacter("police_gluecklich");
        this.policechangebubble("lena_ende");
    }

    this.policeseteverythingonfalse = () =>{
        for (let k in policecharacter) {
            policecharacter[k] = false;
        }
        this.policeresetbubble();
    }
});