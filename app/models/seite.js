"use strict";

/**
 * Repräsentiert eine "page" von Entities, wie sie vom REST-API
 * geliefert wird.
 */
app.factory("Seite", function () {

    function Seite(konstruktor, data) {

        // Schreibgeschützte Properties und ihre Defaultwerte
        let properties = {
            page: {},
            entities: [],

            vorige: undefined,
            naechste: undefined,
            erste: undefined,
            letzte: undefined,
            istErste: undefined,
            istLetzte: undefined,
            erstesElement: undefined,
            letztesElement: undefined,
        };

        // Daten den Properties zuweisen
        Object.assign(this, properties, data);

        // Anonyme Objekte in Entities umwandeln
        this.entities = data[konstruktor.path]
            .map(obj => new konstruktor(obj));

        // Unerwünschte Properties entfernen
        delete this[konstruktor.path];

        // Hilfsvariable erzeugen
        this.laufendeNr = Math.min(this.page.number + 1, this.page.totalPages);
        this.vorige = this.page.number - 1;
        this.naechste = this.page.number + 1;
        this.erste = 0;
        this.letzte = this.page.totalPages-1;

        this.istErste = this.page.number <= this.erste;
        this.istLetzte = this.page.number >= this.letzte;

        this.erstesElement = Math.min( this.page.size * this.page.number + 1, this.page.totalElements);
        this.letztesElement = Math.min(this.page.size * this.page.number + this.page.size, this.page.totalElements);

        // Properties schreibschützen
        Object.keys(properties).forEach(k => Object.defineProperty(this, k, {writable: false}));
    }

    return Seite;
});
