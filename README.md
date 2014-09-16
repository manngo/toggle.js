toggle.js
=========

Make selected element(s) togglable, if that’s
a real word.


Allows you to toggle one or more HTML elements.
This can be useful, for example to generate menus, tabs or accordions.

This will be incorporated in a more extensive Widgets collection (TBA), but, because of its usefulness, this simpler version will still be maintained.

Usage
-----

In JavaScript, invoke the following:

```js
toggle(selector,attribute,options);
```

In CSS, you can select a toggled element as follows:

```css
element[attribute] {
	…
}
```

In JavaScript, you can select a toggled element as follows:

```js
document.querySelector('element[attribute]')
document.querySelectorAll('element[attribute]')
```

or you can test on as follows:

```js
if(element.hasAttribute('attribute')) …
```


Parameters
----------

<dl>
	<dt><strong>element</strong></dt>
	<dd>HTML Element, such as from <code>document.getLementById()</code>.</dd>
	<dd>Can be a CSS style selector such as <code>'ul#menu>li'</code></dd>
	<dt><strong>attribute</strong></dt>
	<dd>Arbitrary name of an attribute.</dd>

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
	<dd>Whether selecting an element will de-select others.</dd>
	<dt>bubbleOK</dt>
	<dd>Whether nested inner elements can activate the toggle.</dd>
	<dt>callback</dt>
	<dd>A function which will be called on toggling.
		<dl>
			<dt>callbackOn</dt>
			<dd>Called only if item is toggled on. Called before callback, if any.</dd>
			<dt>callback</dt>
			<dd>Called if item is toggled on or off.</dd>
			<dt>callbackOff</dt>
			<dd>Called only if item is toggled off. Called after callback, if any.</dd>
		</dl>
	</dd>
</dl>

Sample
------

Click [Here](https://manngo.github.io/toggle.js/sample/sample.html) for the sample …