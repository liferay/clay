import './ClayAlertBase';
import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayStripe.soy.js';

/**
 * Metal Clay Stripe component.
 * @extends ClayComponent
 */
class ClayStripe extends ClayComponent {
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

	/**
	 * Emits hide alert.
	 * @public
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
ClayStripe.STATE = {
	/**
	 * Flag to `true` to indicate whether the alert should be closed
	 * automatically with the default time.
	 * @default false
	 * @instance
	 * @memberof ClayStripe
	 * @type {?(bool|number)}
	 */
	autoClose: Config.oneOfType([Config.bool(), Config.number()]).value(false),

	/**
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayStripe
	 * @type {?object}
	 */
	data: Config.object(),

	/**
	 * Object that wires events with default listeners
	 * @default undefined
	 * @instance
	 * @memberof ClayStripe
	 * @review
	 * @type {?(object|undefined)}
	 */
	defaultEventHandler: Config.object(),

	/**
	 * Flag to indicate if the alert should be destroyed when close.
	 * @default false
	 * @instance
	 * @memberof ClayStripe
	 * @type {?bool}
	 */
	destroyOnHide: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayStripe
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayStripe
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * The message of alert
	 * @default undefined
	 * @instance
	 * @memberof ClayStripe
	 * @type {!html|string}
	 */
	message: Config.any().required(),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayStripe
	 * @type {!string}
	 */
	spritemap: Config.string().required(),

	/**
	 * The style of alert
	 * @default info
	 * @instance
	 * @memberof ClayStripe
	 * @type {?string}
	 */
	style: Config.oneOf(['danger', 'info', 'success', 'warning']).value('info'),

	/**
	 * The title of alert
	 * @default undefined
	 * @instance
	 * @memberof ClayStripe
	 * @type {!string}
	 */
	title: Config.string().required(),
};

defineWebComponent('clay-stripe', ClayStripe);

Soy.register(ClayStripe, templates);

export {ClayStripe};
export default ClayStripe;
