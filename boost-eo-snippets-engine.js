import traverse from 'traverse';
import fs from 'fs';
import { header, footer } from './utils/docs.js';
import { js_console } from './src/javascript/js-console.js';
import { js_import } from './src/javascript/js-import.js';
import { py_basic } from './src/python/py-basic.js';
import { sh_basic } from './src/shellscript/sh-basic.js';

// table generator
function generateTable(data, language) {
	let languageSyntax = '';
	if (language == 'javascript') {
		languageSyntax = 'js';
	} else if (language == 'python') {
		languageSyntax = 'py';
	} else if (language == 'shellscript') {
		languageSyntax = 'sh';
	}
	let table = `
<table>
<th>prefix</th>
<th>body</th>
<th>description</th>
`;
	for (let i = 0; i < data[0].length; i++) {
		table += `
<tr>
<td>
<strong>${data[0][i]}</strong>
</td>
<td>

\`\`\`${languageSyntax}
${data[1][i]}
\`\`\`
</td>
<td>

>${data[2][i]}
</td>
</tr>
`;
	}
	table += `
</table>
`;
	return table;
}

// table getter
function getTable(distPath, language) {
	let prefixList = [];
	let bodyList = [];
	let descriptionList = [];

	traverse(JSON.parse(fs.readFileSync(distPath, 'utf8'))).forEach(function (e) {
		if (this.key == 'prefix') {
			prefixList.push(e);
		} else if (this.key == 'body') {
			bodyList.push(e);
		} else if (this.key == 'description') {
			descriptionList.push(e);
		}
	});

	return generateTable(
		[prefixList, bodyList.map(body => `${body.join('\n')}`), descriptionList],
		language,
	);
}

// snippets exportation
function exportSnippets(distPath, sourceList) {
	fs.writeFileSync(distPath, JSON.stringify(sourceList), 'utf8', err => {
		console.log(err ? err : 'The file was saved!');
	});
}

// object value checker
function checkObjectValue(object) {
	return Object.keys(object).length === 0;
}

// output getter
function getOutput(sourceList, distPath, snippetsTitle, language) {
	if (!checkObjectValue(sourceList)) {
		exportSnippets(distPath, sourceList);
		console.log(snippetsTitle);
		console.log(getTable(distPath, language));
	}
}

// source list refactoring
function refactorSourceList(sourceList) {
	let objRefactored = {};
	sourceList.forEach(source => {
		objRefactored = { ...objRefactored, ...source };
	});
	return objRefactored;
}

// source list data
const javascriptSourceList = refactorSourceList([js_console, js_import]);
const pythonSourceList = refactorSourceList([py_basic]);
const shellscriptSourceList = refactorSourceList([sh_basic]);

// output
console.log(header);
getOutput(
	javascriptSourceList,
	'./dist/boosteo-js.code-snippets',
	'#### ◾ Javascript snippets',
	'javascript',
);
getOutput(
	pythonSourceList,
	'./dist/boosteo-py.code-snippets',
	'#### ◾ Python snippets',
	'python',
);
getOutput(
	shellscriptSourceList,
	'./dist/boosteo-sh.code-snippets',
	'#### ◾ Shellscript snippets',
	'shellscript',
);
console.log(footer);
