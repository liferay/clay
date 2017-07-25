'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';
import { Config } from 'metal-state';

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
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayIcon
	 * @type {?string}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayIcon
	 * @type {?string}
	 * @default undefined
	 */
	spritemap: Config.string(),

	/**
	 * The name of the Clay SVG Icon e.g. `plus`.
	 * @instance
	 * @memberof ClayIcon
	 * @type {?string}
	 * @default undefined
	 */
	symbol: Config.string(),
};

Soy.register(ClayIcon, templates);

export { ClayIcon };
export default ClayIcon;
