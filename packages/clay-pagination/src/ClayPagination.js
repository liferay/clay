import 'clay-dropdown';
import 'clay-link';
import ClayComponent from 'clay-component';
// eslint-disable-next-line
import { ClayDropdownBase, ClayDropdownItem } from 'clay-dropdown';
import {Config} from 'metal-state';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';

import templates from './ClayPagination.soy.js';

/**
 * Metal ClayPagination component.
 * @extends ClayComponent
 */
class ClayPagination extends ClayComponent {
	/**
	 * Continues the propagation of the page clicked event
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handlePageClick(event) {
		return !this.emit({
			data: {
				page: event.delegateTarget.getAttribute('data-page'),
			},
			name: 'pageClicked',
			originalEvent: event,
		});
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayPagination.STATE = {
	/**
	 * Href to create each page complete href.
	 * @default undefined
	 * @instance
	 * @memberof ClayPagination
	 * @type {?(string|undefined)}
	 */
	baseHref: Config.string(),

	/**
	 * Current page number.
	 * @default undefined
	 * @instance
	 * @memberof ClayPagination
	 * @type {!number}
	 */
	currentPage: Config.number().required(),

	/**
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayPagination
	 * @type {?object}
	 */
	data: Config.object(),

	/**
	 * Object that wires events with default listeners
	 * @default undefined
	 * @instance
	 * @memberof ClayPagination
	 * @review
	 * @type {?(object|undefined)}
	 */
	defaultEventHandler: Config.object(),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayPagination
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayPagination
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayPagination
	 * @type {!string}
	 */
	spritemap: Config.string().required(),

	/**
	 * Total number of pages to show.
	 * @default undefined
	 * @instance
	 * @memberof ClayPagination
	 * @type {!number}
	 */
	totalPages: Config.number().required(),
};

defineWebComponent('clay-pagination', ClayPagination);

Soy.register(ClayPagination, templates);

export {ClayPagination};
export default ClayPagination;
