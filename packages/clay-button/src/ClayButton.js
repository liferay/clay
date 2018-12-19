import 'clay-icon';
import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayButton.soy.js';

/**
 * Metal Clay Button component.
 * @extends ClayComponent
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
	 * @default undefined
	 * @instance
	 * @memberof ClayButton
	 * @type {?(string|undefined)}
	 */
	ariaLabel: Config.string(),

	/**
	 * Renders the button as a block element.
	 * @default false
	 * @instance
	 * @memberof ClayButton
	 * @type {?boolean}
	 */
	block: Config.bool().value(false),

	/**
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayButton
	 * @type {?object}
	 */
	data: Config.object(),

	/**
	 * Object that wires events with default listeners
	 * @default undefined
	 * @instance
	 * @memberof ClayButton
	 * @review
	 * @type {?(object|undefined)}
	 */
	defaultEventHandler: Config.object(),

	/**
	 * The button disabled attribute.
	 * @default false
	 * @instance
	 * @memberof ClayButton
	 * @type {?boolean}
	 */
	disabled: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayButton
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Icon to be rendered in the button.
	 * @default undefined
	 * @instance
	 * @memberof ClayButton
	 * @type {?(string|undefined)}
	 */
	icon: Config.string(),

	/**
	 * Render ClayIcon in the ClayButton element.
	 * @default left
	 * @instance
	 * @memberof ClayButton
	 * @type {?string}
	 */
	iconAlignment: Config.oneOf(['left', 'right']).value('left'),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayButton
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * The label of the button content.
	 * @default undefined
	 * @instance
	 * @memberof ClayButton
	 * @type {?(html|string|undefined)}
	 */
	label: Config.any(),

	/**
	 * Flag to indicate if button should be monospaced.
	 * @default false
	 * @instance
	 * @memberof ClayButton
	 * @type {?bool}
	 */
	monospaced: Config.bool().value(false),

	/**
	 * The name attribute value of the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayButton
	 * @type {?(string|undefined)}
	 */
	name: Config.string(),

	/**
	 * The name that will make the CSS class name that will represent the
	 * button size.
	 * @default undefined
	 * @instance
	 * @memberof ClayButton
	 * @type {?(string|undefined)}
	 */
	size: Config.oneOf(['sm']),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayButton
	 * @type {?(string|undefined)}
	 */
	spritemap: Config.string(),

	/**
	 * The css class that colors the button. Style `unstyled` is only for internal
	 * purposes.
	 * @default primary
	 * @instance
	 * @memberof ClayButton
	 * @type {?(bool|string|undefined)}
	 */
	style: Config.oneOfType([
		Config.bool(),
		Config.oneOf(['link', 'primary', 'secondary', 'unstyled']),
	]).value('primary'),

	/**
	 * Flag to indicate if the element can be focused.
	 * @default undefined
	 * @instance
	 * @memberof ClayButton
	 * @type {?(string|undefined)}
	 */
	tabIndex: Config.string(),

	/**
	 * The title attribute of the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayButton
	 * @type {?(string|undefined)}
	 */
	title: Config.string(),

	/**
	 * The type attribute value of the element.
	 * @default button
	 * @instance
	 * @memberof ClayButton
	 * @type {?string}
	 */
	type: Config.oneOf(['button', 'reset', 'submit']).value('button'),

	/**
	 * The value attribute value of the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayButton
	 * @type {?(string|undefined)}
	 */
	value: Config.string(),
};

defineWebComponent('clay-button', ClayButton);

Soy.register(ClayButton, templates);

export {ClayButton};
export default ClayButton;
