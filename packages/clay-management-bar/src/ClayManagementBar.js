import 'clay-checkbox';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayManagementBar.soy.js';

/**
 * Metal ClayManagementBar component.
 */
class ClayManagementBar extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayManagementBar.STATE = {
	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayManagementBar
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),
};

defineWebComponent('clay-management-bar', ClayManagementBar);

Soy.register(ClayManagementBar, templates);

export {ClayManagementBar};
export default ClayManagementBar;
