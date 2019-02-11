import 'clay-checkbox';
import 'clay-link';
import 'clay-sticker';
// eslint-disable-next-line
import { ClayActionsDropdown } from 'clay-dropdown';
import {Config} from 'metal-state';
import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';

import actionItemsValidator from './action_items_validator';
import templates from './ClayHorizontalCard.soy.js';

/**
 * Metal ClayHorizontalCard component.
 * @extends ClayComponent
 */
class ClayHorizontalCard extends ClayComponent {
	/**
	 * Continues the propagation of the dropdown action item click event
	 * @param {!Event} event
	 * @private
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleActionItemClicked(event) {
		return !this.emit('itemClicked', event);
	}

	/**
	 * Continues the propagation of the checkbox changed event
	 * @param {!Event} event
	 * @private
	 */
	_handleItemCheckboxClick(event) {
		this.emit('itemToggled', event);
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayHorizontalCard.STATE = {
	/**
	 * Aria label attribute for the action element.
	 * @default undefined
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @type {?(string|undefined)}
	 */
	actionAriaLabel: Config.string(),

	/**
	 * List of items to display in the actions menu.
	 * @default undefined
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @type {?(array|undefined)}
	 */
	actionItems: actionItemsValidator,

	/**
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @type {?object}
	 */
	data: Config.object(),

	/**
	 * Object that wires events with default listeners
	 * @default undefined
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @review
	 * @type {?(object|undefined)}
	 */
	defaultEventHandler: Config.object(),

	/**
	 * Flag to indicate if the card is disabled or not.
	 * @default false
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @type {?bool}
	 */
	disabled: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Url to be applied to the title of the card.
	 * @default undefined
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @type {?(string|undefined)}
	 */
	href: Config.string(),

	/**
	 * Icon of the card.
	 * @default folder
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @type {?string}
	 */
	icon: Config.string().value('folder'),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * Name to be applied to the input element.
	 * @default undefined
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @type {?(string|undefined)}
	 */
	inputName: Config.string(),

	/**
	 * Value to be applied to the input element.
	 * @default undefined
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @type {?(string|undefined)}
	 */
	inputValue: Config.string(),

	/**
	 * Flag to indicate if the card is selectable or not.
	 * @default false
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @type {?bool}
	 */
	selectable: Config.bool().value(false),

	/**
	 * Flag to indicate if the card is selected or not.
	 * @default false
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @type {?bool}
	 */
	selected: Config.bool().value(false),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @type {!string}
	 */
	spritemap: Config.string().required(),

	/**
	 * Title of the card.
	 * @default undefined
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @type {!string}
	 */
	title: Config.string().required(),
};

defineWebComponent('clay-horizontal-card', ClayHorizontalCard);

Soy.register(ClayHorizontalCard, templates);

export {ClayHorizontalCard};
export default ClayHorizontalCard;
