(function() {
  'use strict';
  angular.module('BB.Services').config(function($translateProvider) {
    'ngInject';
    var translations;
    translations = {
      PUBLIC_BOOKING: {
        ACCORDION_RANGE_GROUP: {
          AVAILABLE: '{SLOTS_NUMBER, plural, =0{no time} =1{1 time} other{{SLOTS_NUMBER} times}} available'
        }
      }
    };
    $translateProvider.translations('en', translations);
  });

}).call(this);
