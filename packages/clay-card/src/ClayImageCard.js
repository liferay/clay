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
 * @extends Component
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
	 * @default undefined
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?(array|object|undefined)}
	 */
	actionItems: actionItemsValidator,

	/**
	 * Flag to indicate if the card is disabled or not.
	 * @default false
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?bool}
	 */
	disabled: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Url to be applied to the title of the card.
	 * @default undefined
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?(string|undefined)}
	 */
	href: Config.string(),

	/**
	 * Icon to be rendered in the visual area of the card.
	 * @default undefined
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?(string|undefined)}
	 */
	icon: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * Alternate text of the image.
	 * @default undefined
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?(string|undefined)}
	 */
	imageAlt: Config.string(),

	/**
	 * Source of the image to be rendered in the visual area of the card.
	 * @default undefined
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?(string|undefined)}
	 */
	imageSrc: Config.string(),

	/**
	 * Name to be applied to the input element.
	 * @default undefined
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?(string|undefined)}
	 */
	inputName: Config.string(),

	/**
	 * Value to be applied to the input element.
	 * @default undefined
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?(string|undefined)}
	 */
	inputValue: Config.string(),

	/**
	 * Labels of the card.
	 * @default undefined
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?(array|undefined)}
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
	 * @default undefined
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?(object|undefined)}
	 */
	labelStylesMap: Config.object(),

	/**
	 * Flag to indicate if the card is selectable or not.
	 * @default false
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?bool}
	 */
	selectable: Config.bool().value(false),

	/**
	 * Flag to indicate if the card is selected or not.
	 * @default false
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?bool}
	 */
	selected: Config.bool().value(false),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?(string|undefined)}
	 */
	spritemap: Config.string(),

	/**
	 * Label for the sticker represented in the card.
	 * @default undefined
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?(string|undefined)}
	 */
	stickerLabel: Config.string(),

	/**
	 * Style of sticker represented in the card.
	 * @default primary
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?string}
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
	 * @default rounded
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?string}
	 */
	stickerShape: Config.oneOf(['circle', 'rounded']).value('rounded'),

	/**
	 * Subtitle of the card.
	 * @default undefined
	 * @instance
	 * @memberof ClayImageCard
	 * @type {?(string|undefined)}
	 */
	subtitle: Config.string(),

	/**
	 * Title of the card.
	 * @default undefined
	 * @instance
	 * @memberof ClayImageCard
	 * @type {!string}
	 */
	title: Config.string().required(),
};

defineWebComponent('clay-image-card', ClayImageCard);

Soy.register(ClayImageCard, templates);

export {ClayImageCard};
export default ClayImageCard;
