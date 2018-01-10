import './ClayDropdownBase';
import 'clay-checkbox';
import 'clay-icon';
import 'clay-link';
import 'clay-radio';
import {Config} from 'metal-state';
import Component from 'metal-component';
import itemsValidator from './items_validator';
import Soy from 'metal-soy';

import templates from './ClayDropdownItem.soy.js';

/**
 * Implementation of the base for Metal Clay Dropdown.
 */
class ClayDropdownItem extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayDropdownItem.STATE = {
	/**
	 * Flag to indicate if the item is active or not.
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?bool}
	 * @default false
	 */
	active: Config.bool().value(false),

	/**
	 * Flag to indicate if the item is checked or not.
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?bool}
	 * @default false
	 */
	checked: Config.bool().value(false),

	/**
	 * Flag to indicate if the item is disabled or not.
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?bool}
	 * @default false
	 */
	disabled: Config.bool().value(false),

	/**
	 * Item href.
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	href: Config.string(),

	/**
	 * Item icon.
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	icon: Config.string(),

	/**
	 * Item input name
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	inputName: Config.string(),

	/**
	 * Item input value
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	inputValue: Config.string(),

	/**
	 * Flag to indicate if the item is in a list or not.
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?bool}
	 * @default false
	 */
	isInList: Config.bool().value(false),

	/**
	 * List of children items. Used if the item is a group.
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?array|object|undefined}
	 * @default undefined
	 */
	items: itemsValidator,

	/**
	 * Position in which item icons will be placed. Needed if any item has icons.
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	itemsIconAlignment: Config.oneOf(['left', 'right']),

	/**
	 * Item label
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	label: Config.string(),

	/**
	 * Flag to indicate if the item must be separated or not.
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?bool}
	 * @default false
	 */
	separator: Config.bool().value(false),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	spritemap: Config.string(),

	/**
	 * Item type
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?string}
	 * @default item
	 */
	type: Config.oneOf(['checkbox', 'group', 'item', 'radiogroup']).value(
		'item'
	),
};

Soy.register(ClayDropdownItem, templates);

export {ClayDropdownItem};
export default ClayDropdownItem;
