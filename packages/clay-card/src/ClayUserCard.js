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
 * @extends Component
 */
class ClayUserCard extends Component {
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
	 * List of items to display in the actions menu.
	 * @default undefined
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?(array|undefined)}
	 */
	actionItems: actionItemsValidator,

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
	 * @instance
	 * @memberof ClayUserCard
	 * @type {?(string|undefined)}
	 */
	initials: Config.string(),

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
