define([
    'jquery',
    'matchMedia',
    'stickyHeader'
], function ($) {
    'use strict';

    $.widget('HItchTest.theme', {

        options: {

        },
        _stickUpMenu: function() {
            mediaCheck({
                media: '(min-width: 768px)',
                // Switch to Desktop Version
                entry: function () {
                    if ($('.nav-sections').length) {
                        $('.nav-sections').stickUp({});
                    }
                },
                // Switch to Mobile Version
                exit: function () {
                    $('.nav-sections').stickUp({
                        disableOn:function(){
                            return false;
                        }
                    });
                }
            });
        },
        _matchHeightList: function() {
            if ($('.product-item .product-item-info').length) {
                setTimeout(function() {
                    $('.product-item .product-item-info').matchHeight({
                        property: 'min-height'
                    });
                }, 0);
            }


        },
        _scrollTopBanner: function() {
            var nameElementScroll = $('.product-wrap-test');
            var nameActiveClass = 'active';

            if ($(nameElementScroll).length) {

                mediaCheck({
                    media: '(min-width: 768px)',
                    // Switch to Desktop Version
                    entry: function () {
                        $(window).scroll(function () {
                            if ($(this).scrollTop() > $('.product-social-links').offset().top) {
                                $(nameElementScroll).addClass(nameActiveClass);
                            }
                            else {
                                $(nameElementScroll).removeClass(nameActiveClass);
                            }
                        }).trigger('scroll');
                        $('.box-tocart #qty').change(function () {
                            var price_top = $(this).val();
                            $('.product-wrap-test #qty').val(price_top);
                        });
                    },
                    // Switch to Mobile Version
                    exit: function () {

                    }
                });
            }
        },


        _create: function() {
            this._stickUpMenu();
            //this._matchHeightList();
            this._scrollTopBanner();
        }
    });

    return $.HItchTest.theme;

});