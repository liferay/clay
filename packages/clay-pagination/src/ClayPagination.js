import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayPagination.soy.js';

/**
 * Metal ClayPagination component.
 */
class ClayPagination extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayPagination.STATE = {
	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayPagination
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayPagination
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),
};

defineWebComponent('clay-pagination', ClayPagination);

Soy.register(ClayPagination, templates);

export {ClayPagination};
export default ClayPagination;
