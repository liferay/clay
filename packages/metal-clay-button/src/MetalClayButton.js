'use strict';

import MetalClayButtonBase from './MetalClayButtonBase';
import Soy from 'metal-soy';
import {validators} from 'metal-state';

import 'metal-clay-icon';

import templates from './MetalClayButton.soy.js';

/**
 * Metal Clay Button component.
 */
class MetalClayButton extends MetalClayButtonBase {
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
MetalClayButton.STATE = {
	/**
	 * Aria label attribute for the link element.
	 * @instance
	 * @memberof MetalClayButton
	 * @type {string}
	 * @default ''
	 */
	ariaLabel: {
		validator: validators.string
	},

	/**
	 * Renders the button as a block element.
	 * @instance
	 * @memberof MetalClayButton
	 * @type {boolean}
	 * @default false
	 */
	block: {
		validator: validators.bool,
		value: false
	},

	/**
	 * Render MetalClayIcon in the MetalClayButton element, available options are
	 * `elementClasses`, `spritemap`, `symbol`.
	 * @instance
	 * @memberof MetalClayButton
	 * @type {?Object}
	 * @default undefined
	 */
	icon: {
		validator: validators.object
	},

	/**
	 * The name that will make the CSS class name that will represent the
	 * button size.
	 * @instance
	 * @memberof MetalClayButton
	 * @type {?string}
	 * @default undefined
	 */
	size: {
		validator: validators.string
	},

	/**
	 * The css class that colors the button.
	 * @instance
	 * @memberof MetalClayButton
	 * @type {?string}
	 * @default 'default'
	 */
	style: {
		validator: validators.string,
		value: 'default'
	}
};

Soy.register(MetalClayButton, templates);

export default MetalClayButton;
