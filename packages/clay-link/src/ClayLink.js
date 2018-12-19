import 'clay-icon';
import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayLink.soy.js';

/**
 * Implementation of the Metal Clay Link.
 * @extends ClayComponent
 */
class ClayLink extends ClayComponent {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayLink.STATE = {
	/**
	 * Aria label attribute for the anchor element.
	 * @default undefined
	 * @instance
	 * @memberof ClayLink
	 * @type {?(string|undefined)}
	 */
	ariaLabel: Config.string(),

	/**
	 * Aria Expanded attribute for the anchor element.
	 * @default undefined
	 * @instance
	 * @memberof ClayLink
	 * @type {?(bool|undefined)}
	 */
	ariaExpanded: Config.bool(),

	/**
	 * The css class to act as a button. If this is defined `style` param is
	 * ignored.
	 * @default undefined
	 * @instance
	 * @memberof ClayLink
	 * @type {?(string|undefined)}
	 */
	buttonStyle: Config.oneOf(['link', 'primary', 'secondary']),

	/**
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayLink
	 * @type {?object}
	 */
	data: Config.object(),

	/**
	 * Object that wires events with default listeners
	 * @default undefined
	 * @instance
	 * @memberof ClayLink
	 * @review
	 * @type {?(object|undefined)}
	 */
	defaultEventHandler: Config.object(),

	/**
	 * Sets the download attribute on the anchor tag.
	 * @default undefined
	 * @instance
	 * @memberof ClayLink
	 * @type {?(string|undefined)}
	 */
	download: Config.string(),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayLink
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Sets the HTML attribute href on the anchor tag.
	 * @default undefined
	 * @instance
	 * @memberof ClayLink
	 * @type {?(string|undefined)}
	 */
	href: Config.string(),

	/**
	 * Icon to be rendered in the link.
	 * @default undefined
	 * @instance
	 * @memberof ClayLink
	 * @type {?(string|undefined)}
	 */
	icon: Config.string(),

	/**
	 * Render position of the ClayIcon in the ClayLink element.
	 * @default left
	 * @instance
	 * @memberof ClayLink
	 * @type {?string}
	 */
	iconAlignment: Config.oneOf(['left', 'right']).value('left'),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayLink
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * Alternative text of the image to be rendered inside the link.
	 * @default undefined
	 * @instance
	 * @memberof ClayLink
	 * @type {?(string|undefined)}
	 */
	imageAlt: Config.string(),

	/**
	 * Source of the image to be rendered inside the link.
	 * @default undefined
	 * @instance
	 * @memberof ClayLink
	 * @type {?(string|undefined)}
	 */
	imageSrc: Config.string(),

	/**
	 * Sets the text or HTML to be rendered inside the anchor tag.
	 * @default undefined
	 * @instance
	 * @memberof ClayLink
	 * @type {?(html|string|undefined)}
	 */
	label: Config.any(),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayLink
	 * @type {?string|undefined}
	 */
	spritemap: Config.string(),

	/**
	 * The css class that colors the button.
	 * @default undefined
	 * @instance
	 * @memberof ClayLink
	 * @type {?(string|undefined)}
	 */
	style: Config.oneOf(['secondary']),

	/**
	 * Sets the HTML attribute target on the anchor tag.
	 * @default undefined
	 * @instance
	 * @memberof ClayLink
	 * @type {?(string|undefined)}
	 */
	target: Config.oneOf(['_blank', '_self']),

	/**
	 * Sets the HTML attribute title on the anchor tag.
	 * @default undefined
	 * @instance
	 * @memberof ClayLink
	 * @type {?(string|undefined)}
	 */
	title: Config.string(),
};

defineWebComponent('clay-link', ClayLink);

Soy.register(ClayLink, templates);

export {ClayLink};
export default ClayLink;
