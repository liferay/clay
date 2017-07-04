'use strict';

import Component from 'metal-component';
import 'metal-clay-icon';
import Soy from 'metal-soy';
import { Config } from 'metal-state';

import templates from './MetalClayLink.soy.js';

/**
 * Implementation of the Metal Clay Link.
 */
class MetalClayLink extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
MetalClayLink.STATE = {
	/**
	 * Sets the download attribute on the anchor tag.
	 * @instance
	 * @memberof MetalClayLink
	 * @type {?string|undefined}
	 * @default undefined
	 */
	download: Config.string(),

	/**
	 * Sets the HTML attribute href on the anchor tag.
	 * @instance
	 * @memberof MetalClayLink
	 * @type {?string|undefined}
	 * @default undefined
	 */
	href: Config.string(),

	/**
	 * Render custom HTML instead of using the template.
	 * @instance
	 * @memberof MetalClayLink
	 * @type {?string|undefined}
	 * @default undefined
	 */
	html: {
		isHtml: true,
	},

	/**
	 * Render MetalClayIcon in the link, available options are `alignment`,
	 * `elementClasses`, `spritemap`, `symbol`.
	 * @instance
	 * @memberof MetalClayLink
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	icon: Config.object(),

	/**
	 * Id to be applied to the anchor tag.
	 * @instance
	 * @memberof MetalClayLink
	 * @type {?string|undefined}
	 * default undefined
	 */
	id: Config.string(),

	/**
	 * Sets the text or HTML to be rendered inside the anchor tag.
	 * @instance
	 * @memberof MetalClayLink
	 * @type {?string|undefined}
	 * @default undefined
	 */
	label: {
		isHtml: true,
	},

	/**
	 * Sets the HTML attribute target on the anchor tag.
	 * @instance
	 * @memberof MetalClayLink
	 * @type {?string|undefined}
	 * @default undefined
	 */
	target: Config.string(),
};

Soy.register(MetalClayLink, templates);

export { MetalClayLink };
export default MetalClayLink;
