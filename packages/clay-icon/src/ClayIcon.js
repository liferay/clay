import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayIcon.soy.js';

/**
 * Implementation of the Metal Clay Icon.
 * @extends ClayComponent
 */
class ClayIcon extends ClayComponent {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayIcon.STATE = {
	/**
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayIcon
	 * @type {?object}
	 */
	data: Config.object(),

	/**
	 * Object that wires events with default listeners
	 * @default undefined
	 * @instance
	 * @memberof ClayIcon
	 * @review
	 * @type {?(object|undefined)}
	 */
	defaultEventHandler: Config.object(),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayIcon
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Flag to indicate if the svg is focusable or not
	 * @default false
	 * @instance
	 * @memberof ClayIcon
	 * @type {?bool}
	 */
	focusable: Config.bool().value(false),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayIcon
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayIcon
	 * @type {!string}
	 */
	spritemap: Config.string().required(),

	/**
	 * The name of the Clay SVG Icon e.g. `plus`.
	 * @default undefined
	 * @instance
	 * @memberof ClayIcon
	 * @type {!string}
	 */
	symbol: Config.string().required(),

	/**
	 * The title of the Clay SVG Icon.
	 * @default undefined
	 * @deprecated since version 2.4.x
	 * @instance
	 * @memberof ClayIcon
	 * @type {?(string|undefined)}
	 */
	title: Config.validator(value => {
		if (value) {
			console.warn(
				'🚨 The `title` API will be deprecated and removed in the next release. See more information https://goo.gl/EycJtK'
			);
		}
	}),
};

defineWebComponent('clay-icon', ClayIcon);

Soy.register(ClayIcon, templates);

export {ClayIcon};
export default ClayIcon;
