import 'clay-button';
import 'clay-icon';
import Component from 'metal-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayAlert.soy.js';

/**
 * Metal Clay Alert component.
 */
class ClayAlert extends Component {
  /**
	 * Handles onclick event for the close button in case of closeable alert.
	 * @param {!Event} event
	 * @private
	 */
  _handleCloseClick(event) {
    this.emit('close');
  }
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayAlert.STATE = {
  /**
	 * If the alert is closeable
	 * @instance
	 * @memberof ClayAlert
	 * @type {?bool}
	 * @default false
	 */
  closeable: Config.bool().value(false),

  /**
	 * The icon of alert
	 * @instance
	 * @memberof ClayAlert
	 * @type {?string}
	 * @default undefined
	 */
  icon: Config.string(),

  /**
	 * The message of alert
	 * @instance
	 * @memberof ClayAlert
	 * @type {!string}
	 */
  message: Config.string().required(),

  /**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayIcon
	 * @type {?string}
	 * @default undefined
	 */
  spritemap: Config.string(),

  /**
	 * The style of alert
	 * @instance
	 * @memberof ClayAlert
	 * @type {?string}
	 * @default default
	 */
  style: Config.oneOf(['danger', 'info', 'success', 'warning']).value('info'),

  /**
	 * The type of alert
	 * @instance
	 * @memberof ClayAlert
	 * @type {?string}
	 * @default default
	 */
  type: Config.oneOf(['embedded', 'stripe', 'toast']).value('embedded'),

  /**
	 * The title of alert
	 * @instance
	 * @memberof ClayAlert
	 * @type {!string}
	 */
  title: Config.string().required(),
};

Soy.register(ClayAlert, templates);

export {ClayAlert};
export default ClayAlert;
