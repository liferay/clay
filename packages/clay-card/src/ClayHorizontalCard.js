import 'clay-checkbox';
import 'clay-dropdown';
import 'clay-link';
import 'clay-sticker';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayHorizontalCard.soy.js';

/**
 * Metal ClayHorizontalCard component.
 */
class ClayHorizontalCard extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayHorizontalCard.STATE = {
	/**
	 * List of items to display in the actions menu.
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @type {?array|undefined}
	 * @default undefined
	 */
	actionItems: Config.arrayOf(
		Config.shapeOf({
			label: Config.string().required(),
			separator: Config.bool().value(false),
			url: Config.string(),
		})
	),

	/**
	 * Flag to indicate if the card is disabled or not.
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @type {?bool|undefined}
	 * @default false
	 */
	disabled: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Icon of the card.
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @type {?string|undefined}
	 * @default folder
	 */
	icon: Config.string().value('folder'),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * Name to be applied to the input element.
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	inputName: Config.string(),

	/**
	 * Value to be applied to the input element.
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	inputValue: Config.string(),

	/**
	 * Flag to indicate if the card is selectable or not.
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @type {?bool|undefined}
	 * @default false
	 */
	selectable: Config.bool().value(false),

	/**
	 * Flag to indicate if the card is selected or not.
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @type {?bool|undefined}
	 * @default false
	 */
	selected: Config.bool().value(false),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @type {!string}
	 * @default undefined
	 */
	spritemap: Config.string().required(),

	/**
	 * Title of the card.
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	title: Config.string(),

	/**
	 * Url to be applied to the title of the card.
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @type {?string}
	 * @default undefined
	 */
	url: Config.string(),
};

defineWebComponent('clay-horizontal-card', ClayHorizontalCard);

Soy.register(ClayHorizontalCard, templates);

export {ClayHorizontalCard};
export default ClayHorizontalCard;
