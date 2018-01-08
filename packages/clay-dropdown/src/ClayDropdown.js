import 'clay-icon';
import './ClayDropdownBase';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import itemsValidator from './items_validator';
import templates from './ClayDropdown.soy.js';

/**
 * Implementation for Metal Clay Dropdown.
 */
class ClayDropdown extends Component {
	/**
	 * Handles footer button click.
	 * @param {!Event} event
	 * @protected
	 */
	handleButtonClick_(event) {
		this.emit('buttonClicked', event);
	}

	/**
	 * Continues the propagation of the item clicked event
	 * @param {!Event} event
	 * @protected
	 */
	handleItemClick_(event) {
		this.emit('itemClicked', event);
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
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?string|undefined}
	 * @default undefined
	 */
	button: Config.shapeOf({
		label: Config.string().required(),
		style: Config.oneOf(['primary', 'secondary']),
		type: Config.oneOf(['button', 'reset', 'submit']),
	}),

	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Flag to indicate if menu is expanded.
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?bool}
	 * @default false
	 */
	expanded: Config.bool().value(false),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * Icon to use in the trigger.
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?string|undefined}
	 * @default undefined
	 */
	icon: Config.string(),

	/**
	 * List of menu items.
	 * @instance
	 * @memberof ClayDropdown
	 * @type {!Array}
	 * @default undefined
	 */
	items: itemsValidator.required(),

	/**
	 * Position in which item icon will be placed. Needed if any item has icons.
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?string|undefined}
	 * @default undefined
	 */
	itemsIconAlignment: Config.oneOf(['left', 'right']),

	/**
	 * Label of the trigger button.
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?html|string|undefined}
	 * @default undefined
	 */
	label: Config.any(),

	/**
	 * Flag to indicate if menu has a search field and search through elements
	 * is possible.
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?bool}
	 * @default false
	 */
	searchable: Config.bool().value(false),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayDropdown
	 * @type {!string}
	 * @default undefined
	 */
	spritemap: Config.string().required(),

	/**
	 * Style of the trigger button.
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?string}
	 * @default unstyled
	 */
	style: Config.oneOf(['secondary', 'unstyled']).value('unstyled'),

	/**
	 * CSS classes to be applied to the trigger element.
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?string|undefined}
	 * @default undefined
	 */
	triggerClasses: Config.string(),

	/**
	 * Type of the dropdown menu.
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?string}
	 * @default list
	 */
	type: Config.oneOf(['form', 'list']).value('list'),
};

defineWebComponent('clay-dropdown', ClayDropdown);

Soy.register(ClayDropdown, templates);

export {ClayDropdown};
export default ClayDropdown;
