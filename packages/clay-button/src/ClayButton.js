import 'clay-icon';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';
import {domData} from 'metal-dom';

import templates from './ClayButton.soy.js';

/**
 * Metal Clay Button component.
 */
class ClayButton extends Component {
	/**
	 * @inheritDoc
	 */
	attached() {
		for (let dataKey in this.data) {
			if (this.data.hasOwnProperty(dataKey)) {
				domData.get(this.element, dataKey, this.data[dataKey]);
			}
		}
	}
}

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
	 * Render ClayIcon in the ClayButton element.
	 * @instance
	 * @memberof ClayButton
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	icon: Config.shapeOf({
		alignment: Config.oneOf(['left', 'right']),
		spritemap: Config.string().required(),
		symbol: Config.string().required(),
	}),

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
	 * The css class that colors the button.
	 * @instance
	 * @memberof ClayButton
	 * @type {?string|undefined}
	 * @default primary
	 */
	style: Config.oneOf([
		'borderless',
		'link',
		'primary',
		'secondary',
		'unstyled',
	]).value('primary'),

	/**
	 * The type attribute value of the element.
	 * @instance
	 * @memberof ClayButton
	 * @type {?string|undefined}
	 * @default undefined
	 */
	type: Config.oneOf(['button', 'reset', 'submit']),

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
