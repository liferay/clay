import Component from 'metal-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayPortal.soy.js';

/**
 * Metal ClayPortal component.
 */
class ClayPortal extends Component {
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayPortal.STATE = {
	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayPortal
	 * @type {?string|undefined}
	 * @default undefined
	 */
	content: Config.required(),
};

Soy.register(ClayPortal, templates);

export {ClayPortal};
export default ClayPortal;
