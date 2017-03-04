'use strict';

import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';

import templates from './MetalQuartzIcon.soy.js';

/**
 * Implementation of the Metal Quartz Icon.
 * @see  {@link http://liferay.github.io/lexicon/content/icons-lexicon/|Lexicon Definition}
 */
class MetalQuartzIcon extends Component {
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
MetalQuartzIcon.STATE = {
	/**
	 * Path to the spritemap file with the icons.
	 * @instance
	 * @memberof MetalQuartzIcon
	 * @type {string}
	 */
	spritemap: {
		required: true,
		validator: core.isString
	},

	/**
	 * Id of the icon to show from the list of available icons.
	 * @instance
	 * @memberof MetalQuartzIcon
	 * @type {string}
	 */
	symbol: {
		required: true,
		validator: core.isString
	}
};

Soy.register(MetalQuartzIcon, templates);

export default MetalQuartzIcon;