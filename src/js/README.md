# JavaScript for the CSS Kata

The CSS kata project uses some JavaScript to help organize and present its exercises.
For example, the main menu uses JavaScript to manage which content is displayed when a tab is selected.

Most (or all) of this JavaScript can probably be replaced with pure CSS.
For example, **Chris Coyier** describes how to handle the tab menus using only CSS, in his article on
 [Functional CSS Tabs](http://css-tricks.com/functional-css-tabs-revisited/).
Using that technique, instead of JavaScript, is on the TODO list.

The JavaScript Modules:

* **[cssKataBaseModule](module-cssKataBaseModule.html)**: Contains support functions specific to CSS Kata and wouldn't be useful to any other project.
* **[genericSupportModule](module-genericSupportModule.html)**: Contains generic support functions that could also be useful to other projects.
