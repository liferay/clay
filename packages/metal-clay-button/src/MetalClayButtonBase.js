'use strict';

import Component from 'metal-component';
import {validators} from 'metal-state';

/**
 * Metal Clay Button Base component.
 */
class MetalClayButtonBase extends Component {
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
MetalClayButtonBase.STATE = {
	/**
	 * The button disabled attribute.
	 * @instance
	 * @memberof MetalClayButtonBase
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
	 * @memberof MetalClayButtonBase
	 * @type {?string}
	 * @default undefined
	 */
	href: {
		validator: validators.string
	},

	/**
	 * The label of the button or link content.
	 * @instance
	 * @memberof MetalClayButtonBase
	 * @type {?string}
	 * @default undefined
	 */
	label: {
		validator: validators.string
	},

	/**
	 * The name attribute value of the element.
	 * @instance
	 * @memberof MetalClayButtonBase
	 * @type {?string}
	 * @default undefined
	 */
	name: {
		validator: validators.string
	},

	/**
	 * The type attribute value of the element.
	 * @instance
	 * @memberof MetalClayButtonBase
	 * @type {?string}
	 * @default undefined
	 */
	type: {
		validator: validators.string
	},

	/**
	 * The value attribute value of the element.
	 * @instance
	 * @memberof MetalClayButtonBase
	 * @type {?string}
	 * @default undefined
	 */
	value: {
		validator: validators.string
	}
};

export default MetalClayButtonBase;
