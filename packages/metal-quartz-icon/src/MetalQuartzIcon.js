'use strict';

import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';

import templates from './MetalQuartzIcon.soy.js';

/**
 * Implementation of the Metal Quartz Icon.
 * @see  {@link http://liferay.github.io/lexicon/content/icons-lexicon/|Lexicon Definition}
 * {@link http://liferay.github.io/lexicon/content/icons-font-awesome/}
 * {@link http://liferay.github.io/lexicon/content/icons-glyphicons/}
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
	 * The path to the SVG spritemap file containing the icons, `lexicon-fa`, or `glyphicons`.
	 * @instance
	 * @memberof MetalQuartzIcon
	 * @type {string}
	 */
	spritemap: {
		required: true,
		validator: core.isString
	},

	/**
	 * The name of the Lexicon SVG Icon, Lexicon Font Awesome Icon, or Glyphicon
	 * e.g. `plus`, `icon-plus`, or `glyphicon-plus` respectively.
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