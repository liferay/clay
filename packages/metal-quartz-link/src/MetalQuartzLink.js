'use strict';

import Component from 'metal-component';
import MetalQuartzIcon from 'metal-quartz-icon';
import Soy from 'metal-soy';
import { core, object } from 'metal';
import { validators } from 'metal-state';

import templates from './MetalQuartzLink.soy.js';

/**
 * Implementation of the Metal Quartz Link.
 */
class MetalQuartzLink extends Component {
	/**
	 * @inheritDoc
	 */
	created() {
		MetalQuartzLink.instances.push(this);
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
MetalQuartzLink.STATE = {
	/**
	 * Sets the data-toggle attribute on the anchor tag.
	 * @instance
	 * @memberof MetalQuartzLink
	 * @type {?string}
	 * default undefined
	 */
	dataToggle: {
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
	}
};

/**
 * An array of all MetalQuartzLink's that are created on the page.
 */
MetalQuartzLink.instances = [];

Soy.register(MetalQuartzLink, templates);

export default MetalQuartzLink;