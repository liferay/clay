import 'clay-icon';
import 'clay-sticker';
import './ClayCardBase';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import actionItemsValidator from './action_items_validator';
import templates from './ClayImageCard.soy.js';

/**
 * Metal ClayImageCard component.
 */
class ClayImageCard extends Component {
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
ClayImageCard.STATE = {
	/**
	 * List of items to display in the actions menu.
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?array|object|undefined}
	 * @default undefined
	 */
	actionItems: actionItemsValidator,

	/**
	 * Flag to indicate if the card is disabled or not.
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?bool}
	 * @default false
	 */
	disabled: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Group Index the card belongs to.
	 * @instance
	 * @memberof ClayImageCards
	 * @type {?string|undefined}
	 * @default undefined
	 */
	groupName: Config.string(),

	/**
	 * Url to be applied to the title of the card.
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	href: Config.string(),

	/**
	 * Icon to be rendered in the visual area of the card.
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	icon: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * Alternate text of the image.
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	imageAlt: Config.string(),

	/**
	 * Source of the image to be rendered in the visual area of the card.
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	imageSrc: Config.string(),

	/**
	 * Name to be applied to the input element.
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	inputName: Config.string(),

	/**
	 * Value to be applied to the input element.
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	inputValue: Config.string(),

	/**
	 * Labels of the card.
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?array|undefined}
	 * @default undefined
	 */
	labels: Config.arrayOf(
		Config.oneOfType([
			Config.string(),
			Config.shapeOf({
				label: Config.string(),
				style: Config.oneOf([
					'danger',
					'info',
					'secondary',
					'success',
					'warning',
				]).value('secondary'),
			}),
		])
	),

	/**
	 * Object that maps specific label values with desired styles.
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?object|undefined}
	 * @default undefined
	 */
	labelStylesMap: Config.object(),

	/**
	 * Flag to indicate if the card is selectable or not.
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?bool}
	 * @default false
	 */
	selectable: Config.bool().value(false),

	/**
	 * Flag to indicate if the card is selected or not.
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?bool}
	 * @default false
	 */
	selected: Config.bool().value(false),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	spritemap: Config.string(),

	/**
	 * Label for the sticker represented in the card.
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	stickerLabel: Config.string(),

	/**
	 * Style of sticker represented in the card.
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?string}
	 * @default primary
	 */
	stickerStyle: Config.oneOf([
		'danger',
		'dark',
		'info',
		'light',
		'primary',
		'secondary',
		'success',
		'warning',
	]).value('primary'),

	/**
	 * Shape for the sticker represented in the card.
	 * @instance
	 * @memberof ClayImageCards
	 * @type {?string}
	 * @default rounded
	 */
	stickerShape: Config.oneOf(['circle', 'rounded']).value('rounded'),

	/**
	 * Subtitle of the card.
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	subtitle: Config.string(),

	/**
	 * Title of the card.
	 * @instance
	 * @memberof ClayImageCard
	 * @type {!string}
	 * @default undefined
	 */
	title: Config.string().required(),
};

defineWebComponent('clay-image-card', ClayImageCard);

Soy.register(ClayImageCard, templates);

export {ClayImageCard};
export default ClayImageCard;
