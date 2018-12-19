import 'clay-checkbox';
import 'clay-dropdown';
import 'clay-icon';
import 'clay-label';
import 'clay-link';
import 'clay-sticker';
// eslint-disable-next-line
import { ClayActionsDropdown } from 'clay-dropdown';
import {Config} from 'metal-state';
import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';

import templates from './ClayList.soy.js';

/**
 * Metal ClayList component.
 * @extends ClayComponent
 */
class ClayList extends ClayComponent {
	/**
	 * Continues the propagation of the checkbox changed event
	 * @param {!Event} event
	 * @private
	 */
	_handleItemToggled(event) {
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
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayList
	 * @type {?object}
	 */
	data: Config.object(),

	/**
	 * Object that wires events with default listeners
	 * @default undefined
	 * @instance
	 * @memberof ClayList
	 * @review
	 * @type {?(object|undefined)}
	 */
	defaultEventHandler: Config.object(),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayList
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayList
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * List of items.
	 * @default undefined
	 * @instance
	 * @memberof ClayList
	 * @type {?(array|undefined)}
	 */
	items: Config.array(),

	/**
	 * Flag to indicate if the list group items are selectable.
	 * @default false
	 * @instance
	 * @memberof ClayList
	 * @type {?(bool|undefined)}
	 */
	selectable: Config.bool().value(false),

	/**
	 * Schema mapping list item fields with item data properties.
	 * @default undefined
	 * @instance
	 * @memberof ClayList
	 * @type {!object}
	 */
	schema: Config.shapeOf({
		fields: Config.arrayOf(
			Config.shapeOf({
				contentRenderer: Config.string(),
				contentRendererMap: Config.object(),
				fieldName: Config.string(),
				fieldsMap: Config.object(),
				iconsMap: Config.object(),
				iconShapesMap: Config.object(),
				labelStylesMap: Config.object(),
			})
		),
		inputNameField: Config.string(),
		inputNamesMap: Config.object(),
		inputValueField: Config.string(),
	}).required(),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayList
	 * @type {?(string|undefined)}
	 */
	spritemap: Config.string(),
};

defineWebComponent('clay-list', ClayList);

Soy.register(ClayList, templates);

export {ClayList};
export default ClayList;
