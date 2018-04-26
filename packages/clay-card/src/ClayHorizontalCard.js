import 'clay-checkbox';
import 'clay-link';
import 'clay-sticker';
// eslint-disable-next-line
import { ClayActionsDropdown } from 'clay-dropdown';
import {Config} from 'metal-state';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';

import actionItemsValidator from './action_items_validator';
import templates from './ClayHorizontalCard.soy.js';

/**
 * Metal ClayHorizontalCard component.
 * @extends Component
 */
class ClayHorizontalCard extends Component {
	/**
	 * Continues the propagation of the checkbox changed event
	 * @param {!Event} event
	 * @private
	 */
	_handleItemCheckboxClick(event) {
		this.selected = !this.selected;

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
	 * List of items to display in the actions menu.
	 * @default undefined
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @type {?(array|undefined)}
	 */
	actionItems: actionItemsValidator,

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
	 * Group Index the card belongs to.
	 * @default undefined
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @type {?(string|undefined)}
	 */
	groupName: Config.string(),

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
