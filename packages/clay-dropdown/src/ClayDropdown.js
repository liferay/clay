import 'clay-icon';
import './ClayDropdownBase';
import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import {itemsValidator, preferredAlign} from './validators';
import templates from './ClayDropdown.soy.js';

/**
 * Implementation for Metal Clay Dropdown.
 * @extends ClayComponent
 */
class ClayDropdown extends ClayComponent {
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
		this.emit('buttonClicked', event);
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
	 * Continues the propagation of the enter key event
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleItemSelected(event) {
		return !this.emit({
			data: event.data,
			name: 'itemSelected',
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
ClayDropdown.STATE = {
	/**
	 * Button configuration to place a button at dropdown footer.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?(string|undefined)}
	 */
	button: Config.shapeOf({
		label: Config.string().required(),
		style: Config.oneOf(['primary', 'secondary']),
		type: Config.oneOf(['button', 'reset', 'submit']),
	}),

	/**
	 * Flag to indicate if menu is disabled
	 * @default false
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?bool}
	 */
	disabled: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Flag to indicate if menu is expanded.
	 * @default false
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?bool}
	 */
	expanded: Config.bool().value(false),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * Icon to use in the trigger.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?(string|undefined)}
	 */
	icon: Config.string(),

	/**
	 * List of menu items.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdown
	 * @type {!Array}
	 */
	items: itemsValidator.required(),

	/**
	 * Position in which item icon will be placed. Needed if any item has icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?(string|undefined)}
	 */
	itemsIconAlignment: Config.oneOf(['left', 'right']),

	/**
	 * Label of the trigger button.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?(html|string|undefined)}
	 */
	label: Config.any(),

	/**
	 * The preferred alignment for the dropdown content.
	 * @default BottomLeft
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?(string|undefined)}
	 */
	preferredAlign: preferredAlign.value('BottomLeft'),

	/**
	 * Flag to indicate if menu has a search field and search through elements
	 * is possible.
	 * @default false
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?bool}
	 */
	searchable: Config.bool().value(false),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdown
	 * @type {!string}
	 */
	spritemap: Config.string().required(),

	/**
	 * Style of the trigger button.
	 * @default unstyled
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?string}
	 */
	style: Config.oneOf(['link', 'primary', 'secondary', 'unstyled']).value(
		'unstyled'
	),

	/**
	 * CSS classes to be applied to the trigger element.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?(string|undefined)}
	 */
	triggerClasses: Config.string(),

	/**
	 * The title attribute of the trigger element.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?(string|undefined)}
	 */
	triggerTitle: Config.string(),

	/**
	 * Size of the trigger button.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?(string|undefined)}
	 */
	triggerSize: Config.oneOf(['sm']),
};

defineWebComponent('clay-dropdown', ClayDropdown);

Soy.register(ClayDropdown, templates);

export {ClayDropdown};
export default ClayDropdown;
