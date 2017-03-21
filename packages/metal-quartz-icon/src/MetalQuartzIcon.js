'use strict';

import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';

import templates from './MetalQuartzIcon.soy.js';

/**
 * Implementation of the Metal Quartz Icon.
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
	 * CSS classes to be applied to the element, use this to pass in classes for
	 * third-party icon libraries e.g. `glyphicon glyphicon-plus`. If
	 * elementClasses is defined and spritemap or symbol is undefined, it will
	 * insert elementClasses into a span tag.
	 * @type {string}
	 */
	elementClasses: {
	},

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof MetalQuartzIcon
	 * @type {string}
	 */
	spritemap: {
		validator: value => core.isString(value)
	},

	/**
	 * The name of the Quartz SVG Icon e.g. `plus`.
	 * @instance
	 * @memberof MetalQuartzIcon
	 * @type {string}
	 */
	symbol: {
		validator: value => core.isString(value)
	}
};

Soy.register(MetalQuartzIcon, templates);

export default MetalQuartzIcon;