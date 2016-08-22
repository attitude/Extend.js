if (!Element.prototype.addClass) {
    Element.prototype.addClass = function (c) {
        'use strict';

        var el = this;

        requestAnimationFrame(function () {
            el.className = (el.className.trim() + ' ' + c.trim()).split(' ').filter(function (s) { return s.trim(); }).unique().join(' ');
        });

        return this;
    };
}

if (!Element.prototype.removeClass) {
    Element.prototype.removeClass = function (c) {
        'use strict';

        var el = this;

        requestAnimationFrame(function () {
            el.className = el.className.replace(new RegExp('(^|\\b)' + c.split(' ').join('|') + '(\\b|$)', 'gi'), ' ').trim().split(' ').filter(function (s) { return s.trim(); }).unique().join(' ');
        });

        return this;
    };
}

if (!Element.prototype.setClass) {
    Element.prototype.setClass = function (c) {
        'use strict';

        var el = this;

        requestAnimationFrame(function () {
            el.className = c.split(' ').filter(function (s) { return s.trim(); }).unique().join(' ');
        });

        return this;
    };
}

if (!Element.prototype.addEventListeners) {
    Element.prototype.addEventListeners = function (s, fn) {
        'use strict';

        var el = this;

        s.split(' ').filter(function (v) { return v.length; }).map(function (e) {
            el.addEventListener(e, fn, false);
        });

        return el;
    };
}
