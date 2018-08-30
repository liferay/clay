import 'clay-icon';
import 'clay-sticker';
import './ClayCardBase';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import actionItemsValidator from './action_items_validator';
import templates from './ClayFileCard.soy.js';

/**
 * Metal ClayFileCard component.
 * @extends Component
 */
class ClayFileCard extends Component {
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
ClayFileCard.STATE = {
	/**
	 * List of items to display in the actions menu.
	 * @default undefined
	 * @instance
	 * @memberof ClayFileCard
	 * @type {?(array|undefined)}
	 */
	actionItems: actionItemsValidator,

	/**
	 * Flag to indicate if the card is disabled or not.
	 * @default false
	 * @instance
	 * @memberof ClayFileCard
	 * @type {?bool}
	 */
	disabled: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayFileCard
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Url to be applied to the title of the card.
	 * @default undefined
	 * @instance
	 * @memberof ClayFileCard
	 * @type {?(string|undefined)}
	 */
	href: Config.string(),

	/**
	 * Icon to be rendered in the visual area of the card.
	 * @default documents-and-media
	 * @instance
	 * @memberof ClayFileCard
	 * @type {?string}
	 */
	icon: Config.string().value('documents-and-media'),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayFileCard
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * Name to be applied to the input element.
	 * @instance
	 * @memberof ClayFileCard
	 * @type {?(string|undefined)}
	 * @default undefined
	 */
	inputName: Config.string(),

	/**
	 * Value to be applied to the input element.
	 * @default undefined
	 * @instance
	 * @memberof ClayFileCard
	 * @type {?(string|undefined)}
	 */
	inputValue: Config.string(),

	/**
	 * Labels of the card.
	 * @default undefined
	 * @instance
	 * @memberof ClayFileCard
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
	 * @memberof ClayCardBase
	 * @type {?(object|undefined)}
	 */
	labelStylesMap: Config.object(),

	/**
	 * Flag to indicate if the card is selectable or not.
	 * @default false
	 * @instance
	 * @memberof ClayFileCard
	 * @type {?bool}
	 */
	selectable: Config.bool().value(false),

	/**
	 * Flag to indicate if the card is selected or not.
	 * @default false
	 * @instance
	 * @memberof ClayFileCard
	 * @type {?bool}
	 */
	selected: Config.bool().value(false),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayFileCard
	 * @type {!string}
	 */
	spritemap: Config.string().required(),

	/**
	 * Label for the sticker represented in the card.
	 * @default undefined
	 * @instance
	 * @memberof ClayFileCard
	 * @type {?(string|undefined)}
	 */
	stickerLabel: Config.string(),

	/**
	 * Shape for the sticker represented in the card.
	 * @default rounded
	 * @instance
	 * @memberof ClayFileCard
	 * @type {?string}
	 */
	stickerShape: Config.oneOf(['circle', 'rounded']).value('rounded'),

	/**
	 * Style of sticker represented in the card.
	 * @default primary
	 * @instance
	 * @memberof ClayFileCard
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
	 * Subtitle of the card.
	 * @default undefined
	 * @instance
	 * @memberof ClayFileCard
	 * @type {?(string|undefined)}
	 */
	subtitle: Config.string(),

	/**
	 * Title of the card.
	 * @default undefined
	 * @instance
	 * @memberof ClayFileCard
	 * @type {!string}
	 */
	title: Config.string().required(),
};

defineWebComponent('clay-file-card', ClayFileCard);

Soy.register(ClayFileCard, templates);

export {ClayFileCard};
export default ClayFileCard;
