import 'clay-icon';
import './ClayDropdownBase';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import itemsValidator from './items_validator';
import templates from './ClayCreationMenuDropdown.soy.js';

/**
 * Implementation for Metal Clay Action Dropdown.
 */
class ClayCreationMenuDropdown extends Component {
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
	 * @param {!Object} item
	 * @protected
	 */
	_handleItemClick(item) {
		this.emit('itemClicked', item);
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
	 * @instance
	 * @memberof ClayCreationMenuDropdown
	 * @type {?string|undefined}
	 * @default undefined
	 */
	button: Config.shapeOf({
		label: Config.string().required(),
		style: Config.oneOf(['primary', 'secondary']).value('primary'),
		type: Config.oneOf(['button', 'reset', 'submit']),
	}),

	/**
	 * Caption text of the dropdown.
	 * @instance
	 * @memberof ClayCreationMenuDropdown
	 * @type {?string|undefined}
	 * @default undefined
	 */
	caption: Config.string(),

	/**
	 * Flag to indicate if menu is disabled
	 * @instance
	 * @memberof ClayCreationMenuDropdown
	 * @type {?bool}
	 * @default false
	 */
	disabled: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayCreationMenuDropdown
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Flag to indicate if menu is expanded.
	 * @instance
	 * @memberof ClayCreationMenuDropdown
	 * @type {?bool}
	 * @default false
	 */
	expanded: Config.bool().value(false),

	/**
	 * List of favorite menu items.
	 * @instance
	 * @memberof ClayCreationMenuDropdown
	 * @type {?Array|undefined}
	 * @default undefined
	 */
	favoriteItems: itemsValidator,

	/**
	 * Help text to be shown on top of the open dropdown.
	 * @instance
	 * @memberof ClayCreationMenuDropdown
	 * @type {?string|undefined}
	 * @default undefined
	 */
	helpText: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayCreationMenuDropdown
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * Position in which item icon will be placed. Needed if any item has icons.
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?string|undefined}
	 * @default undefined
	 */
	itemsIconAlignment: Config.oneOf(['left', 'right']),

	/**
	 * List of main menu items.
	 * @instance
	 * @memberof ClayCreationMenuDropdown
	 * @type {!Array}
	 * @default undefined
	 */
	mainItems: itemsValidator.required(),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayCreationMenuDropdown
	 * @type {!string}
	 * @default undefined
	 */
  spritemap: Config.string().required(),
  
	/**
	 * CSS classes to be applied to the trigger element.
	 * @instance
	 * @memberof ClayCreationMenuDropdown
	 * @type {?string|undefined}
	 * @default undefined
	 */
	triggerClasses: Config.string(),
};

defineWebComponent('clay-creation-menu-dropdown', ClayCreationMenuDropdown);

Soy.register(ClayCreationMenuDropdown, templates);

export {ClayCreationMenuDropdown};
export default ClayCreationMenuDropdown;
