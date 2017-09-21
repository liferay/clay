import 'clay-icon';
import Component from 'metal-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayProgressBar.soy.js';

/**
 * Metal Clay Button component.
 */
class ClayProgressBar extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayProgressBar.STATE = {
  /**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayProgressBar
	 * @type {?string|undefined}
	 * @default undefined
	 */
  id: Config.string(),

  /**
	* The maximum value of the progress bar.
	 * @instance
	 * @memberof ClayProgressBar
	 * @type {?number}
	 * @default undefined
	 */
  maxValue: Config.number(),

  /**
	* The minimum value of the progress bar.
	 * @instance
	 * @memberof ClayProgressBar
	 * @type {?number}
	 * @default undefined
	 */
  minValue: Config.number(),

  /**
	* The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayProgressBar
	 * @type {!string}
	 * @default undefined
	 */
  spritemap: Config.string(),

  /**
	 * Progress bar state. Completed state can be defined here but also is
	 * automatically set if value is equal to maxValue.
	 * @instance
	 * @memberof ClayProgressBar
	 * @type {?string}
	 * @default undefined
	 */
  status: Config.oneOf(['complete', 'warning']),

  /**
	 * The progress value of the bar.
	 * @instance
	 * @memberof ClayProgressBar
	 * @type {?number}
	 * @default undefined
	 */
  value: Config.number(),
};

Soy.register(ClayProgressBar, templates);

export {ClayProgressBar};
export default ClayProgressBar;
