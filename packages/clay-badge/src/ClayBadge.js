import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayBadge.soy.js';

/**
 * Metal Clay Badge component.
 * @extends Component
 */
class ClayBadge extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayBadge.STATE = {
	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayBadge
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayBadge
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * The label of the badge element.
	 * @default undefined
	 * @instance
	 * @memberof ClayBadge
	 * @type {!string}
	 */
	label: Config.string().required(),

	/**
	 * Badge style color.
	 * @default primary
	 * @instance
	 * @memberof ClayBadge
	 * @type {?string}
	 */
	style: Config.oneOf([
		'danger',
		'info',
		'primary',
		'secondary',
		'success',
		'warning',
	]).value('primary'),
};

defineWebComponent('clay-badge', ClayBadge);

Soy.register(ClayBadge, templates);

export {ClayBadge};
export default ClayBadge;
