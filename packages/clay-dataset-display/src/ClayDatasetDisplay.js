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

	/**
	 * Items of the dataset.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?array|undefined}
	 * @default undefined
	 */
	items: Config.array(),

	/**
	 * Flag to indicate if the dataset is selectable.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?bool|undefined}
	 * @default false
	 */
	selectable: Config.bool().value(false),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?string|undefined}
	 * @default undefined
	 */
	spritemap: Config.string(),

	/**
	 * Header of the list.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?string|undefined}
	 * @default undefined
	 */
	title: Config.string(),

	/**
	 * Type of the view of the list.
	 * @instance
	 * @memberof ClayDatasetDisplay
	 * @type {?string|undefined}
	 * @default undefined
	 */
	viewType: Config.string(),
};

defineWebComponent('clay-dataset-display', ClayDatasetDisplay);

Soy.register(ClayDatasetDisplay, templates);

export {ClayDatasetDisplay};
export default ClayDatasetDisplay;
