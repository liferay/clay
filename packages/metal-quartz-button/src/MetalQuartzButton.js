'use strict';

import MetalQuartzButtonBase from './MetalQuartzButtonBase';
import core from 'metal';
import Soy from 'metal-soy';

import 'metal-quartz-icon';

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
	 * The icon name required for the icons library.
	 * @instance
	 * @memberof MetalQuartzIcon
	 * @type {string}
	 * @default undefined
	 */
	icon: {
		validator: core.isString
	},

	/**
	 * The name that will make the CSS class name that will represent the 
	 * button size.
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
	 * The icons library that will be used for providing icons.
	 * @instance
	 * @memberof MetalQuartzButton
	 * @type {string}
	 * @default ''
	 */
	spritemap: {
		validator: core.isString
	},

	/**
	 * The css class that colors the button.
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
