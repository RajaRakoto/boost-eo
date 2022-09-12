export const css_patterns = {
	"[pattern]: React -> Restitue une arborescence d'un objet ou d'un tableau JSON avec un contenu réductible":
		{
			prefix: 'bbeo-css-pattern-treeviewCSS',
			body: [
				'.tree-element {',
				'  margin: 0;',
				'  position: relative;',
				'}',
				'',
				'div.tree-element:before {',
				"  content: '';",
				'  position: absolute;',
				'  top: 24px;',
				'  left: 1px;',
				'  height: calc(100% - 48px);',
				'  border-left: 1px solid gray;',
				'}',
				'',
				'.toggler {',
				'  position: absolute;',
				'  top: 10px;',
				'  left: 0px;',
				'  width: 0; ',
				'  height: 0; ',
				'  border-top: 4px solid transparent;',
				'  border-bottom: 4px solid transparent;',
				'  border-left: 5px solid gray;',
				'  cursor: pointer;',
				'}',
				'',
				'.toggler.closed {',
				'  transform: rotate(90deg);',
				'}',
				'',
				'.collapsed {',
				'  display: none;',
				'}',
			],
			description:
				"[pattern]: Restitue une arborescence d'un objet ou d'un tableau JSON avec un contenu réductible",
		},
	'[pattern]: React -> Renders a tooltip component.': {
		prefix: 'bbeo-css-pattern-toolTipCSS',
		body: [
			'.tooltip {',
			'  position: relative;',
			'  background: rgba(0, 0, 0, 0.7);',
			'  color: white;',
			'  visibility: hidden;',
			'  padding: 5px;',
			'  border-radius: 5px;',
			'}',
			'.tooltip-arrow {',
			'  position: absolute;',
			'  top: 100%;',
			'  left: 50%;',
			'  border-width: 5px;',
			'  border-style: solid;',
			'  border-color: rgba(0, 0, 0, 0.7) transparent transparent;',
			'}',
		],
		description: '[pattern]: Renders a ticker component.',
	},
};
