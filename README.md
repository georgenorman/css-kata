# CSS Kata

The practice questions incrementally apply CSS to the practice template, resulting in a fully functional page with the following features:

* A header and footer rendered via a CSS pattern.
* A simple corner ribbon.
* A generic link panel (side menu)
* An animated transition of the page content-area, as the menu tabs are selected.
* An animated transition of the tab menu, to beneath the header title, as the width of the browser window is resized below a certain threshold.
* A movie table that obtains scrollbars, as the browser window is resized smaller than the table.
* A footer that sticks to the browser window, until it reaches a particular height threshold, at which point it sticks to the bottom of the document.

## Goals

* Use semantic elements, to minimize divitis (overzealous use of divs and CSS used for styling). For example, using &lt;nav&gt; to represent a menu instead of &lt;div class="menu"&gt;.
* Prefer CSS classes for identification of generic elements (e.g., "side-menu" for generic left or right vertical menus, "tab-menu" for generic horizontal tab menus).
* Prefer IDs for explicit functionality (e.g., main navigation menu, home tab content section, movies content section).
* Minimize the use of JavaScript. This needs work.

**Caution: The solutions presented here are likely not the best. I plan to improve them as I learn.**

## Kata Demo

* [Raw Template - sans CSS](http://www.thruzero.com/kata-demos/css-kata/index.html?css=false)
* [Raw Template - with CSS](http://www.thruzero.com/kata-demos/css-kata/index.html)

## Kata

* [Corner Ribbon](#corner-ribbon)
* [Tab menu](#tab-menu)
  * [Generic Tab Menu](#generic-tab-menu)
  * [Custom Main Tab Menu](#custom-main-tab-menu)
* [Header and Footer](#header-and-footer)
  * [Custom Page Header](#custom-page-header)
  * [Custom Page Footer](#custom-page-footer)
* [Generic Tab Transitions](#generic-tab-transitions)
* [Custom Home Tab Content](#custom-home-tab-content)
  * [Generic Vertical Side Menu](#generic-vertical-side-menu)
  * [Generic Modal Dialog](#generic-modal-dialog)
  * [Arrange Home Tab Content](#arrange-home-tab-content)
* [Box tab](#box-tab)
* [Movies tab](#movies-tab)
  * [Generic Table Styling](#generic-table-styling)
  * [Custom Movies Table](#custom-movies-table)
* [Patterns](#patterns)
* [Responsive](#responsive)
  * [Main Tab Menu](#main-tab-menu)
  * [Footer](#footer)

## Corner Ribbon

Write the CSS to add a ribbon, using the `<div class="ribbon-box">` element in the practice template:

* The `ribbon-box` element should support a "left" or "right" position, placing the ribbon in either the top-left or top-right corner of the page.
* The `ribbon` element should support either a `red` or `green` color class, which provides the ribbon with a red or green background.
* Add a thin stripe to the top and bottom of the ribbon, using color #eee.
* Use `Gudea` for the font family.
* Ensure that the browser does not add a horizontal scrollbar.
* Ensure that elements beneath the ribbon's region, receive mouse events (e.g., any part of the tab menu covered by the ribbon, must receive hover as well as click events).

![Generic Top Corner Ribbon](https://github.com/georgenorman/css-kata/raw/master/doc/img/genericTopCornerRibbon.png)

See [generic/genericTopCornerRibbon.css](https://github.com/georgenorman/css-kata/blob/master/src/css/generic/genericTopCornerRibbon.css) for  current solution.

## Tab menu

### Generic Tab Menu

Write the CSS for a generic tab menu that can be used multiple times in the same page (targeting any element with the `tab-menu` class).

* Make sure the entire tab area is a click-target (not just the tab's anchor).
* Set the tab hover color to #EBAF3C.
* Set the active tab's text color to #555 and its background color to #fff.
* Give the first tab a round corner.

![Generic Tab Menu](https://github.com/georgenorman/css-kata/raw/master/doc/img/genericTabMenu.png)

See [generic/genericTabMenu.css](https://github.com/georgenorman/css-kata/blob/master/src/css/generic/genericTabMenu.css) for  current solution.

### Custom Main Tab Menu

Write the CSS to position the main tab menu at the top of the page (use element with `id="main-menu"`).

* Move the main tab menu to the top of the page and nudge it to the right, to make room for the header's Title.
* Make all header tabs the same width.

![Page Header Layout](https://github.com/georgenorman/css-kata/raw/master/doc/img/kata-specific_mainTabMenu.png)

See [kata-specific/mainTabMenu.css](https://github.com/georgenorman/css-kata/blob/master/src/css/kata-specific/mainTabMenu.css) for  current solution.

## Header and Footer

### Custom Page Header

* Push the main content down, slightly, away from the header.
* Add a header "icon" using a font (e.g., unicode "\2666") and set its color to #069459.

![Page Header Layout](https://github.com/georgenorman/css-kata/raw/master/doc/img/kata-specific_pageHeader.png)

See [kata-specific/pageHeader.css](https://github.com/georgenorman/css-kata/blob/master/src/css/kata-specific/pageHeader.css) for  current solution.

### Custom Page Footer

Attach the footer to the bottom of the window. Note: The current solution isn't implemented generically.

![Page Footer Layout](https://github.com/georgenorman/css-kata/raw/master/doc/img/kata-specific_pageFooter.png)

See [kata-specific/pageFooter.css](https://github.com/georgenorman/css-kata/blob/master/src/css/kata-specific/pageFooter.css) for  current solution.

## Generic Tab Transitions

Enable transitions between the tabs (Home, Box, Movies and About):

* Show the content of the currently active tab and perform a transition to the newly selected tab's content.

![Tab Content Transitions](https://github.com/georgenorman/css-kata/raw/master/doc/img/tabContentTransitions.png)

See [generic/genericContentTransitions.css](https://github.com/georgenorman/css-kata/blob/master/src/css/generic/genericContentTransitions.css) for  current solution.

## Custom Home Tab Content

### Generic Vertical Side Menu

Write the CSS for a generic vertical menu that can be used multiple times in the same page
(target any element using the '<nav class="side-menu">' element in the practice template):

* Use color #068894 for background.
* Use color #EBAF3C for highlight (on hover).
* Make sure the entire tab area is a click-target (not just the item's anchor).

![Generic Vertical Menu](https://github.com/georgenorman/css-kata/raw/master/doc/img/genericVerticalMenu.png)

See [generic/genericVerticalMenu.css](https://github.com/georgenorman/css-kata/blob/master/src/css/generic/genericVerticalMenu.css) for  current solution.

### Generic Modal Dialog

Write the CSS for a simple modal dialog, using the element with `id="alert"`, in the practice template.

![Modal Dialog](https://github.com/georgenorman/css-kata/raw/master/doc/img/modal-dialog.png)

See [generic/genericModalDialog.css](https://github.com/georgenorman/css-kata/blob/master/src/css/generic/genericModalDialog.css) for  current solution.

### Arrange Home Tab Content

Arrange the Home tab content: sidebar on left, loremIpsum on the right.

![Home Tab Content](https://github.com/georgenorman/css-kata/raw/master/doc/img/arrangeHomeContent.png)

See [kata-specific/homeTab.css](https://github.com/georgenorman/css-kata/blob/master/src/css/kata-specific/homeTab.css) for  current solution.

## Box tab

Simple box model example using nested boxes, all centered, with text vertically and horizontally centered.

![Box Model](https://github.com/georgenorman/css-kata/raw/master/doc/img/box-model.png)

See [kata-specific/boxTab.css](https://github.com/georgenorman/css-kata/blob/master/src/css/kata-specific/boxTab.css) for  current solution.

## Movies tab

### Generic Table Styling

Write the CSS to style any table with a class name of `simple-table` (see the `<div id="movies">` element in the practice template).
Don't add any non-generic CSS to the table (e.g., column alignment or table width - those would be specific to a particular table and are addressed by a later question).
Notice how the text of some columns will wrap if the browser width is made too small.

* Give the header a dark background with white (or light) text and vertical separators.
* Add zebra-stripes to the table body and add gray vertical separators to each cell.

![Generic Table](https://github.com/georgenorman/css-kata/raw/master/doc/img/genericTable.png)

See [generic/genericTable.css](https://github.com/georgenorman/css-kata/blob/master/src/css/generic/genericTable.css) for  current solution.

### Custom Movies Table

Write CSS to specifically style the table inside the `<div id="movies">` element in the practice template.
This CSS will only be appropriate to this table and can't be reused.

* Give the table a fixed width of 700px.
* Right-justify the 'Box Office' column.
* Center-justify the 'Rating' column.
* Add horizontal scrollbars to the table, for when the width of the browser becomes less than 480px (for phones), otherwise no scrollbars should be displayed.

![Custom Movies Table](https://github.com/georgenorman/css-kata/raw/master/doc/img/customMoviesTable.png)

See [kata-specific/moviesTab.css](https://github.com/georgenorman/css-kata/blob/master/src/css/kata-specific/moviesTab.css) for  current solution.

## Patterns

Write the CSS for a simple CSS pattern, as shown in the example below, targeting the `<header>` and `<footer>` elements from the practice template.

* Stagger the circles, as illustrated below.
* Color one set of circles #111 and the second set #222.
* Make the background color #333

![Simple Pattern](https://github.com/georgenorman/css-kata/raw/master/doc/img/simplePattern.png)

See [generic/genericPattern.css](https://github.com/georgenorman/css-kata/blob/master/src/css/generic/genericPattern.css) for  current solution.

## Responsive

### Main Tab Menu

* Move the main tab menu below the header title when the browser size is less than 539px (for small screens). Use a a quick transition (e.g., 0.35 seconds).

![Page Header Layout](https://github.com/georgenorman/css-kata/raw/master/doc/img/mainTabMenuRwd.png)

See [kata-specific/mainTabMenuRwd.css](https://github.com/georgenorman/css-kata/blob/master/src/css/kata-specific/mainTabMenuRwd.css) for  current solution.

### Footer

Attach the footer to the bottom of the *window*, when the browser is sized to 580px or more.
Attach it to the bottom of the *document*, when sized to more than 580px (to maximize the available content space on small screens).

![Page Footer Layout](https://github.com/georgenorman/css-kata/raw/master/doc/img/pageFooterRwd.png)

See [kata-specific/pageFooterRwd.css](https://github.com/georgenorman/css-kata/blob/master/src/css/kata-specific/pageFooterRwd.css) for  current solution.

