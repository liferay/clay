'use strict';

import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';
import {validators} from 'metal-state';

import templates from './MetalQuartzIcon.soy.js';

/**
 * Implementation of the Metal Quartz Icon.
 */
class MetalQuartzIcon extends Component {
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
MetalQuartzIcon.STATE = {
	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof MetalQuartzIcon
	 * @type {?string}
	 * @default undefined
	 */
	spritemap: {
		validator: validators.string
	},

	/**
	 * The name of the Quartz SVG Icon e.g. `plus`.
	 * @instance
	 * @memberof MetalQuartzIcon
	 * @type {?string}
	 * @default undefined
	 */
	symbol: {
		validator: validators.string
	}
};

Soy.register(MetalQuartzIcon, templates);

export default MetalQuartzIcon;