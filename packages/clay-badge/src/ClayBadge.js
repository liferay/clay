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
	 * @type {!string}
	 * default undefined
	 */
	label: Config.string().required(),

	/**
	 * Badge style color.
	 * @instance
	 * @memberof ClayBadge
	 * @type {?string}
	 * default primary
	 */
	style: Config.oneOf([
		'danger',
		'dark',
		'info',
		'light',
		'primary',
		'secondary',
		'success',
		'warning',
	]).value('primary'),
};

Soy.register(ClayBadge, templates);

export { ClayBadge };
export default ClayBadge;
