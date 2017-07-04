'use strict';

import Component from 'metal-component';
import { Config } from 'metal-state';

/**
 * Metal Clay Button Base component.
 */
class ButtonBase extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ButtonBase.STATE = {
	/**
	 * The button disabled attribute.
	 * @instance
	 * @memberof ButtonBase
	 * @type {boolean}
	 * @default false
	 */
	disabled: Config.bool().value(false),

	/**
	 * The href attribute value of the link.
	 * @instance
	 * @memberof ButtonBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	href: Config.string(),

	/**
	 * The label of the button or link content.
	 * @instance
	 * @memberof ButtonBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	label: Config.string(),

	/**
	 * The name attribute value of the element.
	 * @instance
	 * @memberof ButtonBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	name: Config.string(),

	/**
	 * The type attribute value of the element.
	 * @instance
	 * @memberof ButtonBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	type: Config.string(),

	/**
	 * The value attribute value of the element.
	 * @instance
	 * @memberof ButtonBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	value: Config.string(),
};

export default ButtonBase;
