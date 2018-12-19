import 'clay-icon';
import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClaySticker.soy.js';

/**
 * Implementation of the Metal Clay Link.
 * @extends ClayComponent
 */
class ClaySticker extends ClayComponent {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClaySticker.STATE = {
	/**
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClaySticker
	 * @type {?object}
	 */
	data: Config.object(),

	/**
	 * Object that wires events with default listeners
	 * @default undefined
	 * @instance
	 * @memberof ClaySticker
	 * @review
	 * @type {?(object|undefined)}
	 */
	defaultEventHandler: Config.object(),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClaySticker
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Render ClayIcon in the ClaySticker element.
	 * @default undefined
	 * @instance
	 * @memberof ClaySticker
	 * @type {?(string|undefined)}
	 */
	icon: Config.string(),

	/**
	 * Id to be applied to the sticker element.
	 * @default undefined
	 * @instance
	 * @memberof ClaySticker
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * Alternate text of the image.
	 * @default undefined
	 * @instance
	 * @memberof ClaySticker
	 * @type {?(string|undefined)}
	 */
	imageAlt: Config.string(),

	/**
	 * Source of the image to be rendered inside the sticker.
	 * @default undefined
	 * @instance
	 * @memberof ClaySticker
	 * @type {?(string|undefined)}
	 */
	imageSrc: Config.string(),

	/**
	 * Sets the text or HTML to be rendered inside sticker.
	 * @default undefined
	 * @instance
	 * @memberof ClaySticker
	 * @type {?(html|string|undefined)}
	 */
	label: Config.any(),

	/**
	 * Flag to indicate if the sticker should be positioned on the outside
	 * corners when position is defined.
	 * @default false
	 * @instance
	 * @memberof ClaySticker
	 * @type {?bool}
	 */
	outside: Config.bool().value(false),

	/**
	 * Position of the sticker in relation to the contents.
	 * Available positions are `bottom-left`, `bottom-right`, `top-left`
	 * and `top-right`.
	 * @default undefined
	 * @instance
	 * @memberof ClaySticker
	 * @type {?(string|undefined)}
	 */
	position: Config.oneOf([
		'bottom-left',
		'bottom-right',
		'top-left',
		'top-right',
	]),

	/**
	 * Sticker size. Available sizes are `sm`, `lg`, `xl`.
	 * @default undefined
	 * @instance
	 * @memberof ClaySticker
	 * @type {?(string|undefined)}
	 */
	size: Config.oneOf(['lg', 'sm', 'xl']),

	/**
	 * Shape of the sticker. Available shapes are `circle`, `rounded`.
	 * @default rounded
	 * @instance
	 * @memberof ClaySticker
	 * @type {?string}
	 */
	shape: Config.oneOf(['circle', 'rounded']).value('rounded'),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClaySticker
	 * @type {?(string|undefined)}
	 */
	spritemap: Config.string(),

	/**
	 * Sticker style. Available sizes are: `danger`, `dark`, `info`, `light`,
	 * `primary`, `secondary`, `success`, `warning`.
	 * @default primary
	 * @instance
	 * @memberof ClaySticker
	 * @type {?string}
	 */
	style: Config.oneOf([
		'danger',
		'dark',
		'info',
		'light',
		'primary',
		'secondary',
		'success',
		'unstyled',
		'warning',
	]).value('primary'),

	/**
	 * Title to be applied to the sticker element.
	 * @default undefined
	 * @instance
	 * @memberof ClaySticker
	 * @type {?(string|undefined)}
	 */
	title: Config.string(),
};

defineWebComponent('clay-sticker', ClaySticker);

Soy.register(ClaySticker, templates);

export {ClaySticker};
export default ClaySticker;
