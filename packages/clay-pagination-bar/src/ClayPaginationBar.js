import 'clay-dropdown';
import 'clay-pagination';
import {Config} from 'metal-state';
import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';

import templates from './ClayPaginationBar.soy.js';

/**
 * Metal ClayPaginationBar component.
 * @extends ClayComponent
 */
class ClayPaginationBar extends ClayComponent {
	/**
	 * Continues the propagation of the page clicked event
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handlePageClick(event) {
		return !this.emit({
			data: {
				page: event.data.page,
			},
			name: 'pageClicked',
			originalEvent: event,
		});
	}

	/**
	 * Continues the propagation of the item per page clicked event
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleItemsPerPageClicked(event) {
		return !this.emit({
			data: {
				item: event.data.item,
			},
			name: 'itemsPerPageClicked',
			originalEvent: event,
		});
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayPaginationBar.STATE = {
	/**
	 * Href to create each pagination page complete href.
	 * @default undefined
	 * @instance
	 * @memberof ClayPaginationBar
	 * @type {?(string|undefined)}
	 */
	baseHref: Config.string(),

	/**
	 * Current pagination page number.
	 * @default undefined
	 * @instance
	 * @memberof ClayPaginationBar
	 * @type {!number}
	 */
	currentPage: Config.number().required(),

	/**
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayPaginationBar
	 * @type {?object}
	 */
	data: Config.object(),

	/**
	 * Object that wires events with default listeners
	 * @default undefined
	 * @instance
	 * @memberof ClayPaginationBar
	 * @review
	 * @type {?(object|undefined)}
	 */
	defaultEventHandler: Config.object(),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayPaginationBar
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * List of available number of entries.
	 * @default undefined
	 * @instance
	 * @memberof ClayPaginationBar
	 * @type {!array}
	 */
	entries: Config.arrayOf(
		Config.shapeOf({
			active: Config.bool(),
			href: Config.string().required(),
			label: Config.number().required(),
		})
	).required(),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayPaginationBar
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * Entries index that points to selected entry.
	 * @default undefined
	 * @instance
	 * @memberof ClayPaginationBar
	 * @type {?(number|undefined)}
	 */
	selectedEntry: Config.number().required(),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayPaginationBar
	 * @type {!string}
	 */
	spritemap: Config.string().required(),

	/**
	 * Total number of entries.
	 * @default undefined
	 * @instance
	 * @memberof ClayPaginationBar
	 * @type {!number}
	 */
	totalEntries: Config.number().required(),
};

defineWebComponent('clay-pagination-bar', ClayPaginationBar);

Soy.register(ClayPaginationBar, templates);

export {ClayPaginationBar};
export default ClayPaginationBar;
