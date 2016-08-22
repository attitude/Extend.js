if (!Array.prototype.unique) {
    Array.prototype.unique = function () {
        'use strict';

        var u = {}, a = [];

        for (var i = 0, l = this.length; i < l; ++i){
            if (u.hasOwnProperty(this[i])) {
                continue;
            }

            a.push(this[i]);
            u[this[i]] = 1;
        }

        return a;
    }
}

if (!Array.prototype.indexOfObject) {
    Array.prototype.indexOfObject = function (opts) {
        'use strict';

        if (typeof opts === 'object') {
            indexes = this.map(function (o, index) {
                if (typeof o !== 'object') {
                    return null;
                }

                var prop;

                for (prop in opts) {
                    if (opts.hasOwnProperty(prop)) {
                        if (opts[prop] !== o[prop]) {
                            return null;
                        }
                    }
                }

                return index;
            }).filter(function (v) {
                return v !== null;
            });

            if (indexes.length >= 1) {
                return indexes[0];
            }
        }

        return -1;
    }
}
