import './ClayAlertBase';
import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayAlert.soy.js';

/**
 * Metal Clay Alert component.
 * @extends ClayComponent
 */
class ClayAlert extends ClayComponent {
	/**
	 * @inheritDoc
	 */
	attached() {
		this.addListener('hide', this._defaultHideAlert, true);
	}

	/**
	 * Hides the alert and destroy it if proceed.
	 * @private
	 */
	_defaultHideAlert() {
		if (this.destroyOnHide) {
			this.dispose();
		}
	}

	/**
	 * Continues the propagation of the hide event
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleHide() {
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
	 * @default false
	 * @instance
	 * @memberof ClayAlert
	 * @type {?bool}
	 */
	closeable: Config.bool().value(false),

	/**
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayAlert
	 * @type {?object}
	 */
	data: Config.object(),

	/**
	 * Object that wires events with default listeners
	 * @default undefined
	 * @instance
	 * @memberof ClayAlert
	 * @review
	 * @type {?(object|undefined)}
	 */
	defaultEventHandler: Config.object(),

	/**
	 * Flag to indicate if the alert should be destroyed when close.
	 * @default false
	 * @instance
	 * @memberof ClayAlert
	 * @type {?bool}
	 */
	destroyOnHide: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayAlert
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayAlert
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * The message of alert
	 * @instance
	 * @memberof ClayAlert
	 * @type {!(html|string)}
	 */
	message: Config.any().required(),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayAlert
	 * @type {!string}
	 */
	spritemap: Config.string().required(),

	/**
	 * The style of alert
	 * @default info
	 * @instance
	 * @memberof ClayAlert
	 * @type {?string}
	 */
	style: Config.oneOf(['danger', 'info', 'success', 'warning']).value('info'),

	/**
	 * The title of alert
	 * @default undefined
	 * @instance
	 * @memberof ClayAlert
	 * @type {!string}
	 */
	title: Config.string().required(),
};

defineWebComponent('clay-alert', ClayAlert);

Soy.register(ClayAlert, templates);

export {ClayAlert};
export default ClayAlert;
