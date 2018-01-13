import 'clay-link';
// eslint-disable-next-line
import { ClayDropdownBase } from 'clay-dropdown';
import {Config} from 'metal-state';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';

import templates from './ClayPagination.soy.js';

/**
 * Metal ClayPagination component.
 */
class ClayPagination extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayPagination.STATE = {
	/**
	 * Href to create each page complete href.
	 * @instance
	 * @memberof ClayPagination
	 * @type {?string|undefined}
	 * @default undefined
	 */
	baseHref: Config.string(),

	/**
	 * Current page number.
	 * @instance
	 * @memberof ClayPagination
	 * @type {!number}
	 * @default undefined
	 */
	currentPage: Config.number().required(),

	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayPagination
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayPagination
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayPagination
	 * @type {!string}
	 * @default undefined
	 */
	spritemap: Config.string().required(),

	/**
	 * Total number of pages to show.
	 * @instance
	 * @memberof ClayPagination
	 * @type {!number}
	 * @default undefined
	 */
	totalPages: Config.number().required(),
};

defineWebComponent('clay-pagination', ClayPagination);

Soy.register(ClayPagination, templates);

export {ClayPagination};
export default ClayPagination;
