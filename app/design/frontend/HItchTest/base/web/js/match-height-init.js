define([
    'jquery',
    'matchHeight'
], function ($) {
    'use strict';

    $.widget('match.matchHeightInit', {

        options: {
            byRow: true,
            property: 'min-height',
            target: null,
            remove: false,
            sel:'.product-item-info'
        },
        _matchHeightItem: function () {
            $(this.options.sel).matchHeight({
                property: this.options.property
            });
        },
        _create: function () {
            this._matchHeightItem();
        }
    });

    return $.match.matchHeightInit;

});