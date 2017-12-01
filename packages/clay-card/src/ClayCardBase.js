import 'clay-checkbox';
import 'clay-dropdown';
import 'clay-label';
import 'clay-link';
import 'clay-sticker';
import Component from 'metal-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayCardBase.soy.js';

/**
 * Metal ClayCardBase component.
 */
class ClayCardBase extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayCardBase.STATE = {
	/**
	 * Actions in the dropdown on card.
	 * @instance
	 * @memberof ClayCardBase
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
	 * @memberof ClayCardBase
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
	 * @memberof ClayCardBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * Render ClayIcon in the background element.
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	icon: Config.string(),

	/**
	 * Alt the image.
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	imageAlt: Config.string(),

	/**
	 * The src to be applied to the background or user card image.
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	imageSrc: Config.string(),

	/**
	 * Render label in the ClayLabel element.
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	label: Config.string(),

	/**
	 * Style of the ClayLabel.
	 * @instance
	 * @memberof ClayCardBase
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
	 * @memberof ClayCardBase
	 * @type {!string}
	 * @default undefined
	 */
	spritemap: Config.string().required(),

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
	 * @type {?string|undefined}
	 * @default undefined
	 */
	title: Config.string(),

	/**
	 * Render label in the ClaySticker element.
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	type: Config.string(),

	/**
	 * Style of the ClaySticker element.
	 * @instance
	 * @memberof ClayCardBase
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
	 * @memberof ClayCardBase
	 * @type {?string}
	 * @default undefined
	 */
	url: Config.string(),

	/**
	 * Variant of card.
	 * @instance
	 * @memberof ClayCardBase
	 * @type {?array|undefined}
	 * @default image
	 */
	variant: Config.oneOf(['image', 'file', 'user', 'folder']).value('image'),
};

Soy.register(ClayCardBase, templates);

export {ClayCardBase};
export default ClayCardBase;
