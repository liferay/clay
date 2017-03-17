'use strict';

import Component from 'metal-component';
import core from 'metal';

/**
 * Metal Quartz Button Base component.
 */
class MetalQuartzButtonBase extends Component {
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
MetalQuartzButtonBase.STATE = {
	/**
	 * The button disabled attribute.
	 * @instance
	 * @memberof MetalQuartzButtonBase
	 * @type {boolean}
	 * @default false
	 */
	disabled: {
		validator: core.isBoolean,
		value: false
	},

	/**
	 * The href attribute value of the link.
	 * @instance
	 * @memberof MetalQuartzButtonBase
	 * @type {string}
	 * @default ''
	 */
	href: {
		validator: core.isString,
		value: ''
	},

	/**
	 * The label of the button or link content.
	 * @instance
	 * @memberof MetalQuartzButtonBase
	 * @type {string}
	 * @default ''
	 */
	label: {
		validator: core.isString,
		value: ''
	},

	/**
	 * The name attribute value of the element.
	 * @instance
	 * @memberof MetalQuartzButtonBase
	 * @type {string}
	 * @default ''
	 */
	name: {
		validator: core.isString,
		value: ''
	},

	/**
	 * The type attribute value of the element.
	 * @instance
	 * @memberof MetalQuartzButtonBase
	 * @type {string}
	 * @default ''
	 */
	type: {
		validator: core.isString,
		value: ''
	},

	/**
	 * The value attribute value of the element.
	 * @instance
	 * @memberof MetalQuartzButtonBase
	 * @type {string}
	 * @default ''
	 */
	value: {
		validator: core.isString,
		value: ''
	}
};

export default MetalQuartzButtonBase;
