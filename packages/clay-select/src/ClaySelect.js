import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClaySelect.soy.js';

/**
 * Metal Clay Select component.
 */
class ClaySelect extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClaySelect.STATE = {
	/**
	 * The select disabled attribute.
	 * @instance
	 * @memberof ClaySelect
	 * @type {?boolean}
	 * @default false
	 */
	disabled: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClaySelect
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClaySelect
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * Label of the select element.
	 * @instance
	 * @memberof ClaySelect
	 * @type {?string|undefined}
	 * @default undefined
	 */
	label: Config.string(),

	/**
	 * Flag to indicate if the select element should be placed inline.
	 * @instance
	 * @memberof ClaySelect
	 * @type {?bool}
	 * @default false
	 */
	multiple: Config.bool().value(false),

	/**
	 * Name of the select element.
	 * @instance
	 * @memberof ClaySelect
	 * @type {?string|undefined}
	 * @default undefined
	 */
	name: Config.string(),

	/**
	 * Options of the select element.
	 * @instance
	 * @memberof ClaySelect
	 * @type {!array}
	 * @default undefined
	 */
	options: Config.arrayOf(
		Config.shapeOf({
			label: Config.string().required(),
			selected: Config.bool().value(false),
			value: Config.string().required(),
		})
	).required(),

	/**
	 * Type of the select wrapper element.
	 * In order to make inline-group work properly you may place it inside
	 * a .form-inline.form-inline-autofit container.
	 * container.
	 * @instance
	 * @memberof ClaySelect
	 * @type {?string|undefined}
	 * @default group
	 */
	wrapperType: Config.oneOf(['inline-group', 'group']).value('group'),
};

defineWebComponent('clay-select', ClaySelect);

Soy.register(ClaySelect, templates);

export {ClaySelect};
export default ClaySelect;
