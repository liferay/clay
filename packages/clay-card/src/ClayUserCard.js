import './ClayCardBase';
import 'clay-link';
import 'clay-sticker';
// eslint-disable-next-line
import { ClayActionsDropdown } from 'clay-dropdown';
import {Config} from 'metal-state';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';

import actionItemsValidator from './action_items_validator';
import templates from './ClayUserCard.soy.js';

/**
 * Metal ClayUserCard component.
 */
class ClayUserCard extends Component {
	/**
	 * Continues the propagation of the checkbox changed event
	 * @param {!Event} event
	 * @private
	 */
	handleItemToggled_(event) {
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
	 * List of items to display in the actions menu.
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?array|undefined}
	 * @default undefined
	 */
	actionItems: actionItemsValidator,

	/**
	 * Flag to indicate if the card is disabled or not.
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?bool}
	 * @default false
	 */
	disabled: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Group Index the card belongs to.
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	groupName: Config.string(),

	/**
	 * Url to be applied to the title of the card.
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	href: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * Alternate text of the image.
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	imageAlt: Config.string(),

	/**
	 * Source of the image to be rendered in the visual area of the card.
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	imageSrc: Config.string(),

	/**
	 * Initials of the user.
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	initials: Config.string(),

	/**
	 * Name to be applied to the input element.
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	inputName: Config.string(),

	/**
	 * Value to be applied to the input element.
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	inputValue: Config.string(),

	/**
	 * Name of the user.
	 * @instance
	 * @memberof ClayUserCard
	 * @type {!string}
	 * @default undefined
	 */
	name: Config.string().required(),

	/**
	 * Flag to indicate if the card is selectable or not.
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?bool}
	 * @default false
	 */
	selectable: Config.bool().value(false),

	/**
	 * Flag to indicate if the card is selected or not.
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?bool}
	 * @default false
	 */
	selected: Config.bool().value(false),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	spritemap: Config.string(),

	/**
	 * Subtitle of the card.
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	subtitle: Config.string(),

	/**
	 * Color of the user sticker.
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?string}
	 * @default primary
	 */
	userColor: Config.oneOf([
		'danger',
		'dark',
		'info',
		'light',
		'primary',
		'secondary',
		'success',
		'warning',
	]).value('primary'),
};

defineWebComponent('clay-user-card', ClayUserCard);

Soy.register(ClayUserCard, templates);

export {ClayUserCard};
export default ClayUserCard;
