'use strict';

import Component from 'metal-component';
import {validators} from 'metal-state';

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
		validator: validators.bool,
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
		validator: validators.string,
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
		validator: validators.string,
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
		validator: validators.string,
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
		validator: validators.string,
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
		validator: validators.string,
		value: ''
	}
};

export default MetalQuartzButtonBase;
