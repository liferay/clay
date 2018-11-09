import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayIcon.soy.js';

/**
 * Implementation of the Metal Clay Icon.
 * @extends Component
 */
class ClayIcon extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayIcon.STATE = {
	/**
	 * Aria Label on the icon container.
	 * @default undefined
	 * @instance
	 * @memberof ClayIcon
	 * @type {?(string|undefined)}
	 */
	ariaLabel: Config.string(),

	/**
	 * Flag to indicate whether the icon is decorative or standalone for
	 * accessibility. Decorative icons are accompanied by text and shouldn't be
	 * read aloud by screen readers. Standalone icons should have a
	 * description via the ariaLabel attribute.
	 * @default false
	 * @instance
	 * @memberof ClayIcon
	 * @type {?bool}
	 */
	decorative: Config.bool().value(false),

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
	 * @instance
	 * @memberof ClayIcon
	 * @type {?(string|undefined)}
	 */
	title: Config.string(),
};

defineWebComponent('clay-icon', ClayIcon);

Soy.register(ClayIcon, templates);

export {ClayIcon};
export default ClayIcon;
