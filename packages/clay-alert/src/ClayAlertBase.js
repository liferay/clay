import 'clay-button';
import 'clay-icon';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';
import {isServerSide} from 'metal';

import templates from './ClayAlertBase.soy.js';

/**
 * Metal Clay Alert Base component.
 */
class ClayAlertBase extends Component {
	/**
	 * @inheritDoc
	 */
	attached() {
		this.addListener('hide', this._defaultHideAlert, true);
	}

	/**
	 * @inheritDoc
	 */
	rendered() {
		if (isServerSide()) {
			return;
		}

		if (
			this.autoClose &&
			(this.type === 'stripe' || this.type === 'toast')
		) {
			if (this._delayTime === undefined || this._delayTime > 0) {
				this._delayTime =
					(this.element.querySelector('a') ? 10 : 5) * 1000;
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
	 * Hides the alert and destroy it if proceed.
	 * @private
	 */
	_defaultHideAlert() {
		if (!this.isDisposed()) {
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
	 * Handles onclick event for the close button in case of closeable alert.
	 * @private
	 */
	_handleCloseClick() {
		this.close();
	}

	/**
	 * Handles mouseot event for the alert.
	 * @private
	 */
	_handleMouseOut() {
		this._resumeTimeout();
	}

	/**
	 * Handles mouseover event for the alert.
	 * @private
	 */
	_handleMouseOver() {
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
	 * Emits hide alert.
	 * @private
	 */
	close() {
		this.emit('hide');
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayAlertBase.STATE = {
	/**
	 * Flag to indicate the visibility of the alert
	 * @instance
	 * @memberof ClayAlertBase
	 * @type {?bool}
	 * @default true
	 */
	_visible: Config.bool()
		.internal()
		.value(true),

	/**
	 * Flag to indicate if alert should be automatically closed.
	 * @instance
	 * @memberof ClayAlertBase
	 * @type {?bool}
	 * @default false
	 */
	autoClose: Config.bool().value(false),

	/**
	 * Flag to indicate if the alert is closeable.
	 * @instance
	 * @memberof ClayAlertBase
	 * @type {?bool}
	 * @default false
	 */
	closeable: Config.bool().value(false),

	/**
	 * Flag to indicate if the alert should be destroyen when close.
	 * @instance
	 * @memberof ClayAlertBase
	 * @type {?bool}
	 * @default false
	 */
	destroyOnHide: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayAlert
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayAlert
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * The message of alert
	 * @instance
	 * @memberof ClayAlertBase
	 * @type {!html|string}
	 */
	message: Config.any().required(),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayAlertBase
	 * @type {!string}
	 * @default undefined
	 */
	spritemap: Config.string().required(),

	/**
	 * The style of alert
	 * @instance
	 * @memberof ClayAlertBase
	 * @type {?string}
	 * @default info
	 */
	style: Config.oneOf(['danger', 'info', 'success', 'warning']).value('info'),

	/**
	 * The title of alert
	 * @instance
	 * @memberof ClayAlertBase
	 * @type {!string}
	 * @default undefined
	 */
	title: Config.string().required(),

	/**
	 * The type of alert
	 * @instance
	 * @memberof ClayAlertBase
	 * @type {?string}
	 * @default embedded
	 */
	type: Config.oneOf(['embedded', 'stripe', 'toast']).value('embedded'),
};

defineWebComponent('clay-alert-base', ClayAlertBase);

Soy.register(ClayAlertBase, templates);

export {ClayAlertBase};
export default ClayAlertBase;
