import 'clay-button';
import 'clay-icon';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';
import {isServerSide, isNumber} from 'metal';

import templates from './ClayAlertBase.soy.js';

/**
 * Metal Clay Alert Base component.
 * @extends Component
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
	disposed() {
		if (this._timer) {
			clearTimeout(this._timer);
			this._timer = undefined;
		}
		this._delayTime = undefined;
		this._startDelayTime = undefined;
	}

	/**
	 * @inheritDoc
	 */
	rendered(firstRender) {
		if (firstRender && !isServerSide()) {
			this._startTimer();
		}
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
	 * Sets the delayTime if passed, if it does not set the default, and starts.
	 * @private
	 */
	_startTimer() {
		if (
			this.autoClose &&
			(this.type === 'stripe' || this.type === 'toast')
		) {
			if (isNumber(this.autoClose)) {
				this._delayTime = this.autoClose * 1000;
			} else {
				this._delayTime = (this.type === 'toast' ? 8 : 5) * 1000;
			}

			this._resumeTimeout();
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
	 * @default true
	 * @instance
	 * @memberof ClayAlertBase
	 * @type {?bool}
	 */
	_visible: Config.bool()
		.internal()
		.value(true),

	/**
	 * Flag to `true` to indicate whether the alert should be closed 
	 * automatically with the default time.
	 * @default false
	 * @instance
	 * @memberof ClayAlertBase
	 * @type {?(bool|number)}
	 */
	autoClose: Config.oneOfType([
		Config.bool().value(false),
		Config.number()
	]),

	/**
	 * Flag to indicate if the alert is closeable.
	 * @default false
	 * @instance
	 * @memberof ClayAlertBase
	 * @type {?bool}
	 */
	closeable: Config.bool().value(false),

	/**
	 * Flag to indicate if the alert should be destroyen when close.
	 * @default false
	 * @instance
	 * @memberof ClayAlertBase
	 * @type {?bool}
	 */
	destroyOnHide: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayAlert
	 * @type {(?string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayAlert
	 * @type {(?string|undefined)}
	 */
	id: Config.string(),

	/**
	 * The message of alert
	 * @default undefined
	 * @instance
	 * @memberof ClayAlertBase
	 * @type {!(html|string)}
	 */
	message: Config.any().required(),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayAlertBase
	 * @type {!string}
	 */
	spritemap: Config.string().required(),

	/**
	 * The style of alert
	 * @default info
	 * @instance
	 * @memberof ClayAlertBase
	 * @type {?string}
	 */
	style: Config.oneOf(['danger', 'info', 'success', 'warning']).value('info'),

	/**
	 * The title of alert
	 * @default undefined
	 * @instance
	 * @memberof ClayAlertBase
	 * @type {!string}
	 */
	title: Config.string().required(),

	/**
	 * The type of alert
	 * @default embedded
	 * @instance
	 * @memberof ClayAlertBase
	 * @type {?string}
	 */
	type: Config.oneOf(['embedded', 'stripe', 'toast']).value('embedded'),
};

defineWebComponent('clay-alert-base', ClayAlertBase);

Soy.register(ClayAlertBase, templates);

export {ClayAlertBase};
export default ClayAlertBase;
