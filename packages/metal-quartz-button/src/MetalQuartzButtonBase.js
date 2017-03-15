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
	 * The link href.
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
	 * The button label.
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
	 * The button name.
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
	 * The button type.
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
	 * The button value.
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
