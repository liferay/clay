'use strict';

import Component from 'metal-component';
import MetalQuartzIcon from 'metal-quartz-icon';
import Soy from 'metal-soy';
import { validators } from 'metal-state';

import templates from './MetalQuartzLink.soy.js';

/**
 * Implementation of the Metal Quartz Link.
 */
class MetalQuartzLink extends Component {
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
MetalQuartzLink.STATE = {
	/**
	 * Sets the data-onclick attribute on the anchor tag.
	 * @instance
	 * @memberof MetalQuartzLink
	 * @type {?string}
	 * default undefined
	 */
	dataOnclick: {
		validator: validators.string
	},

	/**
	 * Sets the download attribute on the anchor tag.
	 * @instance
	 * @memberof MetalQuartzLink
	 * @type {?string}
	 * default undefined
	 */
	download: {
		validator: validators.string
	},

	/**
	 * Sets the HTML attribute href on the anchor tag.
	 * @instance
	 * @memberof MetalQuartzLink
	 * @type {?string}
	 * @default undefined
	 */
	href: {
		validator: validators.string
	},

	/**
	 * Render custom HTML instead of using the template.
	 * @instance
	 * @memberof MetalQuartzLink
	 * @type {?string}
	 * @default undefined
	 */
	html: {
		isHtml: true
	},

	/**
	 * Render MetalQuartzIcon in the link, available options are `alignment`,
	 * `elementClasses`, `spritemap`, `symbol`.
	 * @instance
	 * @memberof MetalQuartzLink
	 * @type {?Object}
	 * @default undefined
	 */
	icon: {
		validator: validators.object
	},

	/**
	 * Id to be applied to the anchor tag.
	 * @instance
	 * @memberof MetalQuartzLink
	 * @type {?string}
	 * default undefined
	 */
	id: {
		validator: validators.string
	},

	/**
	 * Sets the text or HTML to be rendered inside the anchor tag.
	 * @instance
	 * @memberof MetalQuartzLink
	 * @type {?string}
	 * @default undefined
	 */
	label: {
		isHtml: true
	},

	/**
	 * Sets the HTML attribute target on the anchor tag.
	 * @instance
	 * @memberof MetalQuartzLink
	 * @type {?string}
	 * @default undefined
	 */
	target: {
		validator: validators.string
	}
};

Soy.register(MetalQuartzLink, templates);

export default MetalQuartzLink;