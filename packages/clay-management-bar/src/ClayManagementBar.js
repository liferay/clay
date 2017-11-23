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
class ClayManagementBar extends Component {
	handleCheckboxChanged_(event) {
		this.emit('checkboxChanged', event);
	}

	handlePlusButtonClicked_(event) {
		this.emit('plusButtonClicked', event);
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayManagementBar.STATE = {
	/**
	 * List of items to display in the plus button dropdown.
	 * @instance
	 * @memberof ClayManagementBar
	 * @type {?Array}
	 * @default undefined
	 */
	actionItems: itemsValidator,

	/**
	 * The state of the selection checkbox.
	 * @instance
	 * @memberof ClayManagementBar
	 * @type {?string|undefined}
	 * @default unchecked
	 */
	checkboxState: Config.oneOf([
		'checked',
		'indeterminate',
		'unchecked',
	]).value('unchecked'),

	/**
	 * List of filter menu items.
	 * @instance
	 * @memberof ClayManagementBar
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
