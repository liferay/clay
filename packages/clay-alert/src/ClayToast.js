import './ClayAlertBase';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayToast.soy.js';

/**
 * Metal Clay Toast component.
 * @extends Component
 */
class ClayToast extends Component {
	/**
	 * @inheritDoc
	 */
	attached() {
		this.addListener('hide', this._defaultHideToast, true);
	}

	/**
	 * Hides the toast and destroy it if proceed.
	 * @private
	 */
	_defaultHideToast() {
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
ClayToast.STATE = {
	/**
	 * Flag to indicate if alert should be automatically closed.
	 * @default false
	 * @instance
	 * @memberof ClayToast
	 * @type {?bool}
	 */
	autoClose: Config.bool().value(false),

	/**
	 * Flag to indicate if the alert should be destroyen when close.
	 * @default false
	 * @instance
	 * @memberof ClayToast
	 * @type {?bool}
	 */
	destroyOnHide: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayToast
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayToast
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * The message of alert
	 * @default undefined
	 * @instance
	 * @memberof ClayToast
	 * @type {!(html|string)}
	 */
	message: Config.any().required(),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayToast
	 * @type {!string}
	 */
	spritemap: Config.string().required(),

	/**
	 * The style of alert
	 * @default info
	 * @instance
	 * @memberof ClayToast
	 * @type {?string}
	 */
	style: Config.oneOf(['danger', 'info', 'success', 'warning']).value('info'),

	/**
	 * The title of alert
	 * @default undefined
	 * @instance
	 * @memberof ClayToast
	 * @type {!string}
	 */
	title: Config.string().required(),
};

defineWebComponent('clay-toast', ClayToast);

Soy.register(ClayToast, templates);

export {ClayToast};
export default ClayToast;
