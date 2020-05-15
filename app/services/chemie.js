app.service("ChemieGame", function(Game) {

    let chemiecharacter = {
        "chemie_normal" : false,
        "chemie_verwundert" : false,
        "chemie_shocked" : false,
        "chemie_sauer" : false,
        "chemie_traurig" : false,
        "chemie_zwinker" : false
    };

    let bubbles = {
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

    let buttons = {
        "buttons_1" : false,
        "buttons_2" : false,
        "buttons_3" : false,
        "buttons_4" : false,
        "buttons_5" : false,
        "buttons_death" : false,
        "buttons_goodbye" : false
    };


    let chemiehint = false;

    this.getstatuscharacter = (name) => {
        for (let k in chemiecharacter) {
            if (k === name) {
                return chemiecharacter[k];
            }
        }
    }

    this.gethintstatus = () => {
        return chemiehint;
    }

    this.gothint = () => {
        chemiehint = true;
    }


    this.changecharacter = (name) => {
        for (let k in chemiecharacter) {
            chemiecharacter[k] = false;
            if (k === name) {
                chemiecharacter[k] = true;
            }
        }
    }

    this.getstatusbubble = (name) => {
        for (let k in bubbles) {
            if (k === name) {
                return bubbles[k];
            }
        }
    }

    this.changebubble = (name) => {
        for (let k in bubbles) {
            bubbles[k] = false;
            if (k === name) {
                bubbles[k] = true;
            }
        }
    }

    this.resetbubble = () =>{
        for (let k in bubbles) {
            bubbles[k] = false;
        }
    }

    this.getstatusbutton = (name) => {
        for (let k in buttons) {
            if (k === name) {
                return buttons[k];
            }
        }
    }

    this.changebuttons = (name) => {
        if (name === "clear"){
            for (let k in buttons) {
                buttons[k] = false;
            }
        }else{
            for (let k in buttons) {
                buttons[k] = false;
                if (k === name) {
                    buttons[k] = true;
                }
            }
        }
    }

    this.seteverythingonfalse = () =>{
        for (let k in chemiecharacter) {
            chemiecharacter[k] = false;
            }
        this.resetbubble();
        for (let k in buttons) {
            buttons[k] = false;
        }
    }


    this.startgamechemie = () => {
        this.resetbubble();
        Game.changestatus("chemie");
        this.changecharacter("chemie_normal");
        this.changebuttons("buttons_1");
    }
});