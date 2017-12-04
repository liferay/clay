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
	 * Actions in the dropdown on card.
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
	 * Transform card with checkbox.
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @type {?array|undefined}
	 * @default undefined
	 */
	checkbox: Config.shapeOf({
		checked: Config.bool().value(false),
		disabled: Config.bool().value(false),
		indeterminate: Config.bool().value(false),
		name: Config.string(),
		value: Config.string(),
	}),

	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayHorizontalCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

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
	 * Transform title in the url.
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
