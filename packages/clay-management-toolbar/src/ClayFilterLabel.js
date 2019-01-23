import 'clay-label';
import {Config} from 'metal-state';
import ClayComponent from 'clay-component';
import Soy from 'metal-soy';

import templates from './ClayFilterLabel.soy.js';

/**
 * Metal ClayFilterLabel component.
 * @extends ClayComponent
 */
class ClayFilterLabel extends ClayComponent {
	/**
	 * Continues the propagation of the filter label close clicked event
	 * @param {!Event} event
	 * @private
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleFilterLabelCloseClicked(event) {
		return !this.emit({
			name: 'filterLabelCloseClicked',
			originalEvent: event,
		});
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayFilterLabel.STATE = {
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
	 * Data to add pass to label component.
	 * @default undefined
	 * @instance
	 * @memberof ClayLabel
	 * @type {?object}
	 */
	filterData: Config.object(),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayLabel
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * The label of the badge element.
	 * @default undefined
	 * @instance
	 * @memberof ClayLabel
	 * @type {?(html|string|undefined)}
	 */
	label: Config.any().required(),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayLabel
	 * @type {?(string|undefined)}
	 */
	spritemap: Config.string().required(),
};

Soy.register(ClayFilterLabel, templates);

export {ClayFilterLabel};
export default ClayFilterLabel;
