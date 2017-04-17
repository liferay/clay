'use strict';

import Component from 'metal-component';
import MetalClayIcon from 'metal-clay-icon';
import Soy from 'metal-soy';
import { validators } from 'metal-state';

import templates from './MetalClayLink.soy.js';

/**
 * Implementation of the Metal Clay Link.
 */
class MetalClayLink extends Component {
}

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
	 * @type {?string}
	 * default undefined
	 */
	download: {
		validator: validators.string
	},

	/**
	 * Sets the HTML attribute href on the anchor tag.
	 * @instance
	 * @memberof MetalClayLink
	 * @type {?string}
	 * @default undefined
	 */
	href: {
		validator: validators.string
	},

	/**
	 * Render custom HTML instead of using the template.
	 * @instance
	 * @memberof MetalClayLink
	 * @type {?string}
	 * @default undefined
	 */
	html: {
		isHtml: true
	},

	/**
	 * Render MetalClayIcon in the link, available options are `alignment`,
	 * `elementClasses`, `spritemap`, `symbol`.
	 * @instance
	 * @memberof MetalClayLink
	 * @type {?Object}
	 * @default undefined
	 */
	icon: {
		validator: validators.object
	},

	/**
	 * Id to be applied to the anchor tag.
	 * @instance
	 * @memberof MetalClayLink
	 * @type {?string}
	 * default undefined
	 */
	id: {
		validator: validators.string
	},

	/**
	 * Sets the text or HTML to be rendered inside the anchor tag.
	 * @instance
	 * @memberof MetalClayLink
	 * @type {?string}
	 * @default undefined
	 */
	label: {
		isHtml: true
	},

	/**
	 * Sets the HTML attribute target on the anchor tag.
	 * @instance
	 * @memberof MetalClayLink
	 * @type {?string}
	 * @default undefined
	 */
	target: {
		validator: validators.string
	}
};

Soy.register(MetalClayLink, templates);

export default MetalClayLink;