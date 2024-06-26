export const bbeo_dom = {
	"[dom]: Get element by id": {
		prefix: "bbeo-dom-id",
		body: ["document.getElementById(${1:id})"],
		description: "[dom]: Get element by id",
	},
	"[dom]: Get element by class": {
		prefix: "bbeo-dom-class",
		body: ["document.getElementsByClassName(${1:class})"],
		description: "[dom]: Get element by class",
	},
	"[dom]: Get element by tag": {
		prefix: "bbeo-dom-tag",
		body: ["document.getElementsByTagName(${1:tag})"],
		description: "[dom]: Get element by tag",
	},
	"[dom]: Get element by query": {
		prefix: "bbeo-dom-query",
		body: ["document.querySelector(${1:query})"],
		description: "[dom]: Get element by query",
	},
	"[dom]: Get element by query all": {
		prefix: "bbeo-dom-queryAll",
		body: ["document.querySelectorAll(${1:query})"],
		description: "[dom]: Get element by query all",
	},
	"[dom]: Get element by name": {
		prefix: "bbeo-dom-name",
		body: ["document.getElementsByName(${1:name})"],
		description: "[dom]: Get element by name",
	},
	"[dom]: Create html element of tag": {
		prefix: "bbeo-dom-createHTMLElement",
		body: ["document.createElement(${1:tag})"],
		description: "[dom]: Create html element of tag",
	},
	"[dom]: Create text node": {
		prefix: "bbeo-dom-createTextNode",
		body: ["document.createTextNode(${1:text})"],
		description: "[dom]: Create text node",
	},
	"[dom]: Get element by id and set innerHTML": {
		prefix: "bbeo-dom-id-innerHTML",
		body: ["document.getElementById(${1:id}).innerHTML = ${2:html}"],
		description: "[dom]: Get element by id and set innerHTML",
	},
	"[dom]: Get element by id and set textContent": {
		prefix: "bbeo-dom-id-textContent",
		body: ["document.getElementById(${1:id}).textContent = ${2:text}"],
		description: "[dom]: Get element by id and set textContent",
	},
	"[dom]: Get element by id and set value": {
		prefix: "bbeo-dom-id-value",
		body: ["document.getElementById(${1:id}).value = ${2:value}"],
		description: "[dom]: Get element by id and set value",
	},
	"[dom]: Get element by id and set attribute": {
		prefix: "bbeo-dom-id-attribute",
		body: [
			"document.getElementById(${1:id}).setAttribute(${2:attribute}, ${3:value})",
		],
		description: "[dom]: Get element by id and set attribute",
	},
	"[dom]: Get element by id and get attribute": {
		prefix: "bbeo-dom-id-getAttribute",
		body: ["document.getElementById(${1:id}).getAttribute(${2:attribute})"],
		description: "[dom]: Get element by id and get attribute",
	},
	"[dom]: Get element by id and remove attribute": {
		prefix: "bbeo-dom-id-removeAttribute",
		body: ["document.getElementById(${1:id}).removeAttribute(${2:attribute})"],
		description: "[dom]: Get element by id and remove attribute",
	},
	"[dom]: Get element by id and add class": {
		prefix: "bbeo-dom-id-addClass",
		body: ["document.getElementById(${1:id}).classList.add(${2:class})"],
		description: "[dom]: Get element by id and add class",
	},
	"[dom]: Get element by id and remove class": {
		prefix: "bbeo-dom-id-removeClass",
		body: ["document.getElementById(${1:id}).classList.remove(${2:class})"],
		description: "[dom]: Get element by id and remove class",
	},
	"[dom]: Get element by id and toggle class": {
		prefix: "bbeo-dom-id-toggleClass",
		body: ["document.getElementById(${1:id}).classList.toggle(${2:class})"],
		description: "[dom]: Get element by id and toggle class",
	},
	"[dom]: Get element by id and check class": {
		prefix: "bbeo-dom-id-hasClass",
		body: ["document.getElementById(${1:id}).classList.contains(${2:class})"],
		description: "[dom]: Get element by id and check class",
	},
	"[dom]: Get element by id and append child": {
		prefix: "bbeo-dom-id-appendChild",
		body: ["document.getElementById(${1:id}).appendChild(${2:child})"],
		description: "[dom]: Get element by id and append child",
	},
	"[dom]: Get element by id and remove child": {
		prefix: "bbeo-dom-id-removeChild",
		body: ["document.getElementById(${1:id}).removeChild(${2:child})"],
		description: "[dom]: Get element by id and remove child",
	},
	"[dom]: Get element by id and insert before": {
		prefix: "bbeo-dom-id-insertBefore",
		body: [
			"document.getElementById(${1:id}).insertBefore(${2:child}, ${3:reference})",
		],
		description: "[dom]: Get element by id and insert before",
	},
	"[dom]: Get element by id and insert after": {
		prefix: "bbeo-dom-id-insertAfter",
		body: [
			"document.getElementById(${1:id}).insertBefore(${2:child}, ${3:reference}.nextSibling)",
		],
		description: "[dom]: Get element by id and insert after",
	},
	"[dom]: Get element by id and replace child": {
		prefix: "bbeo-dom-id-replaceChild",
		body: [
			"document.getElementById(${1:id}).replaceChild(${2:child}, ${3:reference})",
		],
		description: "[dom]: Get element by id and replace child",
	},
	"[dom]: Get element by id and retrieve all child nodes": {
		prefix: "bbeo-dom-id-childNodes",
		body: ["document.getElementById(${1:id}).childNodes"],
		description: "[dom]: Get element by id and retrieve all child nodes",
	},
	"[dom]: Get element by id and retrieve first child node": {
		prefix: "bbeo-dom-id-firstChild",
		body: ["document.getElementById(${1:id}).firstChild"],
		description: "[dom]: Get element by id and retrieve first child node",
	},
	"[dom]: Get element by id and retrieve last child node": {
		prefix: "bbeo-dom-id-lastChild",
		body: ["document.getElementById(${1:id}).lastChild"],
		description: "[dom]: Get element by id and retrieve last child node",
	},
	"[dom]: Get element by id and retrieve parent node": {
		prefix: "bbeo-dom-id-parentNode",
		body: ["document.getElementById(${1:id}).parentNode"],
		description: "[dom]: Get element by id and retrieve parent node",
	},
	"[dom]: Get element by id and add event listener": {
		prefix: "bbeo-dom-id-addEventListener",
		body: [
			"document.getElementById(${1:id}).addEventListener(${2:click, 'keypress, scroll, mouseenter, mouseout, input, submit, load'}, ${3:callback})",
		],
		description: "[dom]: Get element by id and add event listener",
	},
	"[dom]: Get target value from event": {
		prefix: "bbeo-dom-eventTargetValue",
		body: ["${1:e}.target.value"],
		description: "[dom]: Get target value from event",
	},
	"[dom]: Get element by id and add event listener with prevent default": {
		prefix: "bbeo-dom-id-addEventListenerWithpreventDefault",
		body: [
			"document.getElementById(${1:id}).addEventListener(${2:'submit'}, ${3:e} => {",
			"    ${3:e}.preventDefault()",
			"})",
		],
		description:
			"[dom]: Get element by id and add event listener with prevent default",
	},
	"[dom]: Get element by id and add event listener with stop propagation": {
		prefix: "bbeo-dom-id-addEventListenerWithstopPropagation",
		body: [
			"document.getElementById(${1:id}).addEventListener(${2:click, 'keypress, scroll, mouseenter, mouseout, input, submit, load'}, ${3:e} => {",
			"    ${3:e}.stopPropagation()",
			"})",
		],
		description:
			"[dom]: Get element by id and add event listener with stop propagation",
	},
};
