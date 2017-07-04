'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';
import { validators } from 'metal-state';

import templates from './ClayIcon.soy.js';

/**
 * Implementation of the Metal Clay Icon.
 */
class ClayIcon extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayIcon.STATE = {
	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayIcon
	 * @type {?string}
	 * @default undefined
	 */
	spritemap: {
		validator: validators.string,
	},

	/**
	 * The name of the Clay SVG Icon e.g. `plus`.
	 * @instance
	 * @memberof ClayIcon
	 * @type {?string}
	 * @default undefined
	 */
	symbol: {
		validator: validators.string,
	},
};

Soy.register(ClayIcon, templates);

export { ClayIcon };
export default ClayIcon;
