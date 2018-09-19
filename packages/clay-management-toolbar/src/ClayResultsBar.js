import 'clay-button';
import 'clay-label';
import 'clay-link';
import {Config} from 'metal-state';
import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';

import {filterLabelsValidator} from './validators';

import templates from './ClayResultsBar.soy.js';

/**
 * Metal ClayResultsBar component.
 * @extends ClayComponent
 */
class ClayResultsBar extends ClayComponent {
	/**
	 * Continues the propagation of the clear button clicked event
	 * @param {!Event} event
	 * @private
	 */
	_handleClearResultsClick(event) {
		this.emit('clearButtonClicked', event);
	}

	/**
	 * Continues the propagation of the filter label close clicked event
	 * @param {!Event} event
	 * @private
	 */
	_handleFilterLabelCloseClicked(event) {
		this.emit('filterLabelCloseClicked', event);
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayResultsBar.STATE = {
	/**
	 * Url for clear results link.
	 * @default undefined
	 * @instance
	 * @memberof ClayResultsBar
	 * @type {?(string|undefined)}
	 */
	clearResultsURL: Config.string(),

	/**
	 * List of filter label items.
	 * @default undefined
	 * @instance
	 * @memberof ClayResultsBar
	 * @type {?(array|undefined)}
	 */
	filterLabels: filterLabelsValidator.required(),

	/**
	 * Value of the search input.
	 * @default undefined
	 * @instance
	 * @memberof ClayResultsBar
	 * @type {?(string|undefined)}
	 */
	searchValue: Config.string(),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayResultsBar
	 * @type {?(string|undefined)}
	 */
	spritemap: Config.string().required(),

	/**
	 * Total number of items. If totalItems is 0 most of the elements in the bar
	 * will appear disabled.
	 * @default undefined
	 * @instance
	 * @memberof ClayResultsBar
	 * @type {!number}
	 */
	totalItems: Config.number().required(),
};

defineWebComponent('clay-results-bar', ClayResultsBar);

Soy.register(ClayResultsBar, templates);

export {ClayResultsBar};
export default ClayResultsBar;
