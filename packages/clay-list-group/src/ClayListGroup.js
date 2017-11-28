import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayListGroup.soy.js';

/**
 * Metal ClayListGroup component.
 */
class ClayListGroup extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayListGroup.STATE = {
	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayListGroup
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayListGroup
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),
};

defineWebComponent('clay-list-group', ClayListGroup);

Soy.register(ClayListGroup, templates);

export {ClayListGroup};
export default ClayListGroup;
