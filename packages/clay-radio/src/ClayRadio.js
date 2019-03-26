import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayRadio.soy.js';

/**
 * Implementation of the Metal Clay Radio.
 * @extends ClayComponent
 */
class ClayRadio extends ClayComponent {}

/**
 * State definition.
 * @type {!Object}
 * @static
 */
ClayRadio.STATE = {
	/**
	 * Flag to indicate if checkbox is checked.
	 * @default false
	 * @instance
	 * @memberof ClayRadio
	 * @type {?bool}
	 */
	checked: Config.bool().value(false),

	/**
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayRadio
	 * @type {?object}
	 */
	data: Config.object(),

	/**
	 * Object that wires events with default listeners
	 * @default undefined
	 * @instance
	 * @memberof ClayRadio
	 * @review
	 * @type {?(object|undefined)}
	 */
	defaultEventHandler: Config.object(),

	/**
	 * Flag to indicate if checkbox is disabled.
	 * @default false
	 * @instance
	 * @memberof ClayRadio
	 * @type {?bool}
	 */
	disabled: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayRadio
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayRadio
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * Flag to indicate if input should be wrapped to be inline or not.
	 * @default false
	 * @instance
	 * @memberof ClayRadio
	 * @type {?bool}
	 */
	inline: Config.bool().value(false),

	/**
	 * Label of the input. Required for accessibility.
	 * @default undefined
	 * @instance
	 * @memberof ClayRadio
	 * @type {?(string|undefined)}
	 */
	label: Config.string(),

	/**
	 * Custom content of the radio label. Use it to use your custom html.
	 * @default undefined
	 * @instance
	 * @memberof ClayRadio
	 * @type {?(html|undefined)}
	 */
	labelContent: Config.any(),

	/**
	 * Name to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayRadio
	 * @type {?(string|undefined)}
	 */
	name: Config.string(),

	/**
	 * Flag to indicate if label should be hide.
	 * @default true
	 * @instance
	 * @memberof ClayRadio
	 * @type {?bool}
	 */
	showLabel: Config.bool().value(true),

	/**
	 * Value to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayRadio
	 * @type {?(string|undefined)}
	 */
	value: Config.string(),
};

defineWebComponent('clay-radio', ClayRadio);

Soy.register(ClayRadio, templates);

export {ClayRadio};
export default ClayRadio;
