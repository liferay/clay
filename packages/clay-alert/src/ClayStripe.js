import './ClayAlertBase';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayStripe.soy.js';

/**
 * Metal Clay Stripe component.
 */
class ClayStripe extends Component {
	/**
	 * @inheritDoc
	 */
	attached() {
		this.addListener('hide', this._defaultHideStripe, true);
	}

	/**
	 * Hides the alert and destroy it if proceed.
	 * @private
	 */
	_defaultHideStripe() {
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
ClayStripe.STATE = {
	/**
	 * Flag to indicate if alert should be automatically closed.
	 * @instance
	 * @memberof ClayStripe
	 * @type {?bool}
	 * @default false
	 */
	autoClose: Config.bool().value(false),

	/**
	 * Flag to indicate if the alert should be destroyen when close.
	 * @instance
	 * @memberof ClayStripe
	 * @type {?bool}
	 * @default false
	 */
	destroyOnHide: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayStripe
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayStripe
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * The message of alert
	 * @instance
	 * @memberof ClayStripe
	 * @type {!html|string}
	 */
	message: Config.any().required(),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayStripe
	 * @type {!string}
	 * @default undefined
	 */
	spritemap: Config.string().required(),

	/**
	 * The style of alert
	 * @instance
	 * @memberof ClayStripe
	 * @type {?string}
	 * @default info
	 */
	style: Config.oneOf(['danger', 'info', 'success', 'warning']).value('info'),

	/**
	 * The title of alert
	 * @instance
	 * @memberof ClayStripe
	 * @type {!string}
	 * @default undefined
	 */
	title: Config.string().required(),
};

defineWebComponent('clay-stripe', ClayStripe);

Soy.register(ClayStripe, templates);

export {ClayStripe};
export default ClayStripe;
