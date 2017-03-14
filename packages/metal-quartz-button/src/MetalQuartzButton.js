'use strict';

import MetalQuartzButtonBase from './MetalQuartzButtonBase';
import core from 'metal';
import Soy from 'metal-soy';

import templates from './MetalQuartzButton.soy.js';

/**
 * Metal Quartz Button component.
 */
class MetalQuartzButton extends MetalQuartzButtonBase {
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
MetalQuartzButton.STATE = {
	/**
	 * Renders the button as a block element.
	 * @instance
	 * @memberof MetalQuartzButton
	 * @type {boolean}
	 * @default false
	 */
	block: {
		validator: core.isBoolean,
		value: false
	},

	/**
	 * The button size.
	 * @instance
	 * @memberof MetalQuartzButton
	 * @type {string}
	 * @default ''
	 */
	size: {
		validator: core.isString,
		value: ''
	},

	/**
	 * The button style.
	 * @instance
	 * @memberof MetalQuartzButton
	 * @type {string}
	 * @default 'default'
	 */
	style: {
		validator: core.isString,
		value: 'default'
	}
};

Soy.register(MetalQuartzButton, templates);

export default MetalQuartzButton;
