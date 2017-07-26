'use strict';

import 'clay-icon';
import Component from 'metal-component';
import Soy from 'metal-soy';
import { Config } from 'metal-state';

import templates from './ClayLink.soy.js';

/**
 * Implementation of the Metal Clay Link.
 */
class ClayLink extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayLink.STATE = {
	/**
	 * Aria label attribute for the anchor element.
	 * @instance
	 * @memberof ClayLink
	 * @type {?string|undefined}
	 * @default undefined
	 */
	ariaLabel: Config.string(),

	/**
	 * Sets the download attribute on the anchor tag.
	 * @instance
	 * @memberof ClayLink
	 * @type {?string|undefined}
	 * @default undefined
	 */
	download: Config.string(),

	/**
	 * Sets the HTML attribute href on the anchor tag.
	 * @instance
	 * @memberof ClayLink
	 * @type {?string|undefined}
	 * @default undefined
	 */
	href: Config.string(),

	/**
	 * Render ClayIcon in the ClayLink element.
	 * @instance
	 * @memberof ClayLink
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	icon: Config.shapeOf({
		alignment: Config.oneOf(['left', 'right']),
		monospaced: Config.bool(),
		spritemap: Config.string().required(),
		symbol: Config.string().required(),
	}),

	/**
	 * Id to be applied to the anchor tag.
	 * @instance
	 * @memberof ClayLink
	 * @type {?string|undefined}
	 * default undefined
	 */
	id: Config.string(),

	/**
	 * Sets the text or HTML to be rendered inside the anchor tag.
	 * @instance
	 * @memberof ClayLink
	 * @type {?string|undefined}
	 * @default undefined
	 */
	label: Config.any(),

	/**
	 * Sets the HTML attribute target on the anchor tag.
	 * @instance
	 * @memberof ClayLink
	 * @type {?string|undefined}
	 * @default undefined
	 */
	target: Config.string(),
};

Soy.register(ClayLink, templates);

export { ClayLink };
export default ClayLink;
