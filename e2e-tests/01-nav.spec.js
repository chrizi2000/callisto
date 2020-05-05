"use strict";

import { Selector } from "testcafe";


fixture("Vorlage")
    .page("http://localhost:63342/angularjs-vorlage/app/index.html");


test("wird geladen und hat die richtige Überschrift", async t => {
    await t
        .expect(Selector("md-content h1").innerText)
        .contains("AngularJS Material-Projekt");
});
