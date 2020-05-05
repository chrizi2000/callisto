"use strict";

// Einziges Modul dieser App und seine Abhängigkeiten
let app = angular.module("Vorlage", [ "ngResource", "ngMessages", "ngLocale", "ngSanitize",
    "ngAnimate", "ngMaterial", "ui.router" ]);


// Einstellungen für Debugging
app.config(function($logProvider, $compileProvider, $mdAriaProvider, $qProvider) {
    $logProvider.debugEnabled(true);
    $compileProvider.debugInfoEnabled(true);
    $mdAriaProvider.disableWarnings();
    $qProvider.errorOnUnhandledRejections(false);
});


// Thema einstellen, mögliche Paletten sind:
// red, pink, purple, deep-purple, indigo, blue, light-blue, cyan, teal, green,
// light-green, lime, yellow, amber, orange, deep-orange, brown, grey, blue-grey
app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme("default")
        .primaryPalette("pink")
        .accentPalette("deep-orange");
});


// Datepicker auf AngularJS-Gebietsschema einstellen
app.config(function($localeProvider, $mdDateLocaleProvider) {
    let locale = $localeProvider.$get();

    moment.locale(locale.id);

    $mdDateLocaleProvider.months = moment.months();
    $mdDateLocaleProvider.shortMonths = moment.monthsShort();
    $mdDateLocaleProvider.days = moment.weekdays();
    $mdDateLocaleProvider.shortDays = moment.weekdaysShort();
    $mdDateLocaleProvider.firstDayOfWeek = locale.DATETIME_FORMATS.FIRSTDAYOFWEEK;

    $mdDateLocaleProvider.parseDate = function(dateString) {
        let m = moment(dateString, "L", locale.id);
        return m.isValid() ? m.toDate() : new Date(NaN);
    };

    $mdDateLocaleProvider.formatDate = function(date) {
        let m = moment(date);
        return m.isValid() ? m.format("L") : "";
    };

    $mdDateLocaleProvider.monthHeaderFormatter = function(date) {
        return `${moment.monthsShort()[date.getMonth()]}  ${date.getFullYear()}`;
    };

    $mdDateLocaleProvider.weekNumberFormatter = function(weekNumber) {
        return `Woche ${weekNumber}`;
    };

    $mdDateLocaleProvider.msgCalendar = "Kalender";
    $mdDateLocaleProvider.msgOpenCalendar = "Kalender öffnen";
});


// Data-URIs für Bilder, Audio und Video zulassen
app.config(function($compileProvider) {
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*((https?|ftp|file|blob):|data:(image|audio|video)\/)/);
});


// Workaround, um irreführende Fehlermeldungen von UI-Router zu unterdrücken
app.run(function($state, $trace, $uiRouter) {
    $trace.enable(1);

    let handler = $uiRouter.stateService.defaultErrorHandler();

    $state.defaultErrorHandler(function(error) {
        if (!error.detail || error.detail.message !== "Cannot read property 'call' of undefined") {
            handler(error);
        }
    });
});
