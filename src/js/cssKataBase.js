/*
 ~ Copyright (c) 2013-2014 George Norman.
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~     http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * A module that contains support functions specific to the CSS Kata.
 *
 * @module cssKataBaseModule
 */
var cssKataBaseModule = (function(genericSupport) {
  "use strict";

  return {

    /**
     * Display the name of the element that was clicked.
     *<p>
     * Call this via onclick, not href, so that when passing in the 'this' object, it's set to the element
     * that was clicked.
     *
     * @param {object} clickTarget - HTML element that was clicked
     * @returns {boolean}
     */
    showClickedMenu: function(clickTarget) {
      var menuItem = clickTarget.childNodes[0];
      genericSupport.showAlert("Menu was clicked - '" + menuItem.data + "' was selected.");

      return false;
    },

    /**
     * Register onclick events for the Main menu.
     *
     * @returns {undefined}
     */
    registerMainMenuEvents: function() {
      // find all anchor tags in the main-menu
      var elements = document.querySelectorAll("#main-menu a");
      for (var i=0; i<elements.length; i++) {
        // @-@:p0 TODO
      }
    },

    /**
     * Display star ratings. Non-optimal solution, but okay since the kata HTML is small.
     *
     * @returns {undefined}
     */
    handleStarRatings: function() {
      var eleIndex, eleClassName, matches;
      var starRatingPattern = /^stars-([0-9])-([0-9])$/i; // e.g., "stars-3-5"
      var elems = document.getElementsByTagName('i');

      // @-@:p0 not using "for (eleIndex in elems) {}" because it includes non <i> elements
      for (eleIndex = 0; eleIndex < elems.length; eleIndex++) {
        eleClassName = elems[eleIndex].getAttribute('data-rating');
        matches = eleClassName === null ? null : eleClassName.match(starRatingPattern);
        if (matches !== null) {
          elems[eleIndex].innerHTML = new Array(parseInt(matches[1]) + 1).join("&#9733;")
              + "<span style='color:#bbb'>"
              + new Array(parseInt(matches[2] - matches[1]) + 1).join("&#9734;") + "</span>";
          elems[eleIndex].setAttribute('style', "font-style:normal; color:gold;");
        }
      }
    },

    /**
     * Init handler for the CSS Kata application.
     *
     * @returns {undefined}
     */
    init: function() {
      this.handleStarRatings();
      this.registerMainMenuEvents();
    }
  };
})(genericSupportModule);
