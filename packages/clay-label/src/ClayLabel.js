import 'clay-button';
import 'clay-link';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayLabel.soy.js';

/**
 * Metal Clay Label component.
 * @extends Component
 */
class ClayLabel extends Component {
	/**
	 * Handle `click` button and emit event `close`.
	 * @protected
	 */
	_handleCloseButtonClick() {
		this.emit('close');
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayLabel.STATE = {
	/**
	 * True or false to activate the close button.
	 * @default false
	 * @instance
	 * @memberof ClayLabel
	 * @type {?bool}
	 */
	closeable: Config.bool().value(false),

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
		Config.oneOf([
			'danger',
			'info',
			'secondary',
			'warning',
			'success',
		]),
	]).value('secondary'),
};

defineWebComponent('clay-label', ClayLabel);

Soy.register(ClayLabel, templates);

export {ClayLabel};
export default ClayLabel;
