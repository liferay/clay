import 'clay-dropdown';
import 'clay-icon';
import 'clay-label';
import 'clay-link';
import 'clay-sticker';
import './ClayListItem';

import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayList.soy.js';

/**
 * Metal ClayList component.
 */
class ClayList extends Component {
	/**
	 * Continues the propagation of the checkbox changed event
	 * @param {!Event} event
	 * @private
	 */
	handleItemToggled_(event) {
		this.emit('itemToggled', event);
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayList.STATE = {
	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayList
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayList
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * List of items.
	 * @instance
	 * @memberof ClayList
	 * @type {?array|undefined}
	 * @default undefined
	 */
	items: Config.array(),

	/**
	 * Flag to indicate if the list group items are selectable.
	 * @instance
	 * @memberof ClayList
	 * @type {?bool|undefined}
	 * @default false
	 */
	selectable: Config.bool().value(false),

	/**
	 * Schema mapping list item fields with item data properties.
	 * @instance
	 * @memberof ClayList
	 * @type {!object}
	 * @default undefined
	 */
	schema: Config.shapeOf({
		actionItems: Config.string(),
		description: Config.string(),
		href: Config.string(),
		icon: Config.string(),
		iconShapesMap: Config.object(),
		iconsMap: Config.object(),
		labels: Config.string(),
		selected: Config.string(),
		title: Config.string(),
	}).required(),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayList
	 * @type {?string|undefined}
	 * @default undefined
	 */
	spritemap: Config.string(),

	/**
	 * Header of the list group.
	 * @instance
	 * @memberof ClayList
	 * @type {?string|undefined}
	 * @default undefined
	 */
	title: Config.string(),
};

defineWebComponent('clay-list', ClayList);

Soy.register(ClayList, templates);

export {ClayList};
export default ClayList;
