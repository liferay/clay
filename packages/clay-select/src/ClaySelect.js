import Component from 'metal-component';
import Soy from 'metal-soy';
import { Config } from 'metal-state';

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
	 * @type {?bool|undefined}
	 * @default undefined
	 */
	multiple: Config.bool(),

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
			selected: Config.bool(),
			value: Config.string().required(),
		}),
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

Soy.register(ClaySelect, templates);

export { ClaySelect };
export default ClaySelect;
