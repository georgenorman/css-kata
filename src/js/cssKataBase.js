/*
 ~ Copyright (c) 2013-2014 George Norman.
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ --------------------------------------------------------------
 ~ Support functions specific to the CSS Kata.
 ~ --------------------------------------------------------------
 ~
 */

var cssKataBaseModule = (function(genericSupport) {
  "use strict";

  return {

    /*
     * Display the name of the element that was clicked.
     *
     * Call this via onclick, not href, so that when passing in the 'this' object, it's set to the element
     * that was clicked.
     *
     * @param {type} clickTarget - HTML element that was clicked
     * @returns false
     */
    showClickedMenu: function(clickTarget) {
      var menuItem = clickTarget.childNodes[0];
      genericSupport.showAlert("Menu was clicked - '" + menuItem.data + "' was selected.");

      return false;
    },

    /* Display star ratings. Non-optimal solution, but okay since the kata HTML is small. */
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
    }
  };
})(genericSupportModule);
