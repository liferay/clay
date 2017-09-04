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
	 * Render Button with ClayIcon in the ClayBadge element.
	 * @instance
	 * @memberof ClayBadge
	 * @type {?bool|undefined}
	 * @default undefined
	 */
	closeable: Config.shapeOf({
		monospaced: Config.bool(),
		spritemap: Config.string().required(),
		symbol: Config.string().required(),
	}),

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
