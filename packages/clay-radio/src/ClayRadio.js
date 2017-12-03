import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayRadio.soy.js';

/**
 * Implementation of the Metal Clay Radio.
 */
class ClayRadio extends Component {}

/**
 * State definition.
 * @type {!Object}
 * @static
 */
ClayRadio.STATE = {
	/**
	 * Flag to indicate if checkbox is checked.
	 * @instance
	 * @memberof ClayRadio
	 * @type {?bool}
	 * @default false
	 */
	checked: Config.bool().value(false),

	/**
	 * Flag to indicate if checkbox is disabled.
	 * @instance
	 * @memberof ClayRadio
	 * @type {?bool}
	 * @default false
	 */
	disabled: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayRadio
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Flag to indicate if label should be hide.
	 * @instance
	 * @memberof ClayRadio
	 * @type {?bool}
	 * @default false
	 */
	hideLabel: Config.bool().value(false),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayRadio
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * Flag to indicate if input should be wrapped to be inline or not.
	 * @instance
	 * @memberof ClayRadio
	 * @type {?bool}
	 * @default false
	 */
	inline: Config.bool().value(false),

	/**
	 * Label of the input. Required for accesibility.
	 * @instance
	 * @memberof ClayRadio
	 * @type {?string|undefined}
	 * @default undefined
	 */
	label: Config.string(),

	/**
	 * Custom content of the radio label. Use it to use your custom html.
	 * If this is used label and hideLabel params are ignored.
	 * @instance
	 * @memberof ClayRadio
	 * @type {?html|undefined}
	 * @default undefined
	 */
	labelContent: Config.any(),

	/**
	 * Name to be applied to the element.
	 * @instance
	 * @memberof ClayRadio
	 * @type {?string|undefined}
	 * @default undefined
	 */
	name: Config.string(),

	/**
	 * Value to be applied to the element.
	 * @instance
	 * @memberof ClayRadio
	 * @type {?string|undefined}
	 * @default undefined
	 */
	value: Config.string(),
};

defineWebComponent('clay-radio', ClayRadio);

Soy.register(ClayRadio, templates);

export {ClayRadio};
export default ClayRadio;
