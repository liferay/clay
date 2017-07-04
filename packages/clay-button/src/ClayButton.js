'use strict';

import ClayButtonBase from './ClayButtonBase';
import Soy from 'metal-soy';
import { Config } from 'metal-state';

import 'clay-icon';

import templates from './ClayButton.soy.js';

/**
 * Metal Clay Button component.
 */
class ClayButton extends ClayButtonBase {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayButton.STATE = {
	/**
	 * Aria label attribute for the link element.
	 * @instance
	 * @memberof ClayButton
	 * @type {string}
	 * @default ''
	 */
	ariaLabel: Config.string(),

	/**
	 * Renders the button as a block element.
	 * @instance
	 * @memberof ClayButton
	 * @type {boolean}
	 * @default false
	 */
	block: Config.bool().value(false),

	/**
	 * Render ClayIcon in the ClayButton element, available options are
	 * `elementClasses`, `spritemap`, `symbol`.
	 * @instance
	 * @memberof ClayButton
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	icon: Config.object(),

	/**
	 * The name that will make the CSS class name that will represent the
	 * button size.
	 * @instance
	 * @memberof ClayButton
	 * @type {?string|undefined}
	 * @default undefined
	 */
	size: Config.string(),

	/**
	 * The css class that colors the button.
	 * @instance
	 * @memberof ClayButton
	 * @type {?string|undefined}
	 * @default undefined
	 */
	style: Config.string(),
};

Soy.register(ClayButton, templates);

export { ClayButton };
export default ClayButton;
