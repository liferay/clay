import './ClayAlertBase';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
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
	attached() {
		this.addListener('hide', this.defaultHideAlert_, true);
	}

	/**
	 * Hides the alert and destroy it if proceed.
	 * @private
	 */
	defaultHideAlert_() {
		if (this.destroyOnHide) {
			this.dispose();
		}
	}

	/**
	 * Continues the propagation of the hide event
	 * @return {Boolean} If the event has been prevented or not.
	 */
	handleHide_() {
		return !this.emit('hide');
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayAlert.STATE = {
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
	destroyOnHide: Config.bool().value(false),

	/**
	 * The message of alert
	 * @instance
	 * @memberof ClayAlert
	 * @type {!html|string}
	 */
	message: Config.any().required(),

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
	 * The title of alert
	 * @instance
	 * @memberof ClayAlert
	 * @type {!string}
	 * @default undefined
	 */
	title: Config.string().required(),
};

defineWebComponent('clay-alert', ClayAlert);

Soy.register(ClayAlert, templates);

export {ClayAlert};
export default ClayAlert;
