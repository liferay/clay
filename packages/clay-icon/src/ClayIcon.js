import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayIcon.soy.js';

/**
 * Implementation of the Metal Clay Icon.
 */
class ClayIcon extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayIcon.STATE = {
	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayIcon
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayIcon
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayIcon
	 * @type {!string}
	 * @default undefined
	 */
	spritemap: Config.string().required(),

	/**
	 * The name of the Clay SVG Icon e.g. `plus`.
	 * @instance
	 * @memberof ClayIcon
	 * @type {!string}
	 * @default undefined
	 */
	symbol: Config.string().required(),

	/**
	 * The title of the Clay SVG Icon.
	 * @instance
	 * @memberof ClayIcon
	 * @type {?string|undefined}
	 * @default undefined
	 */
	title: Config.string(),
};

defineWebComponent('clay-icon', ClayIcon);

Soy.register(ClayIcon, templates);

export {ClayIcon};
export default ClayIcon;
