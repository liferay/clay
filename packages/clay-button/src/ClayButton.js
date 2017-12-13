import 'clay-icon';
import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayButton.soy.js';

/**
 * Metal Clay Button component.
 */
class ClayButton extends ClayComponent {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayButton.STATE = {
	/**
	 * Aria label attribute for the button element.
	 * @instance
	 * @memberof ClayButton
	 * @type {?string|undefined}
	 * @default undefined
	 */
	ariaLabel: Config.string(),

	/**
	 * Renders the button as a block element.
	 * @instance
	 * @memberof ClayButton
	 * @type {?boolean}
	 * @default false
	 */
	block: Config.bool().value(false),

	/**
	 * Data to add to the element.
	 * @instance
	 * @memberof ClayButton
	 * @type {?object}
	 * @default undefined
	 */
	data: Config.object(),

	/**
	 * The button disabled attribute.
	 * @instance
	 * @memberof ClayButton
	 * @type {?boolean}
	 * @default false
	 */
	disabled: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayButton
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Icon to be rendered in the button.
	 * @instance
	 * @memberof ClayButton
	 * @type {?string|undefined}
	 * @default undefined
	 */
	icon: Config.string(),

	/**
	 * Render ClayIcon in the ClayButton element.
	 * @instance
	 * @memberof ClayButton
	 * @type {?string}
	 * @default left
	 */
	iconAlignment: Config.oneOf(['left', 'right']).value('left'),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayButton
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * The label of the button content.
	 * @instance
	 * @memberof ClayButton
	 * @type {?html|string|undefined}
	 * @default undefined
	 */
	label: Config.any(),

	/**
	 * Flag to indicate if button should be monospaced.
	 * @instance
	 * @memberof ClayButton
	 * @type {?bool}
	 * @default false
	 */
	monospaced: Config.bool().value(false),

	/**
	 * The name attribute value of the element.
	 * @instance
	 * @memberof ClayButton
	 * @type {?string|undefined}
	 * @default undefined
	 */
	name: Config.string(),

	/**
	 * The name that will make the CSS class name that will represent the
	 * button size.
	 * @instance
	 * @memberof ClayButton
	 * @type {?string|undefined}
	 * @default undefined
	 */
	size: Config.oneOf(['sm']),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayButton
	 * @type {?string|undefined}
	 * @default undefined
	 */
	spritemap: Config.string(),

	/**
	 * The css class that colors the button. Style `unstyled` is only for internal
	 * purposes.
	 * @instance
	 * @memberof ClayButton
	 * @type {?string|undefined}
	 * @default primary
	 */
	style: Config.oneOf(['link', 'primary', 'secondary', 'unstyled']).value(
		'primary'
	),

	/**
	 * The type attribute value of the element.
	 * @instance
	 * @memberof ClayButton
	 * @type {?string}
	 * @default button
	 */
	type: Config.oneOf(['button', 'reset', 'submit']).value('button'),

	/**
	 * The value attribute value of the element.
	 * @instance
	 * @memberof ClayButton
	 * @type {?string|undefined}
	 * @default undefined
	 */
	value: Config.string(),
};

defineWebComponent('clay-button', ClayButton);

Soy.register(ClayButton, templates);

export {ClayButton};
export default ClayButton;
