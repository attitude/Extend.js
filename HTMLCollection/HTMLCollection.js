if (!HTMLCollection.prototype.addEventListener) {
    HTMLCollection.prototype.addEventListener = function(e, fn) {
        'use strict';
        var i;

        for (i = 0; i < this.length; i += 1) {
            this[i].addEventListener(e, fn, false);
        }

        return this;
    };
}

if (!HTMLCollection.prototype.addEventListeners) {
    HTMLCollection.prototype.addEventListeners = function(s, fn) {
        'use strict';
        var i;

        for (i = 0; i < this.length; i += 1) {
            this[i].addEventListeners(s, fn, false);
        }

        return this;
    }
}
