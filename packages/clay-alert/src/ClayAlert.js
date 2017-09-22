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
	 * @inheritDoc
	 */
  rendered() {
    if (
      this.autoClose &&
      (this.type === 'fluid' || this.type === 'notification')
    ) {
      if (this._delayTime === undefined || this._delayTime > 0) {
        this._delayTime = (this.element.querySelector('a') ? 10 : 5) * 1000;
      }

      this._resumeTimeout();
    }
  }

  /**
	 * @inheritDoc
	 */
  disposed() {
    if (this._timer) {
      clearTimeout(this._timer);
      this._timer = undefined;
    }
    this._delayTime = undefined;
    this._startDelayTime = undefined;
  }

  /**
	 * Handles onclick event for the close button in case of closeable alert.
	 * @param {!Event} event
	 * @private
	 */
  _handleCloseClick(event) {
    this.close();
  }

  /**
	 * Handles mouseot event for the alert.
	 * @param {!Event} event
	 * @private
	 */
  _handleMouseOut(event) {
    this._resumeTimeout();
  }

  /**
	 * Handles mouseover event for the alert.
	 * @param {!Event} event
	 * @private
	 */
  _handleMouseOver(event) {
    this._pauseTimeout();
  }

  /**
	 * Pauses the closing delay time.
	 * @private
	 */
  _pauseTimeout() {
    if (this._timer) {
      clearTimeout(this._timer);
      this._timer = undefined;
      this._delayTime -= new Date() - this._startDelayTime;
    }
  }

  /**
   * Resumes the closing delay time.
   * @private
   */
  _resumeTimeout() {
    if (this._delayTime > 0) {
      this._startDelayTime = new Date();
      this._timer = setTimeout(() => {
        this.close();
      }, this._delayTime);
    }
  }

  /**
   * Hides the alert and destroy it if proceed.
   * @private
   */
  close() {
    this._delayTime = 0;
    this._visible = false;

    if (this._timer) {
      clearTimeout(this._timer);
    }

    if (this.destroyOnHide) {
      this.dispose();
    }
  }
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayAlert.STATE = {
  /**
   * Flag to indicate if alert should be automatically closed.
   * @instance
   * @memberof ClayAlert
   * @type {?bool}
   * @default undefined
   */
  autoClose: Config.bool(),

  /**
	 * Flag to indicate if the alert is closeable.
	 * @instance
	 * @memberof ClayAlert
	 * @type {?bool}
	 * @default false
	 */
  closeable: Config.bool().value(false),

  /**
   * Flag to indicate if the alert should be destroyen when close.
   * @instance
   * @memberof ClayAlert
   * @type {?bool}
   * @default false
   */
  destroyOnHide: Config.bool(),

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
	 * @type {!string}
	 * @default undefined
	 */
  spritemap: Config.string().required(),

  /**
	 * The style of alert
	 * @instance
	 * @memberof ClayAlert
	 * @type {?string}
	 * @default info
	 */
  style: Config.oneOf(['danger', 'info', 'success', 'warning']).value('info'),

  /**
	 * The type of alert
	 * @instance
	 * @memberof ClayAlert
	 * @type {?string}
	 * @default undefined
	 */
  type: Config.oneOf(['fluid', 'notification']),

  /**
	 * The title of alert
	 * @instance
	 * @memberof ClayAlert
	 * @type {!string}
	 * @default undefined
	 */
  title: Config.string().required(),

  /**
   * Flag to indicate the visibility of the alert
   * @instance
   * @memberof ClayAlert
   * @type {?bool}
   * @default true
   */
  _visible: Config.bool()
    .internal()
    .value(true),
};

Soy.register(ClayAlert, templates);

export {ClayAlert};
export default ClayAlert;
