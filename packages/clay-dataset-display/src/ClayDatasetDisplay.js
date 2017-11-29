import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayDatasetDisplay.soy.js';

/**
 * Metal ClayDatasetDisplay component.
 */
class ClayDatasetDisplay extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayDatasetDisplay.STATE = {
	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),
};

defineWebComponent('clay-dataset-display', ClayDatasetDisplay);

Soy.register(ClayDatasetDisplay, templates);

export {ClayDatasetDisplay};
export default ClayDatasetDisplay;
