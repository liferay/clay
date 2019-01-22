import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
/* eslint-disable */
import {
	ClayCardBase,
	ClayFileCard,
	ClayHorizontalCard,
	ClayImageCard,
	ClayUserCard,
} from 'clay-card';
/* eslint-enable */
import {Config} from 'metal-state';

import templates from './ClayCardGrid.soy.js';

/**
 * Metal ClayCardGrid component.
 * @extends ClayComponent
 */
class ClayCardGrid extends ClayComponent {
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
ClayCardGrid.STATE = {
	/**
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayCardGrid
	 * @type {?object}
	 */
	data: Config.object(),

	/**
	 * Object that wires events with default listeners
	 * @default undefined
	 * @instance
	 * @memberof ClayCardGrid
	 * @review
	 * @type {?(object|undefined)}
	 */
	defaultEventHandler: Config.object(),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayCardGrid
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayCardGrid
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * List of items.
	 * @default undefined
	 * @instance
	 * @memberof ClayCardGrid
	 * @type {?(array|undefined)}
	 */
	items: Config.array(),

	/**
	 * Schema mapping list item fields with item data properties.
	 * @default undefined
	 * @instance
	 * @memberof ClayCardGrid
	 * @type {!object}
	 */
	schema: Config.shapeOf({
		contentRenderer: Config.string(),
		contentRendererMap: Config.object(),
		fieldName: Config.string(),
		fieldsMap: Config.object(),
		iconsMap: Config.object(),
		inputNameField: Config.string(),
		inputNamesMap: Config.object(),
		inputValueField: Config.string(),
		labelStylesMap: Config.object(),
		stickerClassesMap: Config.object(),
		stickerIconsMap: Config.object(),
		stickerImageAltsMap: Config.object(),
		stickerImageSrcsMap: Config.object(),
		stickerShapesMap: Config.object(),
		stickerStylesMap: Config.object(),
		userColorsMap: Config.object(),
	}).required(),

	/**
	 * Flag to indicate if the list group items are selectable.
	 * @default false
	 * @instance
	 * @memberof ClayCardGrid
	 * @type {?bool}
	 */
	selectable: Config.bool().value(false),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayCardGrid
	 * @type {?(string|undefined)}
	 */
	spritemap: Config.string(),

	/**
	 * Header of the list group.
	 * @default undefined
	 * @instance
	 * @memberof ClayCardGrid
	 * @type {?(string|undefined)}
	 */
	title: Config.string(),
};

defineWebComponent('clay-card-grid', ClayCardGrid);

Soy.register(ClayCardGrid, templates);

export {ClayCardGrid};
export default ClayCardGrid;
