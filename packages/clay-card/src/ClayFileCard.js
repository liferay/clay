import 'clay-icon';
import 'clay-sticker';
import './ClayCard';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import actionItemsValidator from './action_items_validator';
import templates from './ClayFileCard.soy.js';

/**
 * Metal ClayFileCard component.
 */
class ClayFileCard extends Component {
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
ClayFileCard.STATE = {
	/**
	 * List of items to display in the actions menu.
	 * @instance
	 * @memberof ClayFileCard
	 * @type {?array|undefined}
	 * @default undefined
	 */
	actionItems: actionItemsValidator,

	/**
	 * Flag to indicate if the card is disabled or not.
	 * @instance
	 * @memberof ClayFileCard
	 * @type {?bool}
	 * @default false
	 */
	disabled: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayFileCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Type of the file represented in the card.
	 * @instance
	 * @memberof ClayFileCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	fileType: Config.string(),

	/**
	 * Style of type of the file represented in the card.
	 * @instance
	 * @memberof ClayFileCard
	 * @type {?string}
	 * @default primary
	 */
	fileTypeStyle: Config.oneOf([
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
	 * Url to be applied to the title of the card.
	 * @instance
	 * @memberof ClayFileCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	href: Config.string(),

	/**
	 * Icon to be rendered in the visual area of the card.
	 * @instance
	 * @memberof ClayFileCard
	 * @type {?string}
	 * @default documents-and-media
	 */
	icon: Config.string().value('documents-and-media'),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayFileCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * Name to be applied to the input element.
	 * @instance
	 * @memberof ClayFileCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	inputName: Config.string(),

	/**
	 * Value to be applied to the input element.
	 * @instance
	 * @memberof ClayFileCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	inputValue: Config.string(),

	/**
	 * Labels of the card.
	 * @instance
	 * @memberof ClayFileCard
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
	 * @memberof ClayCard
	 * @type {?object|undefined}
	 * @default undefined
	 */
	labelStylesMap: Config.object(),

	/**
	 * Flag to indicate if the card is selectable or not.
	 * @instance
	 * @memberof ClayFileCard
	 * @type {?bool}
	 * @default false
	 */
	selectable: Config.bool().value(false),

	/**
	 * Flag to indicate if the card is selected or not.
	 * @instance
	 * @memberof ClayFileCard
	 * @type {?bool}
	 * @default false
	 */
	selected: Config.bool().value(false),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayFileCard
	 * @type {!string}
	 * @default undefined
	 */
	spritemap: Config.string().required(),

	/**
	 * Subtitle of the card.
	 * @instance
	 * @memberof ClayFileCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	subtitle: Config.string(),

	/**
	 * Title of the card.
	 * @instance
	 * @memberof ClayFileCard
	 * @type {!string}
	 * @default undefined
	 */
	title: Config.string().required(),
};

defineWebComponent('clay-file-card', ClayFileCard);

Soy.register(ClayFileCard, templates);

export {ClayFileCard};
export default ClayFileCard;
