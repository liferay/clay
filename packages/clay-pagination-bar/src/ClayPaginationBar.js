import 'clay-pagination';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

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
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayPaginationBar
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayPaginationBar
	 * @type {!string}
	 * @default undefined
	 */
	spritemap: Config.string().required(),

	/**
	 * Total number of pages to show in the pagination.
	 * @instance
	 * @memberof ClayPaginationBar
	 * @type {!number}
	 * @default undefined
	 */
	totalPages: Config.number().required(),
};

defineWebComponent('clay-pagination-bar', ClayPaginationBar);

Soy.register(ClayPaginationBar, templates);

export {ClayPaginationBar};
export default ClayPaginationBar;
