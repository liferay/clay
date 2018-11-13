import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayLoadingIndicator.soy.js';

/**
 * Implementation of the Clay loading indicator
 * @extends Component
 */
class ClayLoadingIndicator extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayLoadingIndicator.STATE = {
	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayLoadingIndicator
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Flag to indicate if indicator should be light colored
	 * @default false
	 * @instance
	 * @memberof ClayLoadingIndicator
	 * @type {?bool}
	 */
	light: Config.bool().value(false),

	/**
	 * Flag to indicate if the indicator should be small
	 * @default false
	 * @instance
	 * @memberof ClayLoadingIndicator
	 * @type {?bool}
	 */
	small: Config.bool().value(false),
};

defineWebComponent('clay-loading-indicator', ClayLoadingIndicator);

Soy.register(ClayLoadingIndicator, templates);

export {ClayLoadingIndicator};
export default ClayLoadingIndicator;
