toggle.js
=========

Make selected element(s) togglable, if that’s
a real word.


Allows you to toggle one or more HTML elements.
This can be useful, for example to generate menus, tabs or accordions.

Usage
-----

In JavaScript, invoke the following:

```js
toggle(selector,attribute,options);
```

In CSS, you can select a toggled element as follows{

```css
element[attribute] {
	…
}
```

Parameters
----------

<dl>
	<dt><strong>element</strong></dt>
	<dd>HTML Element, such as from <code>document.getLementById()</code>.</dd>
	<dd>Can be a CSS style selector such as <code>'ul#menu>li'</code></dd>
	<dt><strong>attribute</strong></dt>
	<dd>blah blah</dd>

	<dt><strong>options</strong></dt>
	<dd>An array of options. This is in the form of:</dd>
	<dd><pre>{
	only: false,
	bubbleOK: false,
	callback: undefined,	
}</pre></dd>
</dl>

Options
-------

The options object is, well, optional. If omitted, the values are as above.

If you want to set any options supply an object with any of the above properties.

<dl>
	<dt>only</dt>
	<dl>Whether selecting an element will de-select others.</dl>
	<dt>bubbleOK</dt>
	<dl>Whether nested inner elements can activate the toggle.</dl>
	<dt>callback</dt>
	<dl>A function which will be called on toggling.</dl>
</dl>

