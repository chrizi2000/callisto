"use strict";

/**
 * Enables passive event listeners for certain events, avoiding warnings in Chrome.
 * It basically will set { active: true } automatically every time such an event
 * listener is declared.
 *
 * Inspired by https://github.com/zzarcon/default-passive-events
 */
(function() {
    var supportsPassive = eventListenerOptionsSupported();

    if (supportsPassive) {
        var addEvent = EventTarget.prototype.addEventListener;
        overwriteAddEvent(addEvent);
    }

    function overwriteAddEvent(superMethod) {
        var defaultOptions = {
            passive: true,
            capture: false
        };

        EventTarget.prototype.addEventListener = function(type, listener, options) {
            // Modify only certain event types
            if ([ 'wheel', 'mousewheel', 'touchstart', 'touchmove' ].indexOf(type) >= 0) {
                var usesListenerOptions = typeof options === 'object';
                var useCapture = usesListenerOptions ? options.capture : options;

                options = usesListenerOptions ? options : {};
                options.passive = options.passive !== undefined ? options.passive : defaultOptions.passive;
                options.capture = useCapture !== undefined ? useCapture : defaultOptions.capture;
            }

            superMethod.call(this, type, listener, options);
        };
    }

    function eventListenerOptionsSupported() {
        var supported = false;
        try {
            var opts = Object.defineProperty({}, 'passive', {
                get: function() {
                    supported = true;
                }
            });
            window.addEventListener("test", null, opts);
        } catch (e) {}

        return supported;
    }
})();
