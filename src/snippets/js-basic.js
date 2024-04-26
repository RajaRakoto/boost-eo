export const js_basic = {
	"[basic]: Swap 2 values ​​from 2 variables": {
		prefix: "bbeo-basic-permut",
		body: ["[${1:a},${2:b}] = [${2:b},${1:a}]"],
		description: "[basic]: Swap 2 values ​​from 2 variables",
	},
	"[basic]: Conditional statement": {
		prefix: "bbeo-basic-if",
		body: ["if (${1:condition}) {", "    ${2:body}", "}"],
		description: "[basic]: Conditional statement",
	},
	"[basic] Conditional statement 2": {
		prefix: "bbeo-basic-if2",
		body: [
			"if (${1:condition1}) {",
			"    ${3:body1}",
			"} else (${2:condition2}) {",
			"    ${4:body2}",
		],
		description: "[basic] Conditional statement 2",
	},
	"[basic] Conditional statement 3": {
		prefix: "bbeo-basic-if3",
		body: [
			"if (${1:condition1}) {",
			"    ${3:body1}",
			"} else if (${2:condition2}) {",
			"    ${4:body2}",
			"} else {",
			"    ${5:body3}",
			"}",
		],
		description: "[basic] Conditional statement 3",
	},
	"[basic] Ternary condition": {
		prefix: "bbeo-basic-ternary",
		body: ["${1:condition} ? ${2:expr1} : ${3:expr2}"],
		description: "[basic] Ternary condition",
	},
	"[basic] Ternary condition 2": {
		prefix: "bbeo-basic-ternary2",
		body: [
			"${1:condition} ? ${2:expr1} : ${3:condition2} ? ${4:expr2} : ${5:expr3}",
		],
		description: "[basic] Ternary condition 2",
	},
	"[basic]: Ternary condition 3": {
		prefix: "bbeo-basic-ternary3",
		body: [
			"${1:condition} ? ${2:expr1} : ${3:condition2} ? ${4:expr2} : ${5:condition3} ? ${6:expr3} : ${7:expr4}",
		],
		description: "[basic]: Ternary condition 3",
	},
	"[basic]: For loop": {
		prefix: "bbeo-basic-for",
		body: [
			"for (let ${1:index} = 0; ${1:index} < ${2:array_length}; ${1:index}++) {",
			"    ${3:body}",
			"}",
		],
		description: "[basic]: For loop",
	},
	"[basic]: For in loop": {
		prefix: "bbeo-basic-forIn",
		body: ["for (let ${1:e} in ${2:array}) {", "    ${3:body}", "}"],
		description: "[basic]: For in loop",
	},
	"[basic]: For of loop": {
		prefix: "bbeo-basic-forOf",
		body: ["for (let ${1:e} of ${2:array}) {", "    ${3:body}", "}"],
		description: "[basic]: For of loop",
	},
	"[basic]: For each loop": {
		prefix: "bbeo-basic-forEach",
		body: ["${2:array}.forEach((${1:e}) => {", "    ${3:body}", "});"],
		description: "[basic]: For each loop",
	},
	"[basic]: While loop": {
		prefix: "bbeo-basic-while",
		body: ["while (${1:condition}) {", "    ${2:body}", "}"],
		description: "[basic]: While loop",
	},
	"[basic]: Do while loop": {
		prefix: "bbeo-basic-doWhileLoop",
		body: ["do {", "    ${2:body}", "} while (${1:condition});"],
		description: "[basic]: Do while loop",
	},
	"[basic]: Switch statement": {
		prefix: "bbeo-basic-switch",
		body: [
			"switch (${1:condition}) {",
			"    case ${2:condition}:",
			"        ${3:body}",
			"        break;",
			"    default:",
			"        ${4:body}",
			"        break;",
			"}",
		],
		description: "[basic]: Switch statement",
	},
	"[basic]: Switch statement 2": {
		prefix: "bbeo-basic-switch2",
		body: [
			"switch (${1:condition}) {",
			"    case ${2:condition}:",
			"        ${4:body}",
			"        break;",
			"    case ${3:condition}:",
			"        ${5:body}",
			"        break;",
			"    default:",
			"        ${6:body}",
			"        break;",
			"}",
		],
		description: "[basic]: Switch statement 2",
	},
	"[basic]: Switch statement 3": {
		prefix: "bbeo-basic-switch3",
		body: [
			"switch (${1:condition}) {",
			"    case ${2:condition}:",
			"        ${5:body}",
			"        break;",
			"    case ${3:condition}:",
			"        ${6:body}",
			"        break;",
			"    case ${4:condition}:",
			"        ${7:body}",
			"        break;",
			"    default:",
			"        ${8:body}",
			"        break;",
			"}",
		],
	},
	"[basic]: Try catch statement": {
		prefix: "bbeo-basic-tryCatch",
		body: [
			"try {",
			"    ${1:body}",
			"} catch (${2:error}) {",
			"    ${3:body}",
			"}",
		],
		description: "[basic]: Try catch statement",
	},
	"[basic]: Try catch finally statement": {
		prefix: "bbeo-basic-tryCatchFinally",
		body: [
			"try {",
			"    ${1:body}",
			"} catch (${2:error}) {",
			"    ${3:body}",
			"} finally {",
			"    ${4:body}",
			"}",
		],
		description: "[basic]: Try catch finally statement",
	},
	"[basic]: Try catch finally statement with multiple catch blocks": {
		prefix: "bbeo-basic-tryMultipleCatchFinally",
		body: [
			"try {",
			"    ${1:body}",
			"} catch (${2:error}) {",
			"    ${3:body}",
			"} catch (${4:error}) {",
			"    ${5:body}",
			"} finally {",
			"    ${6:body}",
			"}",
		],
		description:
			"[basic]: Try catch finally statement with multiple catch blocks",
	},
	"[basic]: Throw an error": {
		prefix: "bbeo-basic-throw",
		body: ["throw new Error(${1:message})"],
		description: "[basic]: Throw an error",
	},
	"[basic]: Create setTimeout": {
		prefix: "bbeo-basic-setTimeout",
		body: ["setTimeout(() => {", "    ${1:body}", "}, ${2:delay})"],
		description: "[basic]: Create setTimeout",
	},
	"[basic]: Create setInterval": {
		prefix: "bbeo-basic-setInterval",
		body: ["setInterval(() => {", "    ${1:body}", "}, ${2:delay})"],
		description: "[basic]: Create setInterval",
	},
};
