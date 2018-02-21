import 'clay-checkbox';
import 'clay-label';
import 'clay-link';
import 'clay-sticker';
// eslint-disable-next-line
import { ClayActionsDropdown } from 'clay-dropdown';
import {Config} from 'metal-state';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';

import actionItemsValidator from './action_items_validator';
import templates from './ClayCardBase.soy.js';

/**
 * Metal ClayCardBase component.
 */
class ClayCardBase extends Component {
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
	 * List of items to display in the actions menu.
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?array|undefined}
	 * @default undefined
	 */
	actionItems: actionItemsValidator,

	/**
	 * Content Renderer name of card.
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?array}
	 * @default image
	 */
	contentRenderer: Config.oneOf(['image', 'file', 'user']).value('image'),

	/**
	 * Flag to indicate if the card is disabled or not.
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?bool}
	 * @default false
	 */
	disabled: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Group Index the card belongs to.
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	groupName: Config.string(),

	/**
	 * Url to be applied to the title of the card.
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	href: Config.string(),

	/**
	 * Icon to be rendered in the visual area of the card.
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	icon: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * Alternate text of the image.
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	imageAlt: Config.string(),

	/**
	 * Source of the image to be rendered in the visual area of the card.
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	imageSrc: Config.string(),

	/**
	 * Name to be applied to the input element.
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	inputName: Config.string(),

	/**
	 * Value to be applied to the input element.
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	inputValue: Config.string(),

	/**
	 * Labels of the card.
	 * @instance
	 * @memberof ClayCardBase
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
	 * @memberof ClayCardBase
	 * @type {?object|undefined}
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
	 * @type {?string|undefined}
	 * @default undefined
	 */
	spritemap: Config.string(),

	/**
	 * Label for the sticker represented in the card.
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?string|undefined}
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
	 * @type {?string|undefined}
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
