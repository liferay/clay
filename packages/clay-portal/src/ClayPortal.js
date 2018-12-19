import ClayComponent from 'clay-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayPortal.soy.js';

/**
 * Metal ClayPortal component.
 * @extends ClayComponent
 */
class ClayPortal extends ClayComponent {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayPortal.STATE = {
	/**
	 * @default undefined
	 * @instance
	 * @memberof ClayPortal
	 * @type {!(html|string)}
	 * CSS classes to be applied to the element.
	 */
	content: Config.required(),

	/**
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayPortal
	 * @type {?object}
	 */
	data: Config.object(),

	/**
	 * Object that wires events with default listeners
	 * @default undefined
	 * @instance
	 * @memberof ClayPortal
	 * @review
	 * @type {?(object|undefined)}
	 */
	defaultEventHandler: Config.object(),
};

Soy.register(ClayPortal, templates);

export {ClayPortal};
export default ClayPortal;
