import 'clay-pagination';
import {ClayDropdown} from 'clay-dropdown';
import {Config} from 'metal-state';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';

import templates from './ClayPaginationBar.soy.js';

/**
 * Metal ClayPaginationBar component.
 */
class ClayPaginationBar extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayPaginationBar.STATE = {
	/**
	 * Href to create each pagination page complete href.
	 * @instance
	 * @memberof ClayPaginationBar
	 * @type {?string|undefined}
	 * @default undefined
	 */
	baseHref: Config.string(),

	/**
	 * Current pagination page number.
	 * @instance
	 * @memberof ClayPaginationBar
	 * @type {!number}
	 * @default undefined
	 */
	currentPage: Config.number().required(),

	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayPaginationBar
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * List of available number of entries.
	 * @instance
	 * @memberof ClayPaginationBar
	 * @type {!array}
	 * @default undefined
	 */
	entries: Config.arrayOf(
		Config.shapeOf({
			active: Config.bool(),
			href: Config.string().required(),
			label: Config.string().required(),
		})
	).required(),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayPaginationBar
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * Entries index that points to selected entry.
	 * @instance
	 * @memberof ClayPaginationBar
	 * @type {?int}
	 * @default 0
	 */
	selectedEntry: Config.number().value(0),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayPaginationBar
	 * @type {!string}
	 * @default undefined
	 */
	spritemap: Config.string().required(),

	/**
	 * Total number of entries.
	 * @instance
	 * @memberof ClayPaginationBar
	 * @type {!number}
	 * @default undefined
	 */
	totalEntries: Config.number().required(),
};

defineWebComponent('clay-pagination-bar', ClayPaginationBar);

Soy.register(ClayPaginationBar, templates);

export {ClayPaginationBar};
export default ClayPaginationBar;
