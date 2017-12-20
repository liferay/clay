import 'clay-link';
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
	 * Continues the propagation of the column sorting button click event
	 * @param {!Event} event
	 * @private
	 */
	handleSortingClick_(event) {
		event.preventDefault();

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
	 * Schema of the table containing an element per column with label and the
	 * name of the field with the value.
	 * @instance
	 * @memberof ClayTable
	 * @type {!array}
	 * @default undefined
	 */
	schema: Config.arrayOf(
		Config.shapeOf({
			fieldName: Config.string().required(),
			label: Config.string(),
			sortingOrder: Config.oneOf(['asc', 'desc']),
		})
	).required(),

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
