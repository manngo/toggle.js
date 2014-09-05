'use strict';


/*  toggle.js
	================================================
	
	Make selected element(s) togglable, if that’s
	a real word.

	usage:		toggle(selector,attribute,options);

				selector:	Element. Can be a CSS style seleector
				attribute:	name of attribute to toggle
				
				options
					only: false				whether this de-selects others
					bubbleOK: false			whether bubbled events acceppted
					callback: undefined		callback function

	================================================ */

		function toggle(selector,attribute,options) {
			options=options||{};
			var e,length;
			var current;
			var elements;

			elements=getElements(selector);
			for(e=0,length=elements.length; e<length ;e++) {
				elements[e].onclick = options.only ? radio : checkbox;
			}

			function getElements(selector) {
				var elements=[],i,nodes,type;
				//	HTML Element
					if(selector.nodeType) return [selector];

				//	HTMLCollection
					type=Object.prototype.toString.call(selector);
					if(type=='[object HTMLCollection]'||type=='[object NodeList]') return Array.prototype.slice.call(selector);

				//	CSS Selector
					return document.querySelectorAll(selector);
			}

			function checkbox() {
				/*jshint validthis:true */
				if(this.hasAttribute(attribute)) this.removeAttribute(attribute);
				else this.setAttribute(attribute,true);
				if(options.callback) options.callback.call(this);
			}

			function radio(event) {
				/*jshint validthis:true */
				event=event || window.event;
				var target=event.target;
				if(!options.bubbleOK && target!=this) return;	//	check for bubbled
				if(current) current.removeAttribute(attribute);
				if(current==this) current=null;
				else {
					current=this;
					current.setAttribute(attribute,true);
				}
				if(options.callback) options.callback.call(this);
			}

		}