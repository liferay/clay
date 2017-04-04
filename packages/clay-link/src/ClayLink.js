'use strict';

import Component from 'metal-component';
import 'clay-icon';
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
	 * Render MetalClayIcon in the link, available options are `alignment`,
	 * `elementClasses`, `spritemap`, `symbol`.
	 * @instance
	 * @memberof ClayLink
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	icon: Config.object(),

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
	label: {
		isHtml: true,
	},

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
