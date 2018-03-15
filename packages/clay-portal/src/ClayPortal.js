import Component from 'metal-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayPortal.soy.js';

/**
 * Metal ClayPortal component.
 * @extends Component
 */
class ClayPortal extends Component {}

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
};

Soy.register(ClayPortal, templates);

export {ClayPortal};
export default ClayPortal;
