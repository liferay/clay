'use strict';

import MetalClayButtonBase from './MetalClayButtonBase';
import Soy from 'metal-soy';
import { Config } from 'metal-state';

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
	ariaLabel: Config.string(),

	/**
	 * Renders the button as a block element.
	 * @instance
	 * @memberof MetalClayButton
	 * @type {boolean}
	 * @default false
	 */
	block: Config.bool().value(false),

	/**
	 * Render MetalClayIcon in the MetalClayButton element, available options are
	 * `elementClasses`, `spritemap`, `symbol`.
	 * @instance
	 * @memberof MetalClayButton
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	icon: Config.object(),

	/**
	 * The name that will make the CSS class name that will represent the
	 * button size.
	 * @instance
	 * @memberof MetalClayButton
	 * @type {?string|undefined}
	 * @default undefined
	 */
	size: Config.string(),

	/**
	 * The css class that colors the button.
	 * @instance
	 * @memberof MetalClayButton
	 * @type {?string|undefined}
	 * @default undefined
	 */
	style: Config.string()
};

Soy.register(MetalClayButton, templates);

export default MetalClayButton;
export {MetalClayButton};
