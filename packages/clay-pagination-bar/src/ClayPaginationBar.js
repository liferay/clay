import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayPaginationBar.soy.js';

/**
 * Metal ClayPaginationBar component.
 */
class ClayPaginationBar extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayPaginationBar.STATE = {
	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayPaginationBar
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayPaginationBar
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),
};

defineWebComponent('clay-pagination-bar', ClayPaginationBar);

Soy.register(ClayPaginationBar, templates);

export {ClayPaginationBar};
export default ClayPaginationBar;
