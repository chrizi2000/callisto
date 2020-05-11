app.service("ChemieGame", function(Game) {

    let chemiecharacter = {
        "chemie_normal" : false,
        "chemie_verwundert" : false,
        "chemie_shocked" : false,
        "chemie_angry" : false};

    let chemiehint = false;

    this.getstatuscharacter = (name) => {
        for (let k in chemiecharacter) {
            if (k === name) {
                return chemiecharacter[k];
                console.log(chemiecharacter[k]);
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
        console.log(chemiecharacter)
    }

    this.startgamechemie = () => {
        Game.changestatus("chemie");
        this.changecharacter("chemie_normal");
    }
});