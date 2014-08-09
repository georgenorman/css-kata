/*
 ~ Copyright (c) 2013-2014 George Norman.
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~     http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * A module that contains generic support functions for CSS Kata, but may also be usable elsewhere.
 *
 * @module genericSupportModule
 */
var genericSupportModule = (function() {
  "use strict";

  // see http://alistapart.com/article/getoutbindingsituations
  var self; // can lose this (e.g., on event-registration/method-assignment; on event handling, where this is reassigned to active object; on etc).

  return {

    /**
     * Display the alert modal dialog.
     *
     * @param {string} message the message to display.
     * @returns {boolean} false.
     */
    showAlert: function(message) {
      var alertModalDialog = document.getElementById("alert");
      var alertBody = getFirstChildElementByTagName(alertModalDialog, "DIV");
      var alertMessageArea = getFirstChildElementByTagName(alertBody, "P");

      removeAllChildNodes(alertMessageArea);
      alertMessageArea.insertAdjacentHTML("afterbegin", message);
      alertModalDialog.style.display = "block";

      return false;
    },

    /**
     * Hide the alert modal dialog.
     *
     * @returns {boolean} false.
     */
    hideAlert: function() {
      var alertBox = document.getElementById("alert");

      alertBox.style.display = "none";

      return false;
    },

    /**
     * Handle the <b>main</b> menu selection event (using the &lt;main&gt; tag as the parent content section).
     * Shows a subsection in the &lt;main&gt; content section, based on the given menuItem, and then updates
     * the menu to reflect the new selection (see handleMenuSelectionById).
     *
     * @returns {boolean} false.
     */
    handleMainMenuSelection: function() {
      var mainContent = document.getElementsByTagName("main")[0];

      return self.handleMenuSelection(this, mainContent);
    },

    /**
     * Handle a menu selection event, that hides and shows subsections of a parent content section, and updates
     * the menu to reflect the new selection.
     *
     * @param {object} menuItem the selected menu item.
     * @param {string} parentContentSectionId the ID of the parent that contains subsections to be shown or hidden, based on the menu selection.
     *
     * @returns {boolean}
     */
    handleMenuSelectionById: function(menuItem, parentContentSectionId) {
      var parentContentElement = document.getElementById(parentContentSectionId);

      return self.handleMenuSelection(menuItem, parentContentElement);
    },

    /**
     * Handle a menu selection event, that hides and shows subsections of a parent content section, and updates
     * the menu to reflect the new selection.
     *
     * @param {object} menuItem the selected menu item.
     * @param {string} parentContentElement the parent element that contains subsections to be shown or hidden, based on the menu selection.
     *
     * @returns {boolean} false
     */
    handleMenuSelection: function(menuItem, parentContentElement) {
      var i, mainSections, liElements, secId;

      // hide all content sub-sections
      mainSections = parentContentElement.getElementsByTagName("section"); // @-@:p0 is it possible to retrieve only immediate children?
      for (i = 0; i < mainSections.length; i++) {
        if (mainSections[i].parentNode === parentContentElement) {
          mainSections[i].setAttribute('class', "hidden-content");
        }
      }

      // show sub-section based on tab selection (CHEAT: Using label as ID)
      secId = menuItem.innerHTML;
      secId = secId.replace(/\s+/g, '');
      secId = secId.charAt(0).toLowerCase() + secId.slice(1);
      setClassByElementId(secId, "visible-content");

      // reset all menu selections
      liElements = menuItem.parentNode.parentNode.getElementsByTagName("li");
      for (i = 0; i < liElements.length; i++) {
        liElements[i].setAttribute('class', "");
      }

      // activate the newly selected menu tab
      menuItem.parentNode.setAttribute('class', "active");

      return false;
    },

    /**
     * Redirect to the Apple map page and display the area defined by the given lat lng points.
     *
     * @param {number} lat the Latitude to display
     * @param {number} lng the Longitude to display
     * @returns {undefined}
     */
    gotoMap: function(lat, lng) {
      // Options:
      //   q:   treated as if it had been typed into the query box by the user in the Maps app (an drops a pin)
      //   ll:  lat long points.
      //   sll: lat long points for a business search.
      //   t:   type of map to display.
      //   z:   zoom level.
      //
      // see: https://developer.apple.com/library/ios/featuredarticles/iPhoneURLScheme_Reference/Articles/MapLinks.html
      //
      document.location = "http://maps.apple.com/?hl=en&q="+lat+","+lng+"&t=m&z=17";
    },

    /**
     * Init function (basic module setup).
     */
    init: function() {
      self = this;
    }
  };

  // --------------------------------------------------------------
  // private functions
  // --------------------------------------------------------------

  /**
   * Return the first child element, from the given parentNode, that has the given tagName.
   *
   * @param {object} parentNode node to search for tag
   * @param {string} tagName name of tag/element to find
   * @returns {object} child element with given tagName
   */
  function getFirstChildElementByTagName( parentNode, tagName ) {
    var result = null;

    for (var i = 0; i < parentNode.children.length; ++i) {
      if (parentNode.children[i].nodeName === tagName.toUpperCase()) {
        result = parentNode.children[i];
        break;
      }
    }

    return result;
  }

  /**
   * Remove all child nodes from the given parentNode.
   *
   * @param {object} parentNode the node that is to have all child nodes removed.
   */
  function removeAllChildNodes( parentNode ) {
    while (parentNode.hasChildNodes()) {
      parentNode.removeChild( parentNode.lastChild );
    }
  }

  /**
   * Set the style of an element that has the given id.
   *
   * @param {string} id id of element to be styled
   * @param {string} attrName name of style attribute to set
   * @param {string} attrValue new attribute value to set
   */
  function setStyleByElementId(id, attrName, attrValue) {
    document.getElementById(id).style[attrName] = attrValue;
  }

  /**
   * Replace the CSS class of an element that has the given id.
   *
   * @param {string} id id of element
   * @param {string} classValue new CSS value to set
   */
  function setClassByElementId(id, classValue) {
    document.getElementById(id).setAttribute('class', classValue);
  }
}());
