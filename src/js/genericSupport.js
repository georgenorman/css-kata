/*
 ~ Copyright (c) 2013-2014 George Norman.
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ --------------------------------------------------------------
 ~ Generic support functions for CSS Kata (may be usable elsewhere).
 ~ --------------------------------------------------------------
 ~
 */

var genericSupportModule = (function() {
  "use strict";

  return {

    /*
     * Display the alert modal dialog.
     *
     * @param message - the message to display.
     * @returns false
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

    /*
     * Hide the alert modal dialog.
     *
     * @returns false
     */
    hideAlert: function() {
      var alertBox = document.getElementById("alert");

      alertBox.style.display = "none";

      return false;
    },

    /*
     * Main menu (using the <main> tag as the parent content section.
     * Shows a subsection of the <main> content section, based on the given menuItem, and updates
     * the menu to reflect the new selection.
     *
     * Call this via onclick, not href, so that when passing in the 'this' object, it's set to the element that was clicked.
     *
     * @param {type} menuItem - the menu item that was clicked (selected)
     * @returns false
     */
    handleMainMenuSelection: function(menuItem) {
      var mainContent = document.getElementsByTagName("main")[0];

      return this.handleMenuSelection(menuItem, mainContent);
    },

    handleMenuSelectionById: function(menuItem, parentContentSectionId) {
      var mainContent = document.getElementById(parentContentSectionId);

      return this.handleMenuSelection(menuItem, mainContent);
    },

    handleMenuSelection: function(menuItem, mainContent) {
      var i, mainSections, liElements, secId;

      // hide all content sub-sections
      mainSections = mainContent.getElementsByTagName("section"); // @-@:p0 is it possible to retrieve only immediate children?
      for (i = 0; i < mainSections.length; i++) {
        if (mainSections[i].parentNode === mainContent) {
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

    /*
     * Redirect to the Apple map page and display the area defined by the given lat lng points.
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
    }
  };

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

  function removeAllChildNodes( parentNode ) {
    while (parentNode.hasChildNodes()) {
      parentNode.removeChild( parentNode.lastChild );
    }
  }

  /**
   * Private method to set the style of an element.
   *
   * @param id of element
   * @param attrName name of style attribute to set
   * @param attrValue
   */
  function setStyleByElementId(id, attrName, attrValue) {
    document.getElementById(id).style[attrName] = attrValue;
  }

  /**
   * Private method to replace the CSS class of an element.
   */
  function setClassByElementId(id, classValue) {
    document.getElementById(id).setAttribute('class', classValue);
  }
}());
