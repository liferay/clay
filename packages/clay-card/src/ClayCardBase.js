import 'clay-checkbox';
import 'clay-label';
import 'clay-link';
import 'clay-sticker';
// eslint-disable-next-line
import { ClayActionsDropdown } from 'clay-dropdown';
import {Config} from 'metal-state';
import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';

import actionItemsValidator from './action_items_validator';
import templates from './ClayCardBase.soy.js';

/**
 * Metal ClayCardBase component.
 * @extends ClayComponent
 */
class ClayCardBase extends ClayComponent {
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
ClayCardBase.STATE = {
	/**
	 * Aria label attribute for the action element.
	 * @default undefined
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?(string|undefined)}
	 */
	actionAriaLabel: Config.string(),

	/**
	 * List of items to display in the actions menu.
	 * @default undefined
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?(array|undefined)}
	 */
	actionItems: actionItemsValidator,

	/**
	 * Content Renderer name of card.
	 * @default image
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?array}
	 */
	contentRenderer: Config.oneOf(['image', 'file', 'user']).value('image'),

	/**
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?object}
	 */
	data: Config.object(),

	/**
	 * Object that wires events with default listeners
	 * @default undefined
	 * @instance
	 * @memberof ClayCardBase
	 * @review
	 * @type {?(object|undefined)}
	 */
	defaultEventHandler: Config.object(),

	/**
	 * Flag to indicate if the card is disabled or not.
	 * @default false
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?bool}
	 */
	disabled: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Url to be applied to the title of the card.
	 * @default undefined
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?(string|undefined)}
	 */
	href: Config.string(),

	/**
	 * Icon to be rendered in the visual area of the card.
	 * @default undefined
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?(string|undefined)}
	 */
	icon: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * Alternate text of the image.
	 * @default undefined
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?(string|undefined)}
	 */
	imageAlt: Config.string(),

	/**
	 * Source of the image to be rendered in the visual area of the card.
	 * @default undefined
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?(string|undefined)}
	 */
	imageSrc: Config.string(),

	/**
	 * Name to be applied to the input element.
	 * @default undefined
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?(string|undefined)}
	 */
	inputName: Config.string(),

	/**
	 * Value to be applied to the input element.
	 * @default undefined
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?(string|undefined)}
	 */
	inputValue: Config.string(),

	/**
	 * Labels of the card.
	 * @default undefined
	 * @instance
	 * @memberof ClayCardBase
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
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?(object|undefined)}
	 * @default undefined
	 */
	labelStylesMap: Config.object(),

	/**
	 * Flag to indicate if the card is selectable or not.
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?bool}
	 * @default false
	 */
	selectable: Config.bool().value(false),

	/**
	 * Flag to indicate if the card is selected or not.
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?bool}
	 * @default false
	 */
	selected: Config.bool().value(false),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?(string|undefined)}
	 * @default undefined
	 */
	spritemap: Config.string(),

	/**
	 * CSS classes for the inside the sticker.
	 * @default undefined
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?(string|undefined)}
	 */
	stickerClasses: Config.string(),

	/**
	 * Icon to be renderer inside the sticker.
	 * @default undefined
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?(string|undefined)}
	 */
	stickerIcon: Config.string(),

	/**
	 * Alternate text of the image to be renderer inside the sticker.
	 * @default undefined
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?(string|undefined)}
	 */
	stickerImageAlt: Config.string(),

	/**
	 * Source of the image to be rendered inside the sticker.
	 * @default undefined
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?(string|undefined)}
	 */
	stickerImageSrc: Config.string(),

	/**
	 * Label for the sticker represented in the card.
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?(string|undefined)}
	 * @default undefined
	 */
	stickerLabel: Config.string(),

	/**
	 * Shape for the sticker represented in the card.
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?string}
	 * @default rounded
	 */
	stickerShape: Config.oneOf(['circle', 'rounded']).value('rounded'),

	/**
	 * Style of sticker represented in the card.
	 * @instance
	 * @memberof ClayCardBase
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
	 * Subtitle of the card.
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?(string|undefined)}
	 * @default undefined
	 */
	subtitle: Config.string(),

	/**
	 * Title of the card.
	 * @instance
	 * @memberof ClayCardBase
	 * @type {!string}
	 * @default undefined
	 */
	title: Config.string().required(),
};

defineWebComponent('clay-card', ClayCardBase);

Soy.register(ClayCardBase, templates);

export {ClayCardBase};
export default ClayCardBase;
