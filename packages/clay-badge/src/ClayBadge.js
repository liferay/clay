'use strict';

import 'clay-icon';
import 'clay-link';
import Component from 'metal-component';
import Soy from 'metal-soy';
import { Config } from 'metal-state';

import templates from './ClayBadge.soy.js';

/**
 * Metal Clay Badge component.
 */
class ClayBadge extends Component {}

/**
 * State definition.
 * @static
 * #type {!Object}
 */
ClayBadge.STATE = {
	/**
	 * True or false to activate the close button.
	 * @instance
	 * @memberof ClayBadge
	 * @type {?bool|undefined}
	 * @default undefined
	 */
	closeable: Config.bool(),

	/**
	 * HREF in all badge.
	 * @instance
	 * @memberof ClayBadge
	 * @type {?string|undefined}
	 * default undefined
	 */
	href: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayBadge
	 * @type {?string|undefined}
	 * default undefined
	 */
	id: Config.string(),

	/**
	 * The label of the badge element.
	 * @instance
	 * @memberof ClayBadge
	 * @type {?string|html|undefined}
	 * default undefined
	 */
	label: Config.any(),

	/**
	 * The size of the badge element.
	 * @instance
	 * @memberof ClayBadge
	 * @type {?string|undefined}
	 * default undefined
	 */
	size: Config.oneOf(['sm', 'lg']),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayBadge
	 * @type {!string}
	 * @default undefined
	 */
	spritemap: Config.string(),

	/**
	 * Badge style color.
	 * @instance
	 * @memberof ClayBadge
	 * @type {?string|undefined}
	 * default undefined
	 */
	style: Config.oneOf([
		'primary',
		'secondary',
		'success',
		'info',
		'warning',
		'danger',
		'light',
		'dark',
	]).value('primary'),
};

Soy.register(ClayBadge, templates);

export { ClayBadge };
export default ClayBadge;
