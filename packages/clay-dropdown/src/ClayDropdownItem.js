import 'clay-button';
import 'clay-checkbox';
import 'clay-icon';
import 'clay-link';
import 'clay-radio';
import './ClayDropdownBase';
import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayDropdownItem.soy.js';

/**
 * Implementation of the Metal Clay Icon.
 * @extends Component
 */
class ClayDropdownItem extends ClayComponent {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayDropdownItem.STATE = {
	/**
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayDropdownItem
	 * @type {?object}
	 */
	data: Config.object(),
};

defineWebComponent('clay-dropdown-item', ClayDropdownItem);

Soy.register(ClayDropdownItem, templates);

export {ClayDropdownItem};
export default ClayDropdownItem;