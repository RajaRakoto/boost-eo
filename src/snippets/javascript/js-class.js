export const js_class = {
	'[class]: Create getter pattern': {
		prefix: 'bbeo-js-class-getter',
		body: ['get ${1:property_name} () { return this.${1:property_name}; }'],
		description: '[class]: Create getter pattern',
	},
	'[class]: Create setter pattern': {
		prefix: 'bbeo-js-class-setter',
		body: [
			'set ${1:property_name} (${2:value}) { this.${1:property_name} = ${2:value}; }',
		],
		description: '[class]: Create setter pattern',
	},
	'[class]: Create method pattern': {
		prefix: 'bbeo-js-class-method',
		body: ['${1:method_name} () { ${2:method_body} }'],
		description: '[class]: Create method pattern',
	},
	'[class]: Create constructor pattern': {
		prefix: 'bbeo-js-class-constructor',
		body: ['constructor () { ${1:constructor_body} }'],
		description: '[class]: Create constructor pattern',
	},
	'[class]: Create static method pattern': {
		prefix: 'bbeo-js-class-staticMethod',
		body: ['static ${1:method_name} () { ${2:method_body} }'],
		description: '[class]: Create static method pattern',
	},
	'[class]: Create static property pattern': {
		prefix: 'bbeo-js-class-staticProperty',
		body: ['static ${1:property_name} = ${2:property_value}'],
		description: '[class]: Create static property pattern',
	},
	'[class]: Create static getter pattern': {
		prefix: 'bbeo-js-class-staticGetter',
		body: [
			'static get ${1:property_name} () { return this.${1:property_name}; }',
		],
		description: '[class]: Create static getter pattern',
	},
	'[class]: Create static setter pattern': {
		prefix: 'bbeo-js-class-staticSetter',
		body: [
			'static set ${1:property_name} (${2:value}) { this.${1:property_name} = ${2:value}; }',
		],
		description: '[class]: Create static setter pattern',
	},
	'[class]: Generate class pattern': {
		prefix: 'bbeo-js-class-genClassPattern',
		body: [
			'class Circle extends Shape {',
			'  ',
			'  // constructor',
			'  constructor (radius) {',
			'    this.radius = radius',
			'  }',
			'  ',
			'  // methods',
			'   getArea () {',
			'    return Math.PI * 2 * this.radius',
			'  }',
			'  ',
			'  // superclass',
			'   expand (n) {',
			'    return super.expand(n) * Math.PI',
			'  }',
			'  ',
			'  //static method',
			'   static createFromDiameter(diameter) {',
			'    return new Circle(diameter / 2)',
			'  }',
			'}',
		],
		description: '[class]: Generate class pattern',
	},
};
