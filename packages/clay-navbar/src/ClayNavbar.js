'use strict';

import 'clay-link';
import Component from 'metal-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

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
	 * List of items to show in the Navbar.
	 * @instance
	 * @memberof ClayNavbar
	 * @type {!Array}
	 * @default undefined
	 */
  items: Config.arrayOf(
    Config.shapeOf({
      active: Config.bool().value(false),
      title: Config.string().required(),
      url: Config.string().required(),
    })
  ).required(),
};

Soy.register(ClayNavbar, templates);

export {ClayNavbar};
export default ClayNavbar;
