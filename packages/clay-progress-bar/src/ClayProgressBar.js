import 'clay-icon';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayProgressBar.soy.js';

/**
 * Metal Clay Button component.
 * @extends Component
 */
class ClayProgressBar extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayProgressBar.STATE = {
	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayProgressBar
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayProgressBar
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayProgressBar
	 * @type {!string}
	 */
	spritemap: Config.string(),

	/**
	 * Progress bar state. Completed state can be defined here but also is
	 * automatically set if value is equal to maxValue.
	 * @default undefined
	 * @instance
	 * @memberof ClayProgressBar
	 * @type {?string}
	 */
	status: Config.oneOf(['complete', 'warning']),

	/**
	 * The progress value of the bar.
	 * @default undefined
	 * @instance
	 * @memberof ClayProgressBar
	 * @type {?number}
	 */
	value: {
		validator: value => value >= 0 && value <= 100,
		value: 0,
	},
};

defineWebComponent('clay-progress-bar', ClayProgressBar);

Soy.register(ClayProgressBar, templates);

export {ClayProgressBar};
export default ClayProgressBar;
