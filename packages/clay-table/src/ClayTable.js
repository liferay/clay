import 'clay-button';
import 'clay-checkbox';
import 'clay-dropdown';
import 'clay-label';
import 'clay-link';
import 'clay-progress-bar';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayTable.soy.js';

/**
 * Metal ClayTable component.
 */
class ClayTable extends Component {
	/**
	 * Continues the propagation of the cell content click event
	 * @param {!Event} event
	 * @private
	 */
	handleCellContentClick_(event) {
		this.emit('cellContentClicked', event);
	}

	/**
	 * Continues the propagation of the checkbox changed event
	 * @param {!Event} event
	 * @private
	 */
	handleItemToggled_(event) {
		this.emit('itemToggled', event);
	}

	/**
	 * Continues the propagation of the column sorting button click event
	 * @param {!Event} event
	 * @private
	 */
	handleSortingClick_(event) {
		this.emit('sortingButtonClicked', event);
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayTable.STATE = {
	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayTable
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayTable
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * List of items to display in the table.
	 * @instance
	 * @memberof ClayTable
	 * @type {?array|undefined}
	 * @default undefined
	 */
	items: Config.array(),

	/**
	 * Schema of the table containing an element per column with label and the
	 * name of the field with the value.
	 * @instance
	 * @memberof ClayTable
	 * @type {!array}
	 * @default undefined
	 */
	schema: Config.arrayOf(
		Config.shapeOf({
			contentRenderer: Config.string(),
			fieldName: Config.string().required(),
			label: Config.string(),
			sortingOrder: Config.oneOf(['asc', 'desc']),
		})
	).required(),

	/**
	 * Flag to indicate if the table items are selectable or not.
	 * @instance
	 * @memberof ClayTable
	 * @type {?bool}
	 * @default false
	 */
	selectable: Config.bool().value(false),

	/**
	 * Table responsive sizes. Available `lg`, `md`, `sm` and `xl`.
	 * @instance
	 * @memberof ClayTable
	 * @type {?string|undefined}
	 * @default undefined
	 */
	size: Config.oneOf(['lg', 'md', 'sm', 'xl']),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayTable
	 * @type {?string|undefined}
	 * @default undefined
	 */
	spritemap: Config.string(),
};

defineWebComponent('clay-table', ClayTable);

Soy.register(ClayTable, templates);

export {ClayTable};
export default ClayTable;
