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

  // see http://alistapart.com/article/getoutbindingsituations
  var self; // can lose this (e.g., on event-registration/method-assignment; on event handling, where this is reassigned to active object; on etc).

  return {
    /**
     * Display the name of the element that was clicked.
     * The <b><i>this</i></b> object refers to the element that was clicked.
     *
     * @returns {boolean} false
     */
    showClickedMenu: function() {
      var menuItem = this.childNodes[0];

      genericSupport.showAlert("Menu was clicked - '" + menuItem.data + "' was selected.");

      return false;
    },

    /**
     * Init handler for the CSS Kata application.
     * Registers all events (e.g., onclick event handlers for the main menu)
     * and renders the star ratings.
     *
     * @returns {undefined}
     */
    init: function() {
      self = this;

      genericSupportModule.init();

      handleStarRatings();

      registerMainMenuEvents();
      registerSidebarMenuEvents();
      registerDialogCloseBoxEvents();
    }
  };

  // --------------------------------------------------------------
  // private functions
  // --------------------------------------------------------------

  /**
   * Register onclick events for the Main menu.
   *
   * @returns {undefined}
   */
  function registerMainMenuEvents() {
    // find all anchor tags in the main-menu
    var elements = document.querySelectorAll("#main-menu a");
    for (var i=0; i<elements.length; i++) {
      elements[i].onclick = genericSupport.handleMainMenuSelection;
    }
  }

  /**
   * Register onclick events for all menus in the side-bar.
   *
   * @returns {undefined}
   */
  function registerSidebarMenuEvents() {
    // find all anchor tags in the sidebar
    var elements = document.querySelectorAll("#sidebar a");
    for (var i=0; i<elements.length; i++) {
      elements[i].onclick = self.showClickedMenu;
    }
  }

  /**
   * Register onclick events for the Dialog close box.
   *
   * @returns {undefined}
   */
  function registerDialogCloseBoxEvents() {
    // find all anchor tags in the dialog header
    var elements = document.querySelectorAll(".modal-overlay.dialog header a");
    for (var i=0; i<elements.length; i++) {
      elements[i].onclick = genericSupportModule.hideAlert;
    }
  }

  /**
   * Display star ratings. Non-optimal solution, but okay since the kata HTML is small.
   *
   * @returns {undefined}
   */
  function handleStarRatings() {
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

})(genericSupportModule);
