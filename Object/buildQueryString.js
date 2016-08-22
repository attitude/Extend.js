/*jslint browser: true */
if (!Object.prototype.buildQueryString) {
    Object.prototype.buildQueryString = function () {
        'use strict';

        var tree = [],
            isArray = Array.isArray || function (arr) {
                return Object.prototype.toString.call(arr) === '[object Array]';
            },
            buildQueryString = function (params) {
                var query = [],
                    key;

                if (isArray(params)) {
                    if (tree.length === 0) {
                        return null;
                    }

                    if (params.length === 0) {
                        if (tree.length > 1) {
                            query.push(tree[0] + '[' + tree.slice(1).join('][') + '][]=');
                        } else {
                            query.push(tree[0] + '[]=');
                        }
                    }

                    for (key in params) {
                        if (params.hasOwnProperty(key)) {
                            if (tree.length > 1) {
                                query.push(tree[0] + '[' + tree.slice(1).join('][') + '][]=' + params[key]);
                            } else {
                                query.push(tree[0] + '[]=' + params[key]);
                            }
                        }
                    }

                    return query.join('&');
                }

                if (typeof params !== 'object') {
                    return null;
                }

                for (key in params) {
                    if (params.hasOwnProperty(key)) {
                        if (isArray(params[key]) || typeof params[key] === 'object') {
                            tree.push(key);
                            query.push(buildQueryString(params[key]));
                            tree.splice(-1);
                        } else {
                            if (tree.length > 1) {
                                query.push(tree[0] + '[' + tree.slice(2).join('][') + '][' + key + ']=' + params[key]);
                            } else if (tree.length > 0) {
                                query.push(tree[0] + '[' + key + ']=' + params[key]);
                            } else {
                                query.push(key + '=' + params[key]);
                            }
                        }
                    }
                }

                return query.filter(function (v) { return !!v; }).join('&');
            };

        return buildQueryString(this);
    };
}
