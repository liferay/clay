'use strict';

import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';

import templates from './MetalQuartzButton.soy.js';

/**
 * Metal Quartz Button component.
 */
class MetalQuartzButton extends Component {
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
MetalQuartzButton.STATE = {
	/**
	 * Renders the button as a block element.
	 * @instance
	 * @memberof MetalQuartzButton
	 * @type {boolean}
	 * @default false
	 */
	block: {
		validator: core.isBoolean,
		value: false
	},

	/**
	 * The button disabled attribute.
	 * @instance
	 * @memberof MetalQuartzButton
	 * @type {boolean}
	 * @default false
	 */
	disabled: {
		validator: core.isBoolean,
		value: false
	},

	/**
	 * The button label.
	 * @instance
	 * @memberof MetalQuartzButton
	 * @type {string}
	 * @default ''
	 */
	label: {
		validator: core.isString,
		value: ''
	},

	/**
	 * The button size.
	 * @instance
	 * @memberof MetalQuartzButton
	 * @type {string}
	 * @default ''
	 */
	size: {
		validator: core.isString,
		value: ''
	},

	/**
	 * The button style.
	 * @instance
	 * @memberof MetalQuartzButton
	 * @type {string}
	 * @default 'default'
	 */
	style: {
		validator: core.isString,
		value: 'default'
	},

	/**
	 * The button type.
	 * @instance
	 * @memberof MetalQuartzButton
	 * @type {string}
	 * @default ''
	 */
	type: {
		validator: core.isString,
		value: ''
	},

	/**
	 * The button value.
	 * @instance
	 * @memberof MetalQuartzButton
	 * @type {string}
	 * @default ''
	 */
	value: {
		validator: core.isString,
		value: ''
	}
};

Soy.register(MetalQuartzButton, templates);

export default MetalQuartzButton;
