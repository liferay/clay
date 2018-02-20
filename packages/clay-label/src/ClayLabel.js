import 'clay-button';
import 'clay-link';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayLabel.soy.js';

/**
 * Metal Clay Label component.
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
	 * @instance
	 * @memberof ClayLabel
	 * @type {?bool}
	 * @default false
	 */
	closeable: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayLabel
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * HREF in label.
	 * @instance
	 * @memberof ClayLabel
	 * @type {?string|undefined}
	 * @default undefined
	 */
	href: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayLabel
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * The label of the badge element.
	 * @instance
	 * @memberof ClayLabel
	 * @type {?string|undefined}
	 * @default undefined
	 */
	label: Config.string(),

	/**
	 * The size of the label element.
	 * @instance
	 * @memberof ClayLabel
	 * @type {?string|undefined}
	 * @default undefined
	 */
	size: Config.oneOf(['lg']),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayLabel
	 * @type {?string|undefined}
	 * @default undefined
	 */
	spritemap: Config.string(),

	/**
	 * Label style color.
	 * @instance
	 * @memberof ClayLabel
	 * @type {?string}
	 * @default secondary
	 */
	style: Config.oneOf([
		'danger',
		'info',
		'secondary',
		'success',
		'warning',
	]).value('secondary'),
};

defineWebComponent('clay-label', ClayLabel);

Soy.register(ClayLabel, templates);

export {ClayLabel};
export default ClayLabel;
