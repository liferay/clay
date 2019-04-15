import 'clay-icon';
import './ClayDropdownBase';
import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import {itemsValidator, preferredAlign} from './validators';
import templates from './ClayCreationMenuDropdown.soy.js';

/**
 * Implementation for Metal Clay Action Dropdown.
 * @extends ClayComponent
 */
class ClayCreationMenuDropdown extends ClayComponent {
	/**
	 * @inheritDoc
	 */
	attached() {
		this.addListener('toggle', this._defaultToggle, true);
	}

	/**
	 * Toggles the dropdown, closing it when open or opening it when closed.
	 * @param {!Event} event
	 * @protected
	 */
	_defaultToggle(event) {
		event.preventDefault();

		this.expanded = !this.expanded;
	}

	/**
	 * Handles footer button click.
	 * @param {!Event} event
	 * @protected
	 */
	_handleButtonClick(event) {
		this.emit('moreButtonClicked', event);
	}

	/**
	 * Continues the propagation of the item clicked event
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleItemClick(event) {
		return !this.emit({
			data: event.data,
			name: 'itemClicked',
			originalEvent: event,
		});
	}

	/**
	 * Continues the propagation of the toggle event.
	 * @param {!Event} event
	 * @return {Boolean} If the event has been prevented or not.
	 */
	toggle(event) {
		return !this.emit({
			name: 'toggle',
			originalEvent: event,
		});
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayCreationMenuDropdown.STATE = {
	/**
	 * Button configuration to place a button at dropdown footer.
	 * @default undefined
	 * @instance
	 * @memberof ClayCreationMenuDropdown
	 * @type {?(string|undefined)}
	 */
	button: Config.shapeOf({
		label: Config.string().required(),
		style: Config.oneOf(['primary', 'secondary']).value('primary'),
		type: Config.oneOf(['button', 'reset', 'submit']),
	}),

	/**
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayCreationMenuDropdown
	 * @type {?object}
	 */
	data: Config.object(),

	/**
	 * Object that wires events with default listeners
	 * @default undefined
	 * @instance
	 * @memberof ClayCreationMenuDropdown
	 * @review
	 * @type {?(object|undefined)}
	 */
	defaultEventHandler: Config.object(),

	/**
	 * Flag to indicate if menu is disabled
	 * @default false
	 * @instance
	 * @memberof ClayCreationMenuDropdown
	 * @type {?bool}
	 */
	disabled: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayCreationMenuDropdown
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Flag to indicate if menu is expanded.
	 * @default false
	 * @instance
	 * @memberof ClayCreationMenuDropdown
	 * @type {?bool}
	 */
	expanded: Config.bool().value(false),

	/**
	 * Help text to be shown on top of the open dropdown.
	 * @default undefined
	 * @instance
	 * @memberof ClayCreationMenuDropdown
	 * @type {?(string|undefined)}
	 */
	helpText: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayCreationMenuDropdown
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * Position in which item icon will be placed. Needed if any item has icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayCreationMenuDropdown
	 * @type {?(string|undefined)}
	 */
	itemsIconAlignment: Config.oneOf(['left', 'right', 'left-right']),

	/**
	 * Maximum number of primary items to show. Only take in account when
	 * secondaryItems are passed, otherwise maxTotalItems is used.
	 * @default 8
	 * @instance
	 * @memberof ClayCreationMenuDropdown
	 * @type {?(number|undefined)}
	 */
	maxPrimaryItems: Config.number().value(8),

	/**
	 * Maximum number of secondary items to show.
	 * @default 7
	 * @instance
	 * @memberof ClayCreationMenuDropdown
	 * @type {?(number|undefined)}
	 */
	maxSecondaryItems: Config.number().value(7),

	/**
	 * Maximum number of total items to show.
	 * @default 15
	 * @instance
	 * @memberof ClayCreationMenuDropdown
	 * @type {?(number|undefined)}
	 */
	maxTotalItems: Config.number().value(15),

	/**
	 * The preferred alignment for the dropdown content.
	 * @default BottomLeft
	 * @instance
	 * @memberof ClayCreationMenuDropdown
	 * @type {?(string|undefined)}
	 */
	preferredAlign: preferredAlign.value('BottomLeft'),

	/**
	 * List of primary menu items.
	 * @default undefined
	 * @instance
	 * @memberof ClayCreationMenuDropdown
	 * @type {!Array}
	 */
	primaryItems: itemsValidator,

	/**
	 * List of secondary menu items.
	 * @default undefined
	 * @instance
	 * @memberof ClayCreationMenuDropdown
	 * @type {?(Array|undefined)}
	 */
	secondaryItems: itemsValidator,

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayCreationMenuDropdown
	 * @type {!string}
	 */
	spritemap: Config.string().required(),

	/**
	 * Aria label attribute for the trigger element.
	 * @default undefined
	 * @instance
	 * @memberof ClayCreationMenuDropdown
	 * @type {?(string|undefined)}
	 */
	triggerAriaLabel: Config.string(),

	/**
	 * CSS classes to be applied to the trigger element.
	 * @default undefined
	 * @instance
	 * @memberof ClayCreationMenuDropdown
	 * @type {?(string|undefined)}
	 */
	triggerClasses: Config.string(),

	/**
	 * The title attribute of the trigger element.
	 * @default undefined
	 * @instance
	 * @memberof ClayCreationMenuDropdown
	 * @type {?(string|undefined)}
	 */
	triggerTitle: Config.string(),

	/**
	 * The url for the view more button in case is rendered.
	 * @instance
	 * @memberof ClayCreationMenuDropdown
	 * @type {?(string|undefined)}
	 * @default undefined
	 */
	viewMoreURL: Config.string(),
};

defineWebComponent('clay-creation-menu-dropdown', ClayCreationMenuDropdown);

Soy.register(ClayCreationMenuDropdown, templates);

export {ClayCreationMenuDropdown};
export default ClayCreationMenuDropdown;
