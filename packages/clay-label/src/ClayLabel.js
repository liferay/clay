import 'clay-button';
import 'clay-link';
import {Config} from 'metal-state';
import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';

import templates from './ClayLabel.soy.js';

/**
 * Metal Clay Label component.
 * @extends ClayComponent
 */
class ClayLabel extends ClayComponent {
	/**
	 * Handle `click` button and emit event `close`.
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleCloseButtonClick(event) {
		return !this.emit({
			name: 'close',
			originalEvent: event,
		});
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayLabel.STATE = {
	/**
	 * Flag to indicate if the label is closeable.
	 * @default false
	 * @instance
	 * @memberof ClayLabel
	 * @type {?bool}
	 */
	closeable: Config.bool().value(false),

	/**
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayLabel
	 * @type {?object}
	 */
	data: Config.object(),

	/**
	 * Object that wires events with default listeners
	 * @default undefined
	 * @instance
	 * @memberof ClayLabel
	 * @review
	 * @type {?(object|undefined)}
	 */
	defaultEventHandler: Config.object(),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayLabel
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * HREF in label.
	 * @default undefined
	 * @instance
	 * @memberof ClayLabel
	 * @type {?(string|undefined)}
	 */
	href: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayLabel
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * The label of the badge element.
	 * @default undefined
	 * @instance
	 * @memberof ClayLabel
	 * @type {?(html|string|undefined)}
	 */
	label: Config.any(),

	/**
	 * The size of the label element.
	 * @default undefined
	 * @instance
	 * @memberof ClayLabel
	 * @type {?(string|undefined)}
	 */
	size: Config.oneOf(['lg']),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayLabel
	 * @type {?(string|undefined)}
	 */
	spritemap: Config.string(),

	/**
	 * Label style color.
	 * @default secondary
	 * @instance
	 * @memberof ClayLabel
	 * @type {?(bool|string)}
	 */
	style: Config.oneOfType([
		Config.bool(),
		Config.oneOf(['danger', 'info', 'secondary', 'warning', 'success']),
	]).value('secondary'),

	/**
	 * Flag to indicate if the element can be focused.
	 * @default undefined
	 * @instance
	 * @memberof ClayLabel
	 * @type {?(string|undefined)}
	 */
	tabIndex: Config.string(),
};

defineWebComponent('clay-label', ClayLabel);

Soy.register(ClayLabel, templates);

export {ClayLabel};
export default ClayLabel;
