"use strict";

/**
 * Dieses Service zeigt eine AngularJS-Komponente als modalen Dialog an.
 *
 * Diese Komponente _muss_ folgendermaßen aufgebaut sein:
 * 
 * <md-dialog flex="...">
 *     <md-dialog-content>
 *         ....
 *     </md-dialog-content>
 *     <md-dialog-actions>
 *         ....
 *     </md-dialog-actions>
 * </md-dialog>
 *
 * Um den Dialog anzuzeigen, ruft man (in beliebigen anderen Komponenten)
 * DialogService.show(...) mit dem Namen der Komponente auf. Diese Methode
 * liefert ein Promise auf das Schließen des Dialogs und auf die Eingabedaten.
 *
 * Um den Dialog zu schließen und Eingabedaten zu übergeben, ruft man
 * in der Dialog-Komponente die Methode DialogService.submit(...) auf.
 *
 * Mit DialogService.cancel(), durch Klicken außerhalb des Dialogs oder mit
 * ESC wird der Dialog geschlossen, und das Promise wird zurückgewiesen.
 */
app.service("DialogService", function ($mdDialog, $injector, $log) {

    $log.debug("DialogService()");


    /**
     * Zeigt eine Komponente in einem modalen Dialog an und liefert
     * ein Promise auf das Schließen des Dialogs und auf die Eingabedaten.
     *
     * Den Dialog kann man mit DialogService.submit(...), mit DialogService.cancel(),
     * durch Klicken außerhalb des Dialogs oder mittels ESC-Taste schließen.
     *
     * Um das Standardverhalten des Dialogs abzuändern, kann man zusätzlich Optionen
     * übergeben, wie für $mdDialog.show() beschrieben.
     */
    this.show = (componentName, options) => {
        $log.debug("DialogService.show()", componentName, options);

        // Komponentenkonfiguration ermitteln
        let config;
        $injector.invoke([componentName + "Directive", function(configArray) {
            config = configArray[0];
        }]);

        // Änderbare Optionen überschreiben, falls angegeben
        options = Object.assign(
            {
                clickOutsideToClose: true,
            },
            options,
            {
                template: config.template,
                templateUrl: config.templateUrl,
                controller: config.controller,
                controllerAs: config.controllerAs,
            });

        return $mdDialog
            .show(options)
            .then(result => {
                $log.debug("DialogService.show() result", result);

                return result ? Promise.resolve(result.data) : Promise.reject();
            });
    };


    /**
     * Schließt den modalen Dialog und erfüllt das Promise von DialogService.show()
     * mit den angegebenen Daten.
     */
    this.submit = (result) => {
        $log.debug("DialogService.submit()", result);

        $mdDialog.hide({ data: result });
    };


    /**
     * Schließt den modalen Dialog und weist das Promise von DialogService.show()
     * zurück.
     */
    this.cancel = (result) => {
        $log.debug("DialogService.cancel()", result);

        $mdDialog.hide();
    };

});
