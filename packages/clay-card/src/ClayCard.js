import './ClayCardBase';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayCard.soy.js';

/**
 * Metal ClayCard component.
 */
class ClayCard extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayCard.STATE = {
	/**
	 * Actions in the dropdown on card.
	 * @instance
	 * @memberof ClayCard
	 * @type {?array|undefined}
	 * @default undefined
	 */
	actionsItems: Config.arrayOf(
		Config.shapeOf({
			label: Config.string().required(),
			separator: Config.bool().value(false),
			url: Config.string(),
		})
	),

	/**
	 * Transform card with checkbox.
	 * @instance
	 * @memberof ClayCard
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
	 * @memberof ClayCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * Render ClayIcon in the background element.
	 * @instance
	 * @memberof ClayCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	icon: Config.string(),

	/**
	 * Alt the image.
	 * @instance
	 * @memberof ClayCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	imageAlt: Config.string(),

	/**
	 * The src to be applied to the background or user card image.
	 * @instance
	 * @memberof ClayCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	imageSrc: Config.string(),

	/**
	 * Render label in the ClayLabel element.
	 * @instance
	 * @memberof ClayCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	label: Config.string(),

	/**
	 * Style of the ClayLabel.
	 * @instance
	 * @memberof ClayCard
	 * @type {?string}
	 * @default secondary
	 */
	labelStyle: Config.oneOf([
		'danger',
		'info',
		'secondary',
		'success',
		'warning',
	]).value('secondary'),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayCard
	 * @type {!string}
	 * @default undefined
	 */
	spritemap: Config.string().required(),

	/**
	 * Subtitle of the card.
	 * @instance
	 * @memberof ClayCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	subtitle: Config.string(),

	/**
	 * Title of the card.
	 * @instance
	 * @memberof ClayCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	title: Config.string(),

	/**
	 * Render label in the ClaySticker element.
	 * @instance
	 * @memberof ClayCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	type: Config.string(),

	/**
	 * Style of the ClaySticker element.
	 * @instance
	 * @memberof ClayCard
	 * @type {?string}
	 * @default primary
	 */
	typeStyle: Config.oneOf([
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
	 * Transform title in the url.
	 * @instance
	 * @memberof ClayCard
	 * @type {?string}
	 * @default undefined
	 */
	url: Config.string(),
};

defineWebComponent('clay-card', ClayCard);

Soy.register(ClayCard, templates);

export {ClayCard};
export default ClayCard;
