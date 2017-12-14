import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayGrid.soy.js';

/**
 * Metal ClayGrid component.
 */
class ClayGrid extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayGrid.STATE = {
	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayGrid
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayGrid
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),
};

defineWebComponent('clay-grid', ClayGrid);

Soy.register(ClayGrid, templates);

export {ClayGrid};
export default ClayGrid;
