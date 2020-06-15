"use strict";

import { Selector } from "testcafe";


fixture("Callisto Tests")
    .page("http://localhost:63342/callisto/app/game.html");


test("Intro wird übersprungen", async t => {
    await t
        .click(Selector('#GameStartButton').withText('Spiel starten'))
        .pressKey('2')
        .pressKey('3')
        .pressKey('0')
        .pressKey('3')
        .pressKey('0')
        .pressKey('1')
});