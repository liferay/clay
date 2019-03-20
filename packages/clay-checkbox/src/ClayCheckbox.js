import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayCheckbox.soy.js';

/**
 * Implementation of the Metal Clay Checkbox.
 * @extends ClayComponent
 */
class ClayCheckbox extends ClayComponent {
	/**
	 * @inheritDoc
	 */
	syncIndeterminate() {
		this.refs.input.indeterminate = this.indeterminate;
	}
}

/**
 * State definition.
 * @type {!Object}
 * @static
 */
ClayCheckbox.STATE = {
	/**
	 * Aria labelled by attribute to apply to the input.
	 * @default undefined
	 * @instance
	 * @memberof ClayCheckbox
	 * @type {?(string|undefined)}
	 */
	ariaLabelledBy: Config.string(),

	/**
	 * Flag to indicate if checkbox is checked.
	 * @default false
	 * @instance
	 * @memberof ClayCheckbox
	 * @type {?bool}
	 */
	checked: Config.bool().value(false),

	/**
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayCheckbox
	 * @type {?object}
	 */
	data: Config.object(),

	/**
	 * Object that wires events with default listeners
	 * @default undefined
	 * @instance
	 * @memberof ClayCheckbox
	 * @review
	 * @type {?(object|undefined)}
	 */
	defaultEventHandler: Config.object(),

	/**
	 * Flag to indicate if checkbox is disabled.
	 * @default false
	 * @instance
	 * @memberof ClayCheckbox
	 * @type {?bool}
	 */
	disabled: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayCheckbox
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayCheckbox
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * Flag to indicate if checkbox's checked state is indeterminate.
	 * @default false
	 * @instance
	 * @memberof ClayCheckbox
	 * @type {?bool}
	 */
	indeterminate: Config.bool().value(false),

	/**
	 * Flag to indicate if input should be wrapped to be inline or not.
	 * @default false
	 * @instance
	 * @memberof ClayCheckbox
	 * @type {?bool}
	 */
	inline: Config.bool().value(false),

	/**
	 * Label of the input. Required for accessibility.
	 * @default undefined
	 * @instance
	 * @memberof ClayCheckbox
	 * @type {?(string|undefined)}
	 */
	label: Config.string(),

	/**
	 * Custom content of the checkbox label. Use it to use your custom html.
	 * @default undefined
	 * @instance
	 * @memberof ClayCheckbox
	 * @type {?(html|undefined)}
	 */
	labelContent: Config.any(),

	/**
	 * Name to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayCheckbox
	 * @type {?(string|undefined)}
	 */
	name: Config.string(),

	/**
	 * Flag to indicate if label should be hide.
	 * @default true
	 * @instance
	 * @memberof ClayCheckbox
	 * @type {?bool}
	 */
	showLabel: Config.bool().value(true),

	/**
	 * Value to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayCheckbox
	 * @type {?(string|undefined)}
	 */
	value: Config.string(),
};

defineWebComponent('clay-checkbox', ClayCheckbox);

Soy.register(ClayCheckbox, templates);

export {ClayCheckbox};
export default ClayCheckbox;
