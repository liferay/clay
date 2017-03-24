'use strict';

import MetalQuartzButtonBase from './MetalQuartzButtonBase';
import Soy from 'metal-soy';
import {validators} from 'metal-state';

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
		validator: validators.bool,
		value: false
	},

	/**
	 * The icon name required for the icons library.
	 * @instance
	 * @memberof MetalQuartzIcon
	 * @type {?string}
	 * @default undefined
	 */
	icon: {
		validator: validators.string
	},

	/**
	 * The name that will make the CSS class name that will represent the
	 * button size.
	 * @instance
	 * @memberof MetalQuartzButton
	 * @type {?string}
	 * @default undefined
	 */
	size: {
		validator: validators.string
	},

	/**
	 * The svg spritemap that will be used for loading svg icons.
	 * @instance
	 * @memberof MetalQuartzButton
	 * @type {?string}
	 * @default undefined
	 */
	spritemap: {
		validator: validators.string
	},

	/**
	 * The css class that colors the button.
	 * @instance
	 * @memberof MetalQuartzButton
	 * @type {?string}
	 * @default 'default'
	 */
	style: {
		validator: validators.string,
		value: 'default'
	}
};

Soy.register(MetalQuartzButton, templates);

export default MetalQuartzButton;
