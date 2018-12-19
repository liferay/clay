import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClaySelect.soy.js';

/**
 * Metal Clay Select component.
 * @extends ClayComponent
 */
class ClaySelect extends ClayComponent {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClaySelect.STATE = {
	/**
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClaySelect
	 * @type {?object}
	 */
	data: Config.object(),

	/**
	 * Object that wires events with default listeners
	 * @default undefined
	 * @instance
	 * @memberof ClaySelect
	 * @review
	 * @type {?(object|undefined)}
	 */
	defaultEventHandler: Config.object(),

	/**
	 * The select disabled attribute.
	 * @default false
	 * @instance
	 * @memberof ClaySelect
	 * @type {?boolean}
	 */
	disabled: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClaySelect
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClaySelect
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * Flag to indicate if select should be wrapped to be inline or not.
	 * In order to make inline work properly you may place it inside
	 * a .form-group-autofit container.
	 * @default false
	 * @instance
	 * @memberof ClaySelect
	 * @type {?bool}
	 */
	inline: Config.bool().value(false),

	/**
	 * Label of the select element.
	 * @default undefined
	 * @instance
	 * @memberof ClaySelect
	 * @type {?(string|undefined)}
	 */
	label: Config.string(),

	/**
	 * Flag to indicate if the select element should be placed inline.
	 * @default false
	 * @instance
	 * @memberof ClaySelect
	 * @type {?bool}
	 */
	multiple: Config.bool().value(false),

	/**
	 * Name of the select element.
	 * @default undefined
	 * @instance
	 * @memberof ClaySelect
	 * @type {?(string|undefined)}
	 */
	name: Config.string(),

	/**
	 * Options of the select element.
	 * @default undefined
	 * @instance
	 * @memberof ClaySelect
	 * @type {!array}
	 */
	options: Config.arrayOf(
		Config.shapeOf({
			label: Config.string().required(),
			selected: Config.bool().value(false),
			value: Config.string().required(),
		})
	).required(),
};

defineWebComponent('clay-select', ClaySelect);

Soy.register(ClaySelect, templates);

export {ClaySelect};
export default ClaySelect;
