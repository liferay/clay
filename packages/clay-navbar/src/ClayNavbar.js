'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';
import { Config } from 'metal-state';

import templates from './ClayNavbar.soy.js';

/**
 * Metal Clay Navbar component.
 */
class ClayNavbar extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayNavbar.STATE = {
	/**
	 * The display style attribute.
	 * @instance
	 * @memberof ClayNavbar
	 * @type {?boolean}
	 * @default false
	 */
	inverted: Config.bool().value(false),

	/**
	 * List of pages to show in the Navbar.
	 * @instance
	 * @memberof ClayNavbar
	 * @type {!Array}
	 * @default undefined
	 */
	pages: Config.arrayOf(
		Config.shapeOf({
			active: Config.bool(),
			title: Config.string().required(),
			url: Config.string().required(),
		}),
	).required(),
};

Soy.register(ClayNavbar, templates);

export { ClayNavbar };
export default ClayNavbar;
