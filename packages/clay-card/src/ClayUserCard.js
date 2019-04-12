import './ClayCardBase';
import 'clay-link';
import 'clay-sticker';
// eslint-disable-next-line
import { ClayActionsDropdown } from 'clay-dropdown';
import {Config} from 'metal-state';
import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';

import actionItemsValidator from './action_items_validator';
import templates from './ClayUserCard.soy.js';

/**
 * Metal ClayUserCard component.
 * @extends ClayComponent
 */
class ClayUserCard extends ClayComponent {
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
	_handleItemToggled(event) {
		this.emit('itemToggled', event);
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayUserCard.STATE = {
	/**
	 * Aria label attribute for the action element.
	 * @default undefined
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?(string|undefined)}
	 */
	actionAriaLabel: Config.string(),

	/**
	 * List of items to display in the actions menu.
	 * @default undefined
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?(array|undefined)}
	 */
	actionItems: actionItemsValidator,

	/**
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?object}
	 */
	data: Config.object(),

	/**
	 * Object that wires events with default listeners
	 * @default undefined
	 * @instance
	 * @memberof ClayUserCard
	 * @review
	 * @type {?(object|undefined)}
	 */
	defaultEventHandler: Config.object(),

	/**
	 * Flag to indicate if the card is disabled or not.
	 * @default false
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?bool}
	 */
	disabled: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Url to be applied to the title of the card.
	 * @default undefined
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?(string|undefined)}
	 */
	href: Config.string(),

	/**
	 * Icon to be renderer in the visual area of the card.
	 * @default undefined
	 * @instance
	 * @memberof ClayFileCard
	 * @type {?(string|undefined)}
	 */
	icon: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * Alternate text of the image.
	 * @default undefined
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?(string|undefined)}
	 */
	imageAlt: Config.string(),

	/**
	 * Source of the image to be rendered in the visual area of the card.
	 * @default undefined
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?(string|undefined)}
	 */
	imageSrc: Config.string(),

	/**
	 * Initials of the user.
	 * @default undefined
	 * @deprecated
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?(string|undefined)}
	 */
	initials: Config.validator(value => {
		if (value) {
			console.warn(
				'🚨 `initials` has been deprecated and will be removed in the next major version.'
			);
		}
	}),

	/**
	 * Name to be applied to the input element.
	 * @default undefined
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?(string|undefined)}
	 */
	inputName: Config.string(),

	/**
	 * Value to be applied to the input element.
	 * @default undefined
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?(string|undefined)}
	 */
	inputValue: Config.string(),

	/**
	 * Name of the user.
	 * @default undefined
	 * @instance
	 * @memberof ClayUserCard
	 * @type {!string}
	 */
	name: Config.string().required(),

	/**
	 * Flag to indicate if the card is selectable or not.
	 * @default false
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?bool}
	 */
	selectable: Config.bool().value(false),

	/**
	 * Flag to indicate if the card is selected or not.
	 * @default false
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?bool}
	 */
	selected: Config.bool().value(false),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?(string|undefined)}
	 */
	spritemap: Config.string(),

	/**
	 * Subtitle of the card.
	 * @default undefined
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?(string|undefined)}
	 */
	subtitle: Config.string(),

	/**
	 * Color of the user sticker.
	 * @default primary
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?string}
	 */
	userColorClass: Config.string(),
};

defineWebComponent('clay-user-card', ClayUserCard);

Soy.register(ClayUserCard, templates);

export {ClayUserCard};
export default ClayUserCard;
