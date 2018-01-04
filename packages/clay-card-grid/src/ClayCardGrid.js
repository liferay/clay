import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
/* eslint-disable */
import {
	ClayCard,
	ClayFileCard,
	ClayHorizontalCard,
	ClayImageCard,
	ClayUserCard
} from 'clay-card';
/* eslint-enable */
import {Config} from 'metal-state';

import templates from './ClayCardGrid.soy.js';

/**
 * Metal ClayCardGrid component.
 */
class ClayCardGrid extends Component {
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
ClayCardGrid.STATE = {
	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayCardGrid
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayCardGrid
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * List of items.
	 * @instance
	 * @memberof ClayCardGrid
	 * @type {?array|undefined}
	 * @default undefined
	 */
	items: Config.array(),

	/**
	 * Schema mapping list item fields with item data properties.
	 * @instance
	 * @memberof ClayCardGrid
	 * @type {!array}
	 * @default undefined
	 */
	schema: Config.arrayOf(
		Config.shapeOf({
			contentRenderer: Config.string(),
			contentRendererMap: Config.object(),
			fieldName: Config.string(),
			fieldsMap: Config.object(),
			fileTypeStylesMap: Config.object(),
			iconsMap: Config.object(),
			labelStylesMap: Config.object(),
			userColorsMap: Config.object(),
		})
	).required(),

	/**
	 * Flag to indicate if the list group items are selectable.
	 * @instance
	 * @memberof ClayCardGrid
	 * @type {?bool}
	 * @default false
	 */
	selectable: Config.bool().value(false),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayCardGrid
	 * @type {?string|undefined}
	 * @default undefined
	 */
	spritemap: Config.string(),

	/**
	 * Header of the list group.
	 * @instance
	 * @memberof ClayCardGrid
	 * @type {?string|undefined}
	 * @default undefined
	 */
	title: Config.string(),
};

defineWebComponent('clay-card-grid', ClayCardGrid);

Soy.register(ClayCardGrid, templates);

export {ClayCardGrid};
export default ClayCardGrid;
