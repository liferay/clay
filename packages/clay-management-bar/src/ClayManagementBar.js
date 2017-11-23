import 'clay-button';
import 'clay-checkbox';
import 'clay-dropdown';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import itemsValidator from './items_validator';
import templates from './ClayManagementBar.soy.js';

/**
 * Metal ClayManagementBar component.
 */
class ClayManagementBar extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayManagementBar.STATE = {
	/**
	 * List of menu items.
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?Array}
	 * @default undefined
	 */
	filterItems: itemsValidator,

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayManagementBar
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * Flag to indicate if the managment toolbar will control the selection of
	 * elements.
	 * @instance
	 * @memberof ClayManagementBar
	 * @type {?bool|undefined}
	 * @default undefined
	 */
	selectable: Config.bool(),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayManagementBar
	 * @type {?string}
	 * @default undefined
	 */
	spritemap: Config.string().required(),

	/**
	 * List of view items.
	 * @instance
	 * @memberof ClayManagementBar
	 * @type {?Array|undefined}
	 * @default undefined
	 */
	viewTypes: itemsValidator,
};

defineWebComponent('clay-management-bar', ClayManagementBar);

Soy.register(ClayManagementBar, templates);

export {ClayManagementBar};
export default ClayManagementBar;
