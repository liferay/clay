import 'clay-button';
import 'clay-checkbox';
import 'clay-icon';
import 'clay-link';
import 'clay-radio';
import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import {itemShape} from './validators';
import templates from './ClayDropdownItem.soy.js';

/**
 * Implementation of the Metal Clay Icon.
 * @extends ClayComponent
 */
class ClayDropdownItem extends ClayComponent {
	/**
	 * Continues the propagation of the item clicked event
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleItemClick(event) {
		return !this.emit('itemClicked', event);
	}

	/**
	 * Continues the propagation of the item clicked event
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleItemKeyDown(event) {
		return !this.emit('itemKeyDown', event);
	}

	/**
	 * @inheritDoc
	 */
	syncActive() {
		if (this.active) {
			this.element.focus();
		}
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayDropdownItem.STATE = {
	/**
	 * Flag to indicate if the item is active or not.
	 * @default false
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?bool}
	 */
	active: itemShape.active,

	/**
	 * Flag to indicate if the item is checked or not.
	 * @default false
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?bool}
	 */
	checked: itemShape.checked,

	/**
	 * Name of the content renderer for the different deltempaltes.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?(string|undefined)}
	 */
	contentRenderer: Config.string(),

	/**
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?object}
	 */
	data: Config.object(),

	/**
	 * Object that wires events with default listeners
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownItem
	 * @review
	 * @type {?(object|undefined)}
	 */
	defaultEventHandler: Config.object(),

	/**
	 * Flag to indicate if the item is disabled or not
	 * @default false
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?bool}
	 */
	disabled: itemShape.disabled,

	/**
	 * Href of the item.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?(string|undefined)}
	 */
	href: itemShape.href,

	/**
	 * Icon of the item.
	 * @default undefined
	 * @deprecated since version 2.13.x
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?(string|undefined)}
	 */
	icon: itemShape.icon,

	/**
	 * Icons of the item.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?(object|undefined)}
	 */
	icons: itemShape.icons,

	/**
	 * Name of the item input in case is selectable.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?(string|undefined)}
	 */
	inputName: itemShape.inputName,

	/**
	 * Value of the item input in case is selectable.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?(string|undefined)}
	 */
	inputValue: itemShape.inputValue,

	/**
	 * List of child items of the item.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?(array|undefined)}
	 */
	items: itemShape.items,

	/**
	 * Position in which item icons will be placed. Needed if any item has icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownBase
	 * @type {?(string|undefined)}
	 */
	itemsIconAlignment: Config.oneOf(['left', 'right', 'left-right']),

	/**
	 * Label of the item.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?(string|undefined)}
	 */
	label: itemShape.label,

	/**
	 * Number of max child items of the item.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?(number|undefined)}
	 */
	maxItems: itemShape.maxItems,

	/**
	 * Flag to indicate if the item has a separator or not.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?(bool|undefined)}
	 */
	separator: itemShape.separator,

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?(string|undefined)}
	 */
	spritemap: Config.string(),

	/**
	 * Sets the HTML attribute target on the anchor tag.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?(string|undefined)}
	 */
	target: Config.oneOf(['_blank', '_self']),

	/**
	 * Title of the item.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?(string|undefined)}
	 */
	title: itemShape.title,

	/**
	 * Type of the item.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?(string|undefined)}
	 */
	type: Config.string(),
};

defineWebComponent('clay-dropdown-item', ClayDropdownItem);

Soy.register(ClayDropdownItem, templates);

export {ClayDropdownItem};
export default ClayDropdownItem;
